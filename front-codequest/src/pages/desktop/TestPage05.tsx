import { FunctionComponent } from "react";
import "./TestPage05.css"; // Assuming TestPage05.css will be created/updated
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React,{ useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "respostasPage5";

const answerMapping: { [key: string]: number } = {
  "nadaPreocupado": 1, "poucoPreocupado": 2, "neutro": 3, "preocupado": 4, "muitoPreocupado": 5,
  "nadaInteressado": 1, "poucoIneressado": 2, "poucoInteressado": 2, "interessado": 4, "muitoInteressado": 5,
  "nadaMotivado": 1, "poucoMotivado": 2, "motivado": 4, "muitoMotivado": 5
};

interface TestPage05DesktopProps {
  onRespostasChange: (respostas: { resposta1: number | null; resposta2: number | null; resposta3: number | null; resposta4: number | null; }) => void;
}

const TestPage05Desktop: FunctionComponent<TestPage05DesktopProps> = ({ onRespostasChange }) => {
  const [redirecting, setRedirecting] = useState(false);
  const [respostas, setRespostas] = useState<{ resposta1: number | null; resposta2: number | null; resposta3: number | null; resposta4: number | null; }>({
    resposta1: null,
    resposta2: null,
    resposta3: null,
    resposta4: null,
  });

  React.useEffect(() => {
    onRespostasChange(respostas);
  }, [onRespostasChange, respostas]);

  useEffect(() => {
    const savedRespostas = localStorage.getItem(LOCAL_STORAGE_KEY); 
    if (savedRespostas) {
      try {
        const parsedRespostas = JSON.parse(savedRespostas);
        setRespostas({
          resposta1: typeof parsedRespostas.resposta1 === 'number' ? parsedRespostas.resposta1 : null,
          resposta2: typeof parsedRespostas.resposta2 === 'number' ? parsedRespostas.resposta2 : null,
          resposta3: typeof parsedRespostas.resposta3 === 'number' ? parsedRespostas.resposta3 : null,
          resposta4: typeof parsedRespostas.resposta4 === 'number' ? parsedRespostas.resposta4 : null,
        });
      } catch (error) {
        console.error("Failed to parse respostas from localStorage for TestPage05", error);
        setRespostas({ resposta1: null, resposta2: null, resposta3: null, resposta4: null });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(respostas)); 
  }, [respostas]);
  
  const handleRespostaChange = (pergunta: keyof typeof respostas, respostaValue: string) => {
    const mappedValue = answerMapping[respostaValue];
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [pergunta]: mappedValue !== undefined ? mappedValue : (respostaValue === "neutro" ? 3 : null),
    }));
  };

  const handleLinkClick = () => {
    setRedirecting(true);
    setTimeout(() => {
      setRedirecting(false); 
    }, 1000); 
  };

  // Helper to generate radio options for a question
  const renderOptions = (questionName: keyof typeof respostas, options: string[]) => {
    return options.map(value => (
      <li className="option-item" key={value}>
        <label>
          <input 
            type="radio" 
            value={value}
            name={questionName}
            checked={respostas[questionName] === answerMapping[value]}
            onChange={() => handleRespostaChange(questionName, value)}
          />{" "}
          {/* Auto-generate label text, handling the typo case */}
          {value === "poucoIneressado" ? "Pouco Interessado" : value.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
        </label>
      </li>
    ));
  };

  return (
    <div className="test-page-wrapper"> {/* Consistent wrapper */}
      <div className="test-page-container"> {/* Renamed from test-page4 */}
        <img className="logo-padrao" alt="CodeQuest Logo" src="/logo-padrao1@2x.png" /> {/* Simplified class */}
        
        <div className="title-test"> {/* Simplified class, was title-test3 */}
          <div className="rectangle-title-bg" /> {/* Simplified class */}
          <div className="title-text"> {/* Simplified class */}
            Em uma escala de 1 a 5, o quanto você:
          </div>
        </div>

        <div className="questions-area"> {/* Renamed from text-test4 */}
          <div className="question-row">
            <div className="question-block se-preocupa-em-container"> {/* Base + specific class */}
              <h3 className="question-title">
                <b>
                  Se preocupa em proteger informações pessoais e digitais de
                  possíveis ameaças?
                </b>
              </h3>
              <ul className="question-options-list">
                {renderOptions("resposta1", ["nadaPreocupado", "poucoPreocupado", "neutro", "preocupado", "muitoPreocupado"])}
              </ul>
            </div>

            <div className="question-block se-sente-atrado-container1">
              <h3 className="question-title">
                <b>
                  Se sente atraído pela ideia de entender como hackers trabalham
                  para criar defesas contra ataques cibernéticos?
                </b>
              </h3>
              <ul className="question-options-list">
                 {/* Note the typo "poucoIneressado" here as per original file value */}
                {renderOptions("resposta2", ["nadaInteressado", "poucoIneressado", "neutro", "interessado", "muitoInteressado"])}
              </ul>
            </div>
          </div>

          <div className="question-row">
            <div className="question-block gostaria-de-aprender-container3">
              <h3 className="question-title">
                <b>
                  Gostaria de aprender a criar estratégias de segurança para
                  proteger sistemas e redes de possíveis invasões?
                </b>
              </h3>
              <ul className="question-options-list">
                {/* This uses "poucoInteressado" (correct spelling) */}
                {renderOptions("resposta3", ["nadaInteressado", "poucoInteressado", "neutro", "interessado", "muitoInteressado"])}
              </ul>
            </div>

            <div className="question-block se-sente-motivado-container2">
              <h3 className="question-title">
                <b>
                  Se sente motivado a estar atualizado sobre as últimas ameaças
                  digitais e como se defender delas?
                </b>
              </h3>
              <ul className="question-options-list">
                {renderOptions("resposta4", ["nadaMotivado", "poucoMotivado", "neutro", "motivado", "muitoMotivado"])}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <Link to="/testpage04">
              <Button
                className="boto-anterior"
                name="Botão Anterior"
                id="btnAnterior"
                variant="primary"
                onClick={handleLinkClick}
                disabled={redirecting}
              >
                {redirecting ? "..." : <img src="/arrow.svg" alt="Anterior" />}
              </Button>
          </Link>
          {/* Link to /save (SavePage) as this is the last test page */}
          <Link to="/save"> 
              <Button
                className="boto-continuar" // Re-using class, but text is FINALIZAR
                name="Botão Finalizar" // Changed name for clarity
                id="btnFinalizar"       // Changed ID for clarity
                variant="primary"
                onClick={handleLinkClick} 
                disabled={redirecting}
              >
                {redirecting ? "Aguarde..." : "FINALIZAR"}
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestPage05Desktop;
