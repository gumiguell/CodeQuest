import { FunctionComponent, SetStateAction } from "react";
import React, { useState, useEffect } from 'react';
import "./TestPage01.css";
import { Button } from "react-bootstrap";

import { Link } from 'react-router-dom';
import handleInputChange from '../../handleResp';
import respostasData from '../../respostasData';

//import respostasData, { Resposta } from '../../respostasData';
const TestPage01Desktop: FunctionComponent = () => {

  const respostasAnterioresString = localStorage.getItem('respostas');
  const respostasAnteriores = respostasAnterioresString ? JSON.parse(respostasAnterioresString) : {};
  const [respostas, setRespostas] = useState(respostasAnteriores);
  const [redirecionando, setRedirecionando] = useState(false);

  const handleInputChangeWrapper = (pergunta: number, valor: number) => {
    const updatedRespostas = { ...respostas, [pergunta]: valor };
    setRespostas(updatedRespostas);
  };

  const handleRedirecionar = () => {
    localStorage.setItem('respostas', JSON.stringify(respostas));

    setRedirecionando(true);
    setTimeout(() => {
      setRedirecionando(false);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('respostas');
    };
  }, []);


  const [redirecting, setRedirecting] = useState(false);
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
                <label>
                  <input
                    type="radio"
                    value={1}
                    name="resposta1"
                    onChange={() => handleInputChangeWrapper(1, 1)}
                    checked={respostas[1] === 1}
                     />{" "}
                  Nada Empolgado
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input
                    type="radio"
                    value={2}
                    name="resposta1"
                    onChange={() => handleInputChangeWrapper(1, 1)}
                    checked={respostas[1] === 1}
                     />{" "}
                  Pouco Empolgado
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input
                    type="radio"
                    value={3}
                    name="resposta1"
                    onChange={() => handleInputChangeWrapper(1, 1)}
                    checked={respostas[1] === 1}
                     /> Neutro
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input
                    type="radio"
                    value={4}
                    name="resposta1"
                    onChange={() => handleInputChange({pergunta: 1, valor: 4, respostas, setRespostas})}
                     />{" "} Empolgado
                </label>
              </h4>
              <h4>
                <label>
                  <input
                    type="radio"
                    value={5}
                    name="resposta1"
                    onChange={() => handleInputChange({pergunta: 1, valor: 5, respostas, setRespostas})}
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
                <label>
                  <input
                    type="radio"
                    value="nadaInteressado"
                    name="resposta2" />{" "}
                  Nada interessado
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input
                    type="radio"
                    value="poucoInteressado"
                    name="resposta2" />{" "}
                  Pouco interessado
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input type="radio" value="neutro" name="resposta2" /> Neutro
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input type="radio" value="Interessado" name="resposta2" />{" "}
                  Interessado
                </label>
              </h4>
              <h4>
                <label>
                  <input
                    type="radio"
                    value="muitoInteressado"
                    name="resposta2" />{" "}
                  Muito interessado
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
                <label>
                  <input type="radio" value="nadaAtraido" name="resposta3" />{" "}
                  Nada atraido
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input type="radio" value="poucoAtraido" name="resposta3" />{" "}
                  Pouco atraido
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input type="radio" value="neutro" name="resposta3" /> Neutro
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input type="radio" value="Atraido" name="resposta3" />{" "}
                  Atraido
                </label>
              </h4>
              <h4>
                <label>
                  <input type="radio" value="muitoAtraido" name="resposta3" />{" "}
                  Muito atraido
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
                <label>
                  <input
                    type="radio"
                    value="nadaEmocionante"
                    name="resposta4" />{" "}
                  Nada emocionante
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input
                    type="radio"
                    value="poucoEmocionante"
                    name="resposta4" />{" "}
                  Pouco emocionante
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input type="radio" value="neutro" name="resposta4" /> Neutro
                </label>
              </h4>
              <h4 className="nada-empolgado">
                <label>
                  <input type="radio" value="emocionante" name="resposta4" />{" "}
                  Emocionante
                </label>
              </h4>
              <h4>
                <label>
                  <input
                    type="radio"
                    value="muitoEmocionante"
                    name="resposta4" />{" "}
                  Muito emocionante
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
