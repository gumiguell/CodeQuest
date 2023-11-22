import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage03.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const TestPage03Desktop: FunctionComponent = () => {
  const [redirecting, setRedirecting] = useState(false);

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
                <label><input type="radio" value="nadaGostaria" name="resposta1"/> Nada gostaria</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="poucoGostaria" name="resposta1"/> Pouco gostaria</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="neutro" name="resposta1"/> Neutro</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="gostaria" name="resposta1"/> Gostaria</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoGostaria" name="resposta1"/> Muito gostaria</label>
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
                <label><input type="radio" value="nadaAtrai" name="resposta2"/> Nada atrai</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="poucoAtrai" name="resposta2"/> Pouco atrai</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="neutro" name="resposta2"/> Neutro</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="atrai" name="resposta2"/> Atrai</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoAtrai" name="resposta2"/> Muito atrai</label>
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
                <label><input type="radio" value="nadaValorizo" name="resposta3"/> Nada valorizo</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="poucoValorizo" name="resposta3"/> Pouco valorizo</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="neutro" name="resposta3"/> Neutro</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="valorizo" name="resposta3"/> Valorizo</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoValorizo" name="resposta3"/> Muito valorizo</label>
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
                <label><input type="radio" value="nadaMotivado" name="resposta4"/> Nada motivado</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="poucoMotivado" name="resposta4"/> Pouco motivado</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="neutro" name="resposta4"/> Neutro</label>
              </h4>
              <h4 className="nada-gostaria">
                <label><input type="radio" value="motivado" name="resposta4"/> Motivado</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoMotivado" name="resposta4"/> Muito motivado</label>
              </h4>
            </ul>
          </div>
        </div>
        <div className="title-test1">
          <div className="title-test-item" />
          <div className="em-uma-escala1">
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
              {redirecting ? "Aguarde..." : "⬅"}
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default TestPage03Desktop;
