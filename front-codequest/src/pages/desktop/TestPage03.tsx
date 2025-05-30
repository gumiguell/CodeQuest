import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage03.css"; // Assuming TestPage03.css will be created/updated
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "respostasPage3"; 

const answerMapping: { [key: string]: number } = {
  "nadaGostaria": 1, "poucoGostaria": 2, "neutro": 3, "gostaria": 4, "muitoGostaria": 5,
  "nadaAtrai": 1, "poucoAtrai": 2, "atrai": 4, "muitoAtrai": 5,
  "nadaValorizo": 1, "poucoValorizo": 2, "valorizo": 4, "muitoValorizo": 5,
  "nadaMotivado": 1, "poucoMotivado": 2, "motivado": 4, "muitoMotivado": 5
};

interface TestPage03DesktopProps {
  onRespostasChange: (respostas: { resposta1: number | null; resposta2: number | null; resposta3: number | null; resposta4: number | null; }) => void;
}

const TestPage03Desktop: FunctionComponent<TestPage03DesktopProps> = ({ onRespostasChange }) => {
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
        console.error("Failed to parse respostas from localStorage for TestPage03", error);
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
      <div className="test-page-container"> {/* Renamed from test-page1 */}
        <img className="logo-padrao" alt="CodeQuest Logo" src="/logo-padrao1@2x.png" /> {/* Simplified class */}
        
        <div className="title-test"> {/* Simplified class */}
          <div className="rectangle-title-bg" /> {/* Simplified class */}
          <div className="title-text"> {/* Simplified class */}
            Em uma escala de 1 a 5, o quanto você:
          </div>
        </div>

        <div className="questions-area"> {/* Renamed from text-test1 */}
          <div className="question-row">
            <div className="question-block gostaria-de-aprender-container1"> {/* Base + specific class */}
              <h3 className="question-title">
                <b>
                  Gostaria de aprender a fazer páginas na internet usando coisas
                  simples, como imagens e textos?
                </b>
              </h3>
              <ul className="question-options-list">
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="nadaGostaria" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["nadaGostaria"]}
                    onChange={() => handleRespostaChange("resposta1", "nadaGostaria")}
                    />{" "}
                    Nada Gostaria
                    </label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio"
                  value="poucoGostaria" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["poucoGostaria"]}
                    onChange={() => handleRespostaChange("resposta1", "poucoGostaria")}
                    />{" "}                  
                  Pouco gostaria</label>
                </li>
                <li className="option-item">
                  <label><input
                  type="radio" 
                  value="neutro" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["neutro"]}
                    onChange={() => handleRespostaChange("resposta1", "neutro")}
                    />{" "}                  
                  Neutro</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="gostaria" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["gostaria"]}
                    onChange={() => handleRespostaChange("resposta1", "gostaria")}
                    />{" "}                  
                  Gostaria</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="muitoGostaria" 
                  name="resposta1"
                  checked={respostas.resposta1 === answerMapping["muitoGostaria"]}
                    onChange={() => handleRespostaChange("resposta1", "muitoGostaria")}
                    />{" "}                  
                  Muito Gostaria</label>
                </li>
              </ul>
            </div>

            <div className="question-block transformar-designs-visuais-container">
              <h3 className="question-title">
                <b>
                  Transformar designs visuais em sites interativos e funcionais
                  te atrai?
                </b>
              </h3>
              <ul className="question-options-list">
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="nadaAtrai" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["nadaAtrai"]}
                    onChange={() => handleRespostaChange("resposta2", "nadaAtrai")}
                    />{" "}                  
                  Nada atrai</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="poucoAtrai" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["poucoAtrai"]}
                    onChange={() => handleRespostaChange("resposta2", "poucoAtrai")}
                    />{" "}                  
                  Pouco atrai</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="neutro" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["neutro"]}
                  onChange={() => handleRespostaChange("resposta2", "neutro")}
                  />{" "}                  
                Neutro</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="atrai" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["atrai"]}
                  onChange={() => handleRespostaChange("resposta2", "atrai")}
                  />{" "}                  
                Atrai</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="muitoAtrai" 
                  name="resposta2"
                  checked={respostas.resposta2 === answerMapping["muitoAtrai"]}
                  onChange={() => handleRespostaChange("resposta2", "muitoAtrai")}
                  />{" "}                  
                Muito Atrai</label>
                </li>
              </ul>
            </div>
          </div>

          <div className="question-row">
            <div className="question-block valoriza-a-capacidade-container">
              <h3 className="question-title">
                <b>
                  Valoriza a capacidade de criar sites que se adaptam a
                  diferentes dispositivos, como computadores, tablets e
                  smartphones?
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
                Nada Valorizo</label>
                </li>
                <li className="option-item">
                  <label>
                    <input
                      type="radio"
                      value="poucoValorizo"
                      name="resposta3"
                      checked={respostas.resposta3 === answerMapping["poucoValorizo"]}
                      onChange={() => handleRespostaChange("resposta3", "poucoValorizo")}
                    />
                    {" "} Pouco Valorizo
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
                Neutro</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="valorizo" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["valorizo"]}
                  onChange={() => handleRespostaChange("resposta3", "valorizo")}
                  />{" "}                  
                Valorizo</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="muitoValorizo" 
                  name="resposta3"
                  checked={respostas.resposta3 === answerMapping["muitoValorizo"]}
                  onChange={() => handleRespostaChange("resposta3", "muitoValorizo")}
                  />{" "}                  
                Muito Valorizo</label>
                </li>
              </ul>
            </div>

            <div className="question-block se-sente-motivado-container1">
              <h3 className="question-title">
                <b>
                  Se sente motivado a aprender a construir sites modernos,
                  utilizando as últimas tecnologias da web?
                </b>
              </h3>
              <ul className="question-options-list">
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="nadaMotivado" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["nadaMotivado"]}
                  onChange={() => handleRespostaChange("resposta4", "nadaMotivado")}
                  />{" "}                  
                Nada Motivado</label> 
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="poucoMotivado" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["poucoMotivado"]} // Corrected this line
                  onChange={() => handleRespostaChange("resposta4", "poucoMotivado")} // Corrected this line
                  />{" "}                  
                  Pouco motivado</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="neutro" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["neutro"]}
                  onChange={() => handleRespostaChange("resposta4", "neutro")}
                  />{" "}                  
                Neutro</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="motivado" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["motivado"]}
                  onChange={() => handleRespostaChange("resposta4", "motivado")}
                  />{" "}                  
                Motivado</label>
                </li>
                <li className="option-item">
                  <label><input 
                  type="radio" 
                  value="muitoMotivado" 
                  name="resposta4"
                  checked={respostas.resposta4 === answerMapping["muitoMotivado"]}
                  onChange={() => handleRespostaChange("resposta4", "muitoMotivado")}
                  />{" "}                  
                Muito Motivado</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <Link to="/testpage02">
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
          <Link to="/testpage04">
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

export default TestPage03Desktop;
