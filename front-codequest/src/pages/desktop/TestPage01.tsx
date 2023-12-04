import { FunctionComponent, SetStateAction } from "react";
import React, { useState, useEffect } from 'react';
import "./TestPage01.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import handleInputChange from '../../handleResp';
import respostasData from '../../respostasData';

const TestPage01Desktop: FunctionComponent = () => {
  const [redirecting, setRedirecting] = useState(false);
  const [respostas, setRespostas] = useState({
    resposta1: "",
    resposta2: "",
    resposta3: "",
    resposta4: "",
  });

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
    setRedirecting(true);
    setTimeout(() => {
      setRedirecting(false); 
    }, 5000); 
  };

  return (
    <div className="testpage01-desktop">
      <div className="test-page3">
        <div className="background-iniciar3">
          <img
            className="rectangle-login-icon3"
            alt=""
            src="/rectangle-quest.png" />
        </div>
        <img className="logo-padrao-icon8" alt="" src="/logo-padrao1@2x.png" />
        <ol className="text-test3">
          <h2 className="se-sente-empolgado-container">
            <ul className="se-sente-empolgado-com-a-ideia">
              <h3 className="nada-empolgado">
                <b>
                  Se sente empolgado com a ideia de criar programas que podem
                  melhorar a forma como as empresas ou pessoas realizam tarefas?
                </b>
              </h3>
            </ul>
            <ul className="se-sente-empolgado-com-a-ideia">
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="nadaEmpolgado" 
                  name="resposta1"
                  checked={respostas.resposta1 === "nadaEmpolgado"}
                  onChange={() => handleRespostaChange("resposta1", "nadaEmpolgado")}
                  />{" "}
                   Nada Empolgado
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="poucoEmpolgado" 
                  name="resposta1"
                  checked={respostas.resposta1 === "poucoEmpolgado"}
                  onChange={() => handleRespostaChange("resposta1", "poucoEmpolgado")}
                  />{" "}
                   Pouco Empolgado
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="neutro" 
                  name="resposta1"
                  checked={respostas.resposta1 === "neutro"}
                  onChange={() => handleRespostaChange("resposta1", "neutro")}
                  />{" "}
                   Neutro
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="empolgado" 
                  name="resposta1"
                  checked={respostas.resposta1 === "empolgado"}
                  onChange={() => handleRespostaChange("resposta1", "empolgado")}
                  />{" "}
                   Empolgado
                </label>
              </h4>
              <h4>
              <label><input 
                  type="radio" 
                  value="muitoEmpolgado" 
                  name="resposta1"
                  checked={respostas.resposta1 === "muitoEmpolgado"}
                  onChange={() => handleRespostaChange("resposta1", "muitoEmpolgado")}
                  />{" "}
                   Muito Empolgado
                </label>
              </h4>
            </ul>
          </h2>
          <div className="gostaria-de-aprender-container2">
            <ul className="se-sente-empolgado-com-a-ideia">
              <h3 className="nada-empolgado">
                <b>
                  Gostaria de aprender a linguagem "código" para criar
                  aplicativos, jogos ou software?
                </b>
              </h3>
            </ul>
            <ul className="se-sente-empolgado-com-a-ideia">
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="nadaInteressado" 
                  name="resposta2"
                  checked={respostas.resposta2 === "nadaInteressado"}
                  onChange={() => handleRespostaChange("resposta2", "nadaInteressado")}
                  />{" "}
                   Nada interessado
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="poucoInteressado" 
                  name="resposta2"
                  checked={respostas.resposta2 === "poucoInteressado"}
                  onChange={() => handleRespostaChange("resposta2", "poucoInteressado")}
                  />{" "}
                   Pouco interessado
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="neutro" 
                  name="resposta2"
                  checked={respostas.resposta2 === "neutro"}
                  onChange={() => handleRespostaChange("resposta2", "neutro")}
                  />{" "}
                   Neutro
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="interessado" 
                  name="resposta2"
                  checked={respostas.resposta2 === "interessado"}
                  onChange={() => handleRespostaChange("resposta2", "interessado")}
                  />{" "}
                   Neutro
                </label>
              </h4>
              <h4>
              <label><input 
                  type="radio" 
                  value="muitoInteressado" 
                  name="resposta2"
                  checked={respostas.resposta2 === "muitoInteressado"}
                  onChange={() => handleRespostaChange("resposta2", "muitoInteressado")}
                  />{" "}
                   Muito Interessado
                </label>
              </h4>
            </ul>
          </div>
          <div className="se-sente-atrado-container">
            <ul className="se-sente-empolgado-com-a-ideia">
              <h3 className="nada-empolgado">
                <b>
                  Se sente atraído por trabalhar em equipe para criar
                  aplicativos ou software maiores?
                </b>
              </h3>
            </ul>
            <ul className="se-sente-empolgado-com-a-ideia">
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="nadaAtraido" 
                  name="resposta3"
                  checked={respostas.resposta3 === "nadaAtraido"}
                  onChange={() => handleRespostaChange("resposta3", "nadaAtraido")}
                  />{" "}
                   Nada atraido
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="poucoAtraido" 
                  name="resposta3"
                  checked={respostas.resposta3 === "poucoAtraido"}
                  onChange={() => handleRespostaChange("resposta3", "poucoAtraido")}
                  />{" "}
                   Pouco atraido
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="neutro" 
                  name="resposta3"
                  checked={respostas.resposta3 === "neutro"}
                  onChange={() => handleRespostaChange("resposta3", "neutro")}
                  />{" "}
                   Neutro
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="atraido" 
                  name="resposta3"
                  checked={respostas.resposta3 === "atraido"}
                  onChange={() => handleRespostaChange("resposta3", "atraido")}
                  />{" "}
                   Atraido
                </label>
              </h4>
              <h4>
              <label><input 
                  type="radio" 
                  value="muitoAtraido" 
                  name="resposta3"
                  checked={respostas.resposta3 === "muitoAtraido"}
                  onChange={() => handleRespostaChange("resposta3", "muitoAtraido")}
                  />{" "}
                   Muito Atraido
                </label>
              </h4>
            </ul>
          </div>
          <div className="considera-emocionante-a-container">
            <ul className="se-sente-empolgado-com-a-ideia">
              <h3 className="nada-empolgado">
                <b>
                  Considera emocionante a possibilidade de ver suas ideias se
                  transformarem em programas ou aplicativos reais?
                </b>
              </h3>
            </ul>
            <ul className="se-sente-empolgado-com-a-ideia">
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="nadaEmocionante" 
                  name="resposta4"
                  checked={respostas.resposta4 === "nadaEmocionante"}
                  onChange={() => handleRespostaChange("resposta4", "nadaEmocionante")}
                  />{" "}
                   Nada emocionante
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="poucoEmocionante" 
                  name="resposta4"
                  checked={respostas.resposta4 === "poucoEmocionante"}
                  onChange={() => handleRespostaChange("resposta4", "poucoEmocionante")}
                  />{" "}
                   Pouco emocionante
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="neutro" 
                  name="resposta4"
                  checked={respostas.resposta4 === "neutro"}
                  onChange={() => handleRespostaChange("resposta4", "neutro")}
                  />{" "}
                   Neutro
                </label>
              </h4>
              <h4 className="nada-empolgado">
              <label><input 
                  type="radio" 
                  value="emocionante" 
                  name="resposta4"
                  checked={respostas.resposta4 === "emocionante"}
                  onChange={() => handleRespostaChange("resposta4", "emocionante")}
                  />{" "}
                   Emocionante
                </label>
              </h4>
              <h4>
              <label><input 
                  type="radio" 
                  value="muitoEmocionante" 
                  name="resposta4"
                  checked={respostas.resposta4 === "muitoEmocionante"}
                  onChange={() => handleRespostaChange("resposta4", "muitoEmocionante")}
                  />{" "}
                   Muito Emocionante
                </label>
              </h4>
            </ul>
          </div>
        </ol>
        <div className="title-test3">
          <div className="rectangle-div" />
          <div className="em-uma-escala3">
            Em uma escala de 1 a 5, o quanto você:
          </div>
        </div>
        <Link to="/testpage02">
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
        <Link to="/">
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
}

export default TestPage01Desktop;
