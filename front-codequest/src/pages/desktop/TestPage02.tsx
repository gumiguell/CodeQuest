import { FunctionComponent, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage02.css"; // Assuming TestPage02.css will be created or updated for responsive styles
import { Link } from 'react-router-dom';
import { useState } from "react";
import React from "react";

const LOCAL_STORAGE_KEY = "respostasPage2"; 

const answerMapping: { [key: string]: number } = {
  "nadaBacana": 1, "poucoBacana": 2, "neutro": 3, "bacana": 4, "muitoBacana": 5,
  "nadaImaginavel": 1, "poucoImaginavel": 2, "imaginavel": 4, "muitoImaginavel": 5,
  "nadaValorizo": 1, "poucoValorizo": 2, "valorizo": 4, "muitoValorizo": 5,
  "nadaGostaria": 1, "poucoGostaria": 2, "gostaria": 4, "muitoGostaria": 5
};

interface TestPage02DesktopProps {
  onRespostasChange: (respostas: { resposta1: number | null; resposta2: number | null; resposta3: number | null; resposta4: number | null; }) => void;
}

const TestPage02Desktop: FunctionComponent<TestPage02DesktopProps> = ({ onRespostasChange }) => {
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
        console.error("Failed to parse respostas from localStorage for TestPage02", error);
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
    // General container class for consistent padding/max-width if TestPage02.css is created
    <div className="test-page-wrapper"> 
      <div className="test-page-container"> {/* Renamed from test-page2 */}
        {/* Background image div can be removed if .test-page-container handles background */}
        {/* <div className="background-iniciar2">
          <img
            className="rectangle-login-icon3" // This class implies it's a card background, not a full bg
            alt=""
            src="/rectangle-quest.png" 
          />
        </div> */}
        <img className="logo-padrao" alt="CodeQuest Logo" src="/logo-padrao1@2x.png" /> {/* Simplified class */}
        
        <div className="title-test"> {/* Simplified class */}
          <div className="rectangle-title-bg" /> {/* Simplified class */}
          <div className="title-text"> {/* Simplified class */}
            Em uma escala de 1 a 5, o quanto você:
          </div>
        </div>

        {/* Changed <ol> to <div> for questions area */}
        <div className="questions-area"> {/* Renamed from text-test2 */}
          <div className="question-row">
            <div className="question-block acha-bacana-a-container"> {/* Use a common class + specific one */}
              <h3 className="question-title"> {/* Simplified class */}
                <b>
                  Acha bacana a ideia de criar aplicativos que possam ser usados
                  em smartphones ou tablets?
                </b>
              </h3>
              <ul className="question-options-list"> {/* Wrapper for options */}
                <li className="option-item"> {/* h4 changed to li */}
                  <label><input 
                    type="radio" 
                    value="nadaBacana" 
                    name="resposta1"
                    checked={respostas.resposta1 === answerMapping["nadaBacana"]}
                    onChange={() => handleRespostaChange("resposta1", "nadaBacana")}
                    />{" "}
                    Nada bacana
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="poucoBacana" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["poucoBacana"]}
                  onChange={() => handleRespostaChange("resposta1", "poucoBacana")}
                  />{" "}
                  Pouco bacana
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="neutro" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["neutro"]}
                  onChange={() => handleRespostaChange("resposta1", "neutro")}
                  />{" "}
                  Neutro
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="bacana" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["bacana"]}
                  onChange={() => handleRespostaChange("resposta1", "bacana")}
                  />{" "}
                  Bacana
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="muitoBacana" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["muitoBacana"]}
                  onChange={() => handleRespostaChange("resposta1", "muitoBacana")}
                  />{" "}
                  Muito bacana
                  </label>
                </li>
              </ul>
            </div>

            <div className="question-block imagina-se-aprendendo-a-container">
              <h3 className="question-title">
                <b>
                  Imagina-se aprendendo a desenvolver aplicativos que facilitem
                  a vida das pessoas, como apps de transporte ou de pedidos de
                  comida?
                </b>
              </h3>
              <ul className="question-options-list">
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="nadaImaginavel" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["nadaImaginavel"]}
                  onChange={() => handleRespostaChange("resposta2", "nadaImaginavel")}
                  />{" "}
                  Nada imaginavel
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="poucoImaginavel" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["poucoImaginavel"]}
                  onChange={() => handleRespostaChange("resposta2", "poucoImaginavel")}
                  />{" "}
                  Pouco imaginavel
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="neutro"
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["neutro"]}
                  onChange={() => handleRespostaChange("resposta2", "neutro")}
                  />{" "}
                  Neutro
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="imaginavel" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["imaginavel"]}
                  onChange={() => handleRespostaChange("resposta2", "imaginavel")}
                  />{" "}
                  Imaginavel
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="muitoImaginavel" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["muitoImaginavel"]}
                  onChange={() => handleRespostaChange("resposta2", "muitoImaginavel")}
                  />{" "}
                  Muito imaginavel
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="question-row">
            <div className="question-block valoriza-a-ideia-container">
              <h3 className="question-title">
                <b>
                  Valoriza a ideia de criar interfaces amigáveis e atraentes
                  para seus aplicativos?
                </b>
              </h3>
              <ul className="question-options-list">
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="nadaValorizo" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["nadaValorizo"]}
                  onChange={() => handleRespostaChange("resposta3", "nadaValorizo")}
                  />{" "}
                  Nada valorizo
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="poucoValorizo" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["poucoValorizo"]}
                  onChange={() => handleRespostaChange("resposta3", "poucoValorizo")}
                  />{" "}
                  Pouco valorizo
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="neutro" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["neutro"]}
                  onChange={() => handleRespostaChange("resposta3", "neutro")}
                  />{" "}
                  Neutro
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="valorizo" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["valorizo"]}
                  onChange={() => handleRespostaChange("resposta3", "valorizo")}
                  />{" "}
                  Valorizo
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="muitoValorizo" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["muitoValorizo"]}
                  onChange={() => handleRespostaChange("resposta3", "muitoValorizo")}
                  />{" "}
                  Muito valorizo
                  </label>
                </li>
              </ul>
            </div>

            <div className="question-block gostaria-de-criar-container">
              <h3 className="question-title">
                <b>
                  Gostaria de criar aplicativos que aproveitassem recursos
                  específicos de dispositivos móveis, como câmeras e sensores?
                </b>
              </h3>
              <ul className="question-options-list">
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="nadaGostaria" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["nadaGostaria"]}
                  onChange={() => handleRespostaChange("resposta4", "nadaGostaria")}
                  />{" "}
                  Nada gostaria
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="poucoGostaria" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["poucoGostaria"]}
                  onChange={() => handleRespostaChange("resposta4", "poucoGostaria")}
                  />{" "}
                  Pouco gostaria
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="neutro" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["neutro"]}
                  onChange={() => handleRespostaChange("resposta4", "neutro")}
                  />{" "}
                  Neutro
                  </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="gostaria" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["gostaria"]}
                  onChange={() => handleRespostaChange("resposta4", "gostaria")}
                  />{" "}
                  Gostaria
                  </label> 
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="muitoGostaria" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["muitoGostaria"]}
                  onChange={() => handleRespostaChange("resposta4", "muitoGostaria")}
                  />{" "}
                  Muito gostaria
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <Link to="/testpage01">
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
          <Link to="/testpage03">
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

export default TestPage02Desktop;
