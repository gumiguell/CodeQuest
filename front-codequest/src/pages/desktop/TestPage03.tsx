import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage03.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";

interface TestPage03DesktopProps {
  onRespostasChange: (respostas: { resposta1: string; resposta2: string; resposta3: string; resposta4: string; }) => void;
}

const TestPage03Desktop: FunctionComponent<TestPage03DesktopProps> = ({ onRespostasChange }) => {
  const [redirecting, setRedirecting] = useState(false);
  const [respostas, setRespostas] = useState({
    resposta1: "",
    resposta2: "",
    resposta3: "",
    resposta4: "",
  });

  React.useEffect(() => {
    onRespostasChange(respostas);
  }, [onRespostasChange, respostas]);

  useEffect(() => {
    // Carregar respostas salvas quando o componente monta
    const savedRespostas = localStorage.getItem("respostas");
    if (savedRespostas) {
      setRespostas(JSON.parse(savedRespostas));
    }
  }, []);

  useEffect(() => {
    // Salvar respostas no localStorage sempre que elas mudam
    localStorage.setItem("respostas", JSON.stringify(respostas));
  }, [respostas]);
  
  const handleRespostaChange = (pergunta: string, resposta: string) => {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [pergunta]: resposta,
    }));
  };

  const handleRedirect = () => {
    // Ativar o sinalizador de redirecionamento para mostrar algum indicador de carregamento (opcional).
    setRedirecting(true);

    // Atraso de 1000 milissegundos (1 segundo) antes do redirecionamento.
    setTimeout(() => {
      setRedirecting(false); // Desativar o sinalizador de redirecionamento.
    }, 5000); // 1000 milissegundos = 1 segundo
  };

  return (
    <div className="testpage03-desktop">
      <div className="test-page1">
        <div className="background-iniciar1">
          <img
            className="rectangle-login-icon3"
            alt=""
            src="/rectangle-quest.png"
          />
        </div>
        <img className="logo-padrao-icon5" alt="" src="/logo-padrao1@2x.png" />
        <div className="text-test1">
          <div className="gostaria-de-aprender-container1">
            <ul className="gostaria-de-aprender-a-fazer-p">
              <h3 className="nada-gostaria">
                <b>
                  Gostaria de aprender a fazer páginas na internet usando coisas
                  simples, como imagens e textos?
                </b>
              </h3>
            </ul>
            <ul className="gostaria-de-aprender-a-fazer-p">
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="nadaGostaria" 
                name="resposta1"
                checked={respostas.resposta1 === "nadaGostaria"}
                  onChange={() => handleRespostaChange("resposta1", "nadaGostaria")}
                  />{" "}
                   Nada Gostaria
                  </label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input 
                type="radio"
                value="poucoGostaria" 
                name="resposta1"
                checked={respostas.resposta1 === "poucoGostaria"}
                  onChange={() => handleRespostaChange("resposta1", "poucoGostaria")}
                  />{" "}                  
                 Pouco gostaria</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input
                type="radio" 
                value="neutro" 
                name="resposta1"
                checked={respostas.resposta1 === "neutro"}
                  onChange={() => handleRespostaChange("resposta1", "neutro")}
                  />{" "}                  
                 Neutro</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="gostaria" 
                name="resposta1"
                checked={respostas.resposta1 === "gostaria"}
                  onChange={() => handleRespostaChange("resposta1", "gostaria")}
                  />{" "}                  
                 Gostaria</label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoGostaria" 
                name="resposta1"
                checked={respostas.resposta1 === "muitoGostaria"}
                  onChange={() => handleRespostaChange("resposta1", "muitoGostaria")}
                  />{" "}                  
                 Muito Gostaria</label>
              </h4>
            </ul>
          </div>
          <div className="transformar-designs-visuais-container">
            <ul className="gostaria-de-aprender-a-fazer-p">
              <h3 className="nada-gostaria">
                <b>
                  Transformar designs visuais em sites interativos e funcionais
                  te atrai?
                </b>
              </h3>
            </ul>
            <ul className="gostaria-de-aprender-a-fazer-p">
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="nadaAtrai" 
                name="resposta2"
                checked={respostas.resposta2 === "nadaAtrai"}
                  onChange={() => handleRespostaChange("resposta2", "nadaAtrai")}
                  />{" "}                  
                 Nada atrai</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="poucoAtrai" 
                name="resposta2"
                checked={respostas.resposta2 === "poucoAtrai"}
                  onChange={() => handleRespostaChange("resposta2", "poucoAtrai")}
                  />{" "}                  
                 Pouco atrai</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="neutro" 
                name="resposta2"
                checked={respostas.resposta2 === "neutro"}
                onChange={() => handleRespostaChange("resposta2", "neutro")}
                />{" "}                  
               Neutro</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="atrai" 
                name="resposta2"
                checked={respostas.resposta2 === "atrai"}
                onChange={() => handleRespostaChange("resposta2", "atrai")}
                />{" "}                  
               Atrai</label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoAtrai" 
                name="resposta2"
                checked={respostas.resposta2 === "muitoAtrai"}
                onChange={() => handleRespostaChange("resposta2", "muitoAtrai")}
                />{" "}                  
               Muito Atrai</label>
              </h4>
            </ul>
          </div>
          <div className="valoriza-a-capacidade-container">
            <ul className="gostaria-de-aprender-a-fazer-p">
              <h3 className="nada-gostaria">
                <b>
                  Valoriza a capacidade de criar sites que se adaptam a
                  diferentes dispositivos, como computadores, tablets e
                  smartphones?
                </b>
              </h3>
            </ul>
            <ul className="gostaria-de-aprender-a-fazer-p">
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="nadaValorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "nadaValorizo"}
                onChange={() => handleRespostaChange("resposta3", "nadaValorizo")}
                />{" "}                  
               Nada Valorizo</label>
              </h4>
              <h4 className="nada-gostaria">
                <label>
                  <input
                    type="radio"
                    value="poucoValorizo"
                    name="resposta3"
                    checked={respostas.resposta3 === "poucoValorizo"}
                    onChange={() => handleRespostaChange("resposta3", "poucoValorizo")}
                  />
                  {" "} Pouco Valorizo
                </label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="neutro" 
                name="resposta3"
                checked={respostas.resposta3 === "neutro"}
                onChange={() => handleRespostaChange("resposta3", "neutro")}
                />{" "}                  
               Neutro</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="valorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "valorizo"}
                onChange={() => handleRespostaChange("resposta3", "valorizo")}
                />{" "}                  
               Valorizo</label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoValorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "muitoValorizo"}
                onChange={() => handleRespostaChange("resposta3", "muitoValorizo")}
                />{" "}                  
               Muito Valorizo</label>
              </h4>
            </ul>
          </div>
          <div className="se-sente-motivado-container1">
            <ul className="gostaria-de-aprender-a-fazer-p">
              <h3 className="nada-gostaria">
                <b>
                  Se sente motivado a aprender a construir sites modernos,
                  utilizando as últimas tecnologias da web?
                </b>
              </h3>
            </ul>
            <ul className="gostaria-de-aprender-a-fazer-p">
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="nadaMotivado" 
                name="resposta4"
                checked={respostas.resposta4 === "nadaMotivado"}
                onChange={() => handleRespostaChange("resposta4", "nadaMotivado")}
                />{" "}                  
               Nada Valorizo</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="poucoMotivado" name="resposta4"/> Pouco motivado</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="neutro" 
                name="resposta4"
                checked={respostas.resposta4 === "neutro"}
                onChange={() => handleRespostaChange("resposta4", "neutro")}
                />{" "}                  
               Neutro</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input 
                type="radio" 
                value="motivado" 
                name="resposta4"
                checked={respostas.resposta4 === "motivado"}
                onChange={() => handleRespostaChange("resposta4", "motivado")}
                />{" "}                  
               Motivado</label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoMotivado" 
                name="resposta4"
                checked={respostas.resposta4 === "muitoMotivado"}
                onChange={() => handleRespostaChange("resposta4", "muitoMotivado")}
                />{" "}                  
               Muito Motivado</label>
              </h4>
            </ul>
          </div>
        </div>
        <div className="title-test3">
          <div className="rectangle-div" />
          <div className="em-uma-escala3">
            Em uma escala de 1 a 5, o quanto você:
          </div>
        </div>
        <Link to="/testpage04">
            <Button
              className="boto-continuar"
              name="Botão Continuar"
              id="btnContinuar"
              variant="primary"
              onClick={handleRedirect}
              disabled={redirecting}
            >
              {redirecting ? "Aguarde..." : "CONTINUAR"}
            </Button>
        </Link>
        <Link to="/testpage02">
            <Button
              className="boto-anterior"
              name="Botão Anterior"
              id="btnAnterior"
              variant="primary"
              onClick={handleRedirect}
              disabled={redirecting}
            >
              {redirecting ? "Aguarde..." : <img src="/arrow.svg" alt="Seta" />}
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default TestPage03Desktop;
