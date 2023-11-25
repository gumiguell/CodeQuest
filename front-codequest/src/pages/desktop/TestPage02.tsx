import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage02.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const TestPage02Desktop: FunctionComponent = () => {
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
    <div className="testpage02-desktop">
      <div className="test-page2">
        <div className="background-iniciar2">
          <img
            className="rectangle-login-icon3"
            alt=""
            src="/rectangle-quest.png"
          />
        </div>
        <img className="logo-padrao-icon6" alt="" src="/logo-padrao1@2x.png" />
        <div className="text-test2">
          <div className="acha-bacana-a-container">
            <ul className="acha-bacana-a-ideia-de-criar-a">
              <h3 className="nada-bacana">
                <b>
                  Acha bacana a ideia de criar aplicativos que possam ser usados
                  em smartphones ou tablets?
                </b>
              </h3>
            </ul>
            <ul className="acha-bacana-a-ideia-de-criar-a">
              <h4 className="nada-bacana">
                <label><input type="radio" value="nadaBacana" name="resposta1"/> Nada bacana</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="poucoBacana" name="resposta1"/> Pouco bacana</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="neutro" name="resposta1"/> Neutro</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="bacana" name="resposta1"/> Bacana</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoBacana" name="resposta1"/> Muito bacana</label>
              </h4>
            </ul>
          </div>
          <div className="imagina-se-aprendendo-a-container">
            <ul className="acha-bacana-a-ideia-de-criar-a">
              <h3 className="nada-bacana">
                <b>
                  Imagina-se aprendendo a desenvolver aplicativos que facilitem
                  a vida das pessoas, como apps de transporte ou de pedidos de
                  comida?
                </b>
              </h3>
            </ul>
            <ul className="acha-bacana-a-ideia-de-criar-a">
              <h4 className="nada-bacana">
                <label><input type="radio" value="nadaImaginavel" name="resposta2"/> Nada imaginável</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="poucoImaginavel" name="resposta2"/> Pouco imaginável</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="neutro" name="resposta2"/> Neutro</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="imaginavel" name="resposta2"/> Imaginável</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoImaginavel" name="resposta2"/> Muito imaginável</label>
              </h4>
            </ul>
          </div>
          <div className="valoriza-a-ideia-container">
            <ul className="acha-bacana-a-ideia-de-criar-a">
              <h3 className="nada-bacana">
                <b>
                  Valoriza a ideia de criar interfaces amigáveis e atraentes
                  para seus aplicativos?
                </b>
              </h3>
            </ul>
            <ul className="acha-bacana-a-ideia-de-criar-a">
              <h4 className="nada-bacana">
                <label><input type="radio" value="nadaValorizo" name="resposta3"/> Nada valorizo</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="poucoValorizo" name="resposta3"/> Pouco valorizo</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="neutro" name="resposta3"/> Neutro</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="valorizo" name="resposta3"/> Valorizo</label>
              </h4>
              <h4>
                <label><input type="radio" value="muitoValorizo" name="resposta3"/> Muito valorizo</label>
              </h4>
            </ul>
          </div>
          <div className="gostaria-de-criar-container">
            <ul className="acha-bacana-a-ideia-de-criar-a">
              <h3 className="nada-bacana">
                <b>
                  Gostaria de criar aplicativos que aproveitassem recursos
                  específicos de dispositivos móveis, como câmeras e sensores?
                </b>
              </h3>
            </ul>
            <ul className="acha-bacana-a-ideia-de-criar-a">
              <h4 className="nada-bacana">
                <label><input type="radio" value="nadaGostaria" name="resposta4"/> Nada gostaria</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="poucoGostaria" name="resposta4"/> Pouco gostaria</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="neutro" name="resposta4"/> Neutro</label>
              </h4>
              <h4 className="nada-bacana">
                <label><input type="radio" value="gostaria" name="resposta4"/> Gostaria</label>  
              </h4>
              <h4>
                <label><input type="radio" value="muitoGostaria" name="resposta4"/> Muito gostaria</label>
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
        <Link to="/testpage03">
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
        <Link to="/testpage01">
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

export default TestPage02Desktop;
