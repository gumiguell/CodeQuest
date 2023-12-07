<<<<<<< HEAD
import { FunctionComponent, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage02.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const TestPage02Desktop: FunctionComponent = () => {
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
                <label><input 
                  type="radio" 
                  value="nadaBacana" 
                  name="resposta1"
                  checked={respostas.resposta1 === "nadaBacana"}
                  onChange={() => handleRespostaChange("resposta1", "nadaBacana")}
                  />{" "}
                   Nada bacana
                </label>
              </h4>
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="poucoBacana" 
                name="resposta1"
                checked={respostas.resposta1 === "poucoBacana"}
                onChange={() => handleRespostaChange("resposta1", "poucoBacana")}
                />{" "}
                Pouco bacana
                </label>
              </h4>
              <h4 className="nada-bacana">
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
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="bacana" 
                name="resposta1"
                checked={respostas.resposta1 === "bacana"}
                onChange={() => handleRespostaChange("resposta1", "bacana")}
                />{" "}
                Bacana
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoBacana" 
                name="resposta1"
                checked={respostas.resposta1 === "muitoBacana"}
                onChange={() => handleRespostaChange("resposta1", "muitoBacana")}
                />{" "}
                Muito bacana
                </label>
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
                <label><input 
                type="radio" 
                value="nadaImaginavel" 
                name="resposta2"
                checked={respostas.resposta2 === "nadaImaginavel"}
                onChange={() => handleRespostaChange("resposta2", "nadaImaginavel")}
                />{" "}
                Nada imaginavel
                </label>
              </h4>
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="poucoImaginavel" 
                name="resposta2"
                checked={respostas.resposta2 === "poucoImaginavel"}
                onChange={() => handleRespostaChange("resposta2", "poucoImaginavel")}
                />{" "}
                Pouco imaginavel
                </label>
              </h4>
              <h4 className="nada-bacana">
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
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="imaginavel" 
                name="resposta2"
                checked={respostas.resposta2 === "imaginavel"}
                onChange={() => handleRespostaChange("resposta2", "imaginavel")}
                />{" "}
                Imaginavel
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoImaginavel" 
                name="resposta2"
                checked={respostas.resposta2 === "muitoImaginavel"}
                onChange={() => handleRespostaChange("resposta2", "muitoImaginavel")}
                />{" "}
                Muito imaginavel
                </label>
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
                <label><input 
                type="radio" 
                value="nadaValorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "nadaValorizo"}
                onChange={() => handleRespostaChange("resposta3", "nadaValorizo")}
                />{" "}
                Nada valorizo
                </label>
              </h4>
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="poucoValorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "poucoValorizo"}
                onChange={() => handleRespostaChange("resposta3", "poucoValorizo")}
                />{" "}
                Pouco valorizo
                </label>
              </h4>
              <h4 className="nada-bacana">
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
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="valorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "valorizo"}
                onChange={() => handleRespostaChange("resposta3", "valorizo")}
                />{" "}
                Valorizo
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoValorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "muitoValorizo"}
                onChange={() => handleRespostaChange("resposta3", "muitoValorizo")}
                />{" "}
                Muito valorizo
                </label>
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
                <label><input 
                type="radio" 
                value="nadaGostaria" 
                name="resposta4"
                checked={respostas.resposta4 === "nadaGostaria"}
                onChange={() => handleRespostaChange("resposta4", "nadaGostaria")}
                />{" "}
                Nada gostaria
                </label>
              </h4>
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="poucoGostaria" 
                name="resposta4"
                checked={respostas.resposta4 === "poucoGostaria"}
                onChange={() => handleRespostaChange("resposta4", "poucoGostaria")}
                />{" "}
                Pouco gostaria
                </label>
              </h4>
              <h4 className="nada-bacana">
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
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="gostaria" 
                name="resposta4"
                checked={respostas.resposta4 === "gostaria"}
                onChange={() => handleRespostaChange("resposta4", "gostaria")}
                />{" "}
                Gostaria
                </label> 
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoGostaria" 
                name="resposta4"
                checked={respostas.resposta4 === "muitoGostaria"}
                onChange={() => handleRespostaChange("resposta4", "muitoGostaria")}
                />{" "}
                Muito gostaria
                </label>
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
              {redirecting ? "Aguarde..." : <img src="/arrow.svg" alt="Seta" />}
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default TestPage02Desktop;
=======
import { FunctionComponent, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage02.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const TestPage02Desktop: FunctionComponent = () => {
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
                <label><input 
                  type="radio" 
                  value="nadaBacana" 
                  name="resposta1"
                  checked={respostas.resposta1 === "nadaBacana"}
                  onChange={() => handleRespostaChange("resposta1", "nadaBacana")}
                  />{" "}
                   Nada bacana
                </label>
              </h4>
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="poucoBacana" 
                name="resposta1"
                checked={respostas.resposta1 === "poucoBacana"}
                onChange={() => handleRespostaChange("resposta1", "poucoBacana")}
                />{" "}
                Pouco bacana
                </label>
              </h4>
              <h4 className="nada-bacana">
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
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="bacana" 
                name="resposta1"
                checked={respostas.resposta1 === "bacana"}
                onChange={() => handleRespostaChange("resposta1", "bacana")}
                />{" "}
                Bacana
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoBacana" 
                name="resposta1"
                checked={respostas.resposta1 === "muitoBacana"}
                onChange={() => handleRespostaChange("resposta1", "muitoBacana")}
                />{" "}
                Muito bacana
                </label>
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
                <label><input 
                type="radio" 
                value="nadaImaginavel" 
                name="resposta2"
                checked={respostas.resposta2 === "nadaImaginavel"}
                onChange={() => handleRespostaChange("resposta2", "nadaImaginavel")}
                />{" "}
                Nada imaginavel
                </label>
              </h4>
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="poucoImaginavel" 
                name="resposta2"
                checked={respostas.resposta2 === "poucoImaginavel"}
                onChange={() => handleRespostaChange("resposta2", "poucoImaginavel")}
                />{" "}
                Pouco imaginavel
                </label>
              </h4>
              <h4 className="nada-bacana">
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
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="imaginavel" 
                name="resposta2"
                checked={respostas.resposta2 === "imaginavel"}
                onChange={() => handleRespostaChange("resposta2", "imaginavel")}
                />{" "}
                Imaginavel
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoImaginavel" 
                name="resposta2"
                checked={respostas.resposta2 === "muitoImaginavel"}
                onChange={() => handleRespostaChange("resposta2", "muitoImaginavel")}
                />{" "}
                Muito imaginavel
                </label>
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
                <label><input 
                type="radio" 
                value="nadaValorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "nadaValorizo"}
                onChange={() => handleRespostaChange("resposta3", "nadaValorizo")}
                />{" "}
                Nada valorizo
                </label>
              </h4>
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="poucoValorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "poucoValorizo"}
                onChange={() => handleRespostaChange("resposta3", "poucoValorizo")}
                />{" "}
                Pouco valorizo
                </label>
              </h4>
              <h4 className="nada-bacana">
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
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="valorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "valorizo"}
                onChange={() => handleRespostaChange("resposta3", "valorizo")}
                />{" "}
                Valorizo
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoValorizo" 
                name="resposta3"
                checked={respostas.resposta3 === "muitoValorizo"}
                onChange={() => handleRespostaChange("resposta3", "muitoValorizo")}
                />{" "}
                Muito valorizo
                </label>
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
                <label><input 
                type="radio" 
                value="nadaGostaria" 
                name="resposta4"
                checked={respostas.resposta4 === "nadaGostaria"}
                onChange={() => handleRespostaChange("resposta4", "nadaGostaria")}
                />{" "}
                Nada gostaria
                </label>
              </h4>
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="poucoGostaria" 
                name="resposta4"
                checked={respostas.resposta4 === "poucoGostaria"}
                onChange={() => handleRespostaChange("resposta4", "poucoGostaria")}
                />{" "}
                Pouco gostaria
                </label>
              </h4>
              <h4 className="nada-bacana">
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
              <h4 className="nada-bacana">
                <label><input 
                type="radio" 
                value="gostaria" 
                name="resposta4"
                checked={respostas.resposta4 === "gostaria"}
                onChange={() => handleRespostaChange("resposta4", "gostaria")}
                />{" "}
                Gostaria
                </label> 
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoGostaria" 
                name="resposta4"
                checked={respostas.resposta4 === "muitoGostaria"}
                onChange={() => handleRespostaChange("resposta4", "muitoGostaria")}
                />{" "}
                Muito gostaria
                </label>
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
              {redirecting ? "Aguarde..." : <img src="/arrow.svg" alt="Seta" />}
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default TestPage02Desktop;
>>>>>>> c400091a0d31dc571ceff8aedc2cf34a7513dcf3
