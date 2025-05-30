import { FunctionComponent, SetStateAction } from "react";
import React, { useState, useEffect } from 'react';
import "./TestPage01.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const LOCAL_STORAGE_KEY = "respostasPage1"; 

const answerMapping: { [key: string]: number } = {
  "nadaEmpolgado": 1, "poucoEmpolgado": 2, "neutro": 3, "empolgado": 4, "muitoEmpolgado": 5,
  "nadaInteressado": 1, "poucoInteressado": 2, "interessado": 4, "muitoInteressado": 5,
  "nadaAtraido": 1, "poucoAtraido": 2, "atraido": 4, "muitoAtraido": 5,
  "nadaEmocionante": 1, "poucoEmocionante": 2, "emocionante": 4, "muitoEmocionante": 5
};

interface TestPage01DesktopProps {
  onRespostasChange: (respostas: { resposta1: number | null; resposta2: number | null; resposta3: number | null; resposta4: number | null; }) => void;
}

const TestPage01Desktop: FunctionComponent<TestPage01DesktopProps> = ({ onRespostasChange }) => {

const [redirecting, setRedirecting] = useState(false); // Keep for button visual feedback if desired
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
      console.error("Failed to parse respostas from localStorage for Page 1", error);
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

  const handleLinkClick = () => { // Renamed from handleRedirect to avoid confusion
    setRedirecting(true);
    setTimeout(() => {
      setRedirecting(false); 
    }, 1000); // Shorter delay for link clicks
  };

  return (
    <div className="testpage01-desktop">
      <div className="test-page-container"> {/* Renamed from test-page3 for clarity */}
        {/* The background image div is removed, .test-page-container will be styled */}
        <img className="logo-padrao" alt="CodeQuest Logo" src="/logo-padrao1@2x.png" /> {/* Simplified class */}
        
        <div className="title-test"> {/* Simplified class */}
          <div className="rectangle-title-bg" /> {/* Simplified class */}
          <div className="title-text"> {/* Simplified class */}
            Em uma escala de 1 a 5, o quanto você:
          </div>
        </div>

        <div className="questions-area"> {/* Renamed from text-test3 */}
          <div className="question-row">
            <div className="question-container se-sente-empolgado-container"> {/* Added base class */}
              <ul className="question-options-list"> {/* Renamed for clarity */}
                <h3 className="question-title"> {/* Simplified class */}
                  <b>
                    Se sente empolgado com a ideia de criar programas que podem
                    melhorar a forma como as empresas ou pessoas realizam tarefas?
                  </b>
                </h3>
              {/* Options */}
              <li className="option-item"> {/* Changed h4 to li for semantic list */}
              <label><input 
                  type="radio" 
                  value="nadaEmpolgado" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["nadaEmpolgado"]}
                  onChange={() => handleRespostaChange("resposta1", "nadaEmpolgado")}
                  />{" "}
                   Nada Empolgado
                </label>
              </li>
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="poucoEmpolgado" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["poucoEmpolgado"]}
                  onChange={() => handleRespostaChange("resposta1", "poucoEmpolgado")}
                  />{" "}
                   Pouco Empolgado
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
                  value="empolgado" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["empolgado"]}
                  onChange={() => handleRespostaChange("resposta1", "empolgado")}
                  />{" "}
                   Empolgado
                </label>
              </li>
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="muitoEmpolgado" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["muitoEmpolgado"]}
                  onChange={() => handleRespostaChange("resposta1", "muitoEmpolgado")}
                  />{" "}
                   Muito Empolgado
                </label>
              </li>
            </ul>
            </div>

            <div className="question-container gostaria-de-aprender-container2"> {/* Added base class */}
              <ul className="question-options-list">
                <h3 className="question-title">
                  <b>
                    Gostaria de aprender a linguagem "código" para criar
                    aplicativos, jogos ou software?
                  </b>
                </h3>
              {/* Options */}
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="nadaInteressado" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["nadaInteressado"]}
                  onChange={() => handleRespostaChange("resposta2", "nadaInteressado")}
                  />{" "}
                   Nada interessado
                </label>
              </li>
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="poucoInteressado" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["poucoInteressado"]}
                  onChange={() => handleRespostaChange("resposta2", "poucoInteressado")}
                  />{" "}
                   Pouco interessado
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
                  value="interessado" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["interessado"]}
                  onChange={() => handleRespostaChange("resposta2", "interessado")}
                  />{" "}
                   Interessado
                </label>
              </li>
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="muitoInteressado" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["muitoInteressado"]}
                  onChange={() => handleRespostaChange("resposta2", "muitoInteressado")}
                  />{" "}
                   Muito Interessado
                </label>
              </li>
            </ul>
            </div>
          </div>

          <div className="question-row">
            <div className="question-container se-sente-atrado-container"> {/* Added base class */}
              <ul className="question-options-list">
                <h3 className="question-title">
                  <b>
                    Se sente atraído por trabalhar em equipe para criar
                    aplicativos ou software maiores?
                  </b>
                </h3>
              {/* Options */}
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="nadaAtraido" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["nadaAtraido"]}
                  onChange={() => handleRespostaChange("resposta3", "nadaAtraido")}
                  />{" "}
                   Nada atraido
                </label>
              </li>
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="poucoAtraido" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["poucoAtraido"]}
                  onChange={() => handleRespostaChange("resposta3", "poucoAtraido")}
                  />{" "}
                   Pouco atraido
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
                  value="atraido" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["atraido"]}
                  onChange={() => handleRespostaChange("resposta3", "atraido")}
                  />{" "}
                   Atraido
                </label>
              </li>
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="muitoAtraido" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["muitoAtraido"]}
                  onChange={() => handleRespostaChange("resposta3", "muitoAtraido")}
                  />{" "}
                   Muito Atraido
                </label>
              </li>
            </ul>
            </div>

            <div className="question-container considera-emocionante-a-container"> {/* Added base class */}
              <ul className="question-options-list">
                <h3 className="question-title">
                  <b>
                    Considera emocionante a possibilidade de ver suas ideias se
                    transformarem em programas ou aplicativos reais?
                  </b>
                </h3>
              {/* Options */}
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="nadaEmocionante" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["nadaEmocionante"]}
                  onChange={() => handleRespostaChange("resposta4", "nadaEmocionante")}
                  />{" "}
                   Nada emocionante
                </label>
              </li>
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="poucoEmocionante" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["poucoEmocionante"]}
                  onChange={() => handleRespostaChange("resposta4", "poucoEmocionante")}
                  />{" "}
                   Pouco emocionante
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
                  value="emocionante" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["emocionante"]}
                  onChange={() => handleRespostaChange("resposta4", "emocionante")}
                  />{" "}
                   Emocionante
                </label>
              </li>
              <li className="option-item">
              <label><input 
                  type="radio" 
                  value="muitoEmocionante" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["muitoEmocionante"]}
                  onChange={() => handleRespostaChange("resposta4", "muitoEmocionante")}
                  />{" "}
                   Muito Emocionante
                </label>
              </li>
            </ul>
            </div>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <Link to="/">
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
          <Link to="/testpage02">
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
}

export default TestPage01Desktop;
