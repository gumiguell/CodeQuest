import { FunctionComponent } from "react";
import "./TestPage05.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState } from "react";

const TestPage05Desktop: FunctionComponent = () => {
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
    <div className="testpage05-desktop">
      <div className="test-page4">
        <div className="background-iniciar4">
          <img
            className="rectangle-login-icon3"
            alt=""
            src="/rectangle-quest.png"
          />
        </div>
        <img className="logo-padrao-icon8" alt="" src="/logo-padrao1@2x.png" />
        <div className="text-test4">
          <div className="se-preocupa-em-container">
            <ul className="se-preocupa-em-proteger-inform">
              <h3 className="nada-preocupado">
                <b>
                  Se preocupa em proteger informações pessoais e digitais de
                  possíveis ameaças?
                </b>
              </h3>
            </ul>
            <ul className="se-preocupa-em-proteger-inform">
              <h4 className="nada-preocupado">
                <label><input type="radio" value="nadaPreocupado" name="resposta1"/> Nada preocupado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="poucoPreocupado" name="resposta1"/> Pouco preocupado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="neutro" name="resposta1"/> Neutro</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="preocupado" name="resposta1"/> Preocupado</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoPreocupado" name="resposta1"/> Muito preocupado</label>
              </h4>
            </ul>
          </div>
          <div className="se-sente-atrado-container1">
            <ul className="se-preocupa-em-proteger-inform">
              <h3 className="nada-preocupado">
                <b>
                  Se sente atraído pela ideia de entender como hackers trabalham
                  para criar defesas contra ataques cibernéticos?
                </b>
              </h3>
            </ul>
            <ul className="se-preocupa-em-proteger-inform">
              <h4 className="nada-preocupado">
                <label><input type="radio" value="nadaInteressado" name="resposta2"/> Nada interessado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="poucoIneressado" name="resposta2"/> Pouco interessado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="neutro" name="resposta2"/> Neutro</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="interessado" name="resposta2"/> Interessado</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoInteressado" name="resposta2"/> Muito interessado</label>
              </h4>
            </ul>
          </div>
          <div className="gostaria-de-aprender-container3">
            <ul className="se-preocupa-em-proteger-inform">
              <h3 className="nada-preocupado">
                <b>
                  Gostaria de aprender a criar estratégias de segurança para
                  proteger sistemas e redes de possíveis invasões?
                </b>
              </h3>
            </ul>
            <ul className="se-preocupa-em-proteger-inform">
              <h4 className="nada-preocupado">
                <label><input type="radio" value="nadaInteressado" name="resposta3"/> Nada interessado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="poucoIneressado" name="resposta3"/> Pouco interessado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="neutro" name="resposta3"/> Neutro</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="interessado" name="resposta3"/> Interessado</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoInteressado" name="resposta3"/> Muito interessado</label>
              </h4>
            </ul>
          </div>
          <div className="se-sente-motivado-container2">
            <ul className="se-preocupa-em-proteger-inform">
              <h3 className="nada-preocupado">
                <b>
                  Se sente motivado a estar atualizado sobre as últimas ameaças
                  digitais e como se defender delas?
                </b>
              </h3>
            </ul>
            <ul className="se-preocupa-em-proteger-inform">
              <h4 className="nada-preocupado">
                <label><input type="radio" value="nadaMotivado" name="resposta4"/> Nada motivado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="poucoMotivado" name="resposta4"/> Pouco motivado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="neutro" name="resposta4"/> Neutro</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input type="radio" value="motivado" name="resposta4"/> Motivado</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoMotivado" name="resposta4"/> Muito motivado</label>
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
        <Link to="/">
            <Button
              className="boto-continuar"
              name="Botão Continuar"
              id="btnContinuar"
              variant="primary"
              onClick={handleRedirect}
              disabled={redirecting}
            >
              {redirecting ? "Aguarde..." : "FINALIZAR"}
            </Button>
        </Link>
        <Link to="/testpage04">
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

export default TestPage05Desktop;
