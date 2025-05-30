import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage04.css"; // Assuming TestPage04.css will be created/updated
import { Link } from 'react-router-dom';
import React,{ useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "respostasPage4"; 

const answerMapping: { [key: string]: number } = {
  "nadaInteressado": 1, "poucoInteressado": 2, "neutro": 3, "interessado": 4, "muitoInteressado": 5
  // This mapping applies to all questions on this page
};

interface TestPage04DesktopProps {
  onRespostasChange: (respostas: { resposta1: number | null; resposta2: number | null; resposta3: number | null; resposta4: number | null; }) => void;
}

const TestPage04Desktop: FunctionComponent<TestPage04DesktopProps> = ({ onRespostasChange }) => {
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
        console.error("Failed to parse respostas from localStorage for TestPage04", error);
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

  return (
    <div className="test-page-wrapper"> {/* Consistent wrapper */}
      <div className="test-page-container"> {/* Renamed from test-page */}
        {/* Background image div can be removed */}
        <img className="logo-padrao" alt="CodeQuest Logo" src="/logo-padrao1@2x.png" /> {/* Simplified class */}
        
        <div className="title-test"> {/* Simplified class, was title-test3 */}
          <div className="rectangle-title-bg" /> {/* Simplified class */}
          <div className="title-text"> {/* Simplified class */}
            Em uma escala de 1 a 5, o quanto você:
          </div>
        </div>

        <div className="questions-area"> {/* Renamed from text-test */}
          <div className="question-row">
            <div className="question-block se-interessa-por-container"> {/* Base + specific class */}
              <h3 className="question-title">
                <b>
                  Se interessa por descobrir informações importantes escondidas
                  em grandes quantidades de dados?
                </b>
              </h3>
              <ul className="question-options-list">
                {["nadaInteressado", "poucoInteressado", "neutro", "interessado", "muitoInteressado"].map(value => (
                  <li className="option-item" key={value}>
                    <label>
                      <input 
                        type="radio" 
                        value={value}
                        name="resposta1"
                        checked={respostas.resposta1 === answerMapping[value]}
                        onChange={() => handleRespostaChange("resposta1", value)}
                      />{" "}
                      {value.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} {/* Auto-generate label text */}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="question-block gostaria-de-aprender-container">
              <h3 className="question-title">
                <b>
                  Gostaria de aprender como usar números e estatísticas para
                  encontrar padrões e tendências em conjuntos de informações?
                </b>
              </h3>
              <ul className="question-options-list">
                {["nadaInteressado", "poucoInteressado", "neutro", "interessado", "muitoInteressado"].map(value => (
                  <li className="option-item" key={value}>
                    <label>
                      <input 
                        type="radio" 
                        value={value}
                        name="resposta2"
                        checked={respostas.resposta2 === answerMapping[value]}
                        onChange={() => handleRespostaChange("resposta2", value)}
                      />{" "}
                      {value.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="question-row">
            <div className="question-block valoriza-a-possibilidade-container">
              <h3 className="question-title">
                <b>
                  Valoriza a possibilidade de ajudar empresas a tomar decisões
                  melhores com base em dados concretos?
                </b>
              </h3>
              <ul className="question-options-list">
                {["nadaInteressado", "poucoInteressado", "neutro", "interessado", "muitoInteressado"].map(value => (
                  <li className="option-item" key={value}>
                    <label>
                      <input 
                        type="radio" 
                        value={value}
                        name="resposta3"
                        checked={respostas.resposta3 === answerMapping[value]}
                        onChange={() => handleRespostaChange("resposta3", value)}
                      />{" "}
                      {value.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="question-block se-sente-motivado-container">
              <h3 className="question-title">
                <b>
                  Se sente motivado a criar visualizações de dados interessantes
                  para tornar informações complexas mais compreensíveis?
                </b>
              </h3>
              <ul className="question-options-list">
                {["nadaInteressado", "poucoInteressado", "neutro", "interessado", "muitoInteressado"].map(value => (
                  <li className="option-item" key={value}>
                    <label>
                      <input 
                        type="radio" 
                        value={value}
                        name="resposta4"
                        checked={respostas.resposta4 === answerMapping[value]}
                        onChange={() => handleRespostaChange("resposta4", value)}
                      />{" "}
                      {value.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <Link to="/testpage03">
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
          <Link to="/testpage05">
              <Button
                className="boto-continuar"
                name="Botão Continuar"
                id="btnContinuar"
                variant="primary"
                onClick={handleLinkClick}
                disabled={redirecting}
              >
                {redirecting ? "Aguarde..." : "CONTINUAR"}
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestPage04Desktop;
