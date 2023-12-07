import { FunctionComponent } from "react";
import "./TestPage05.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const TestPage05Desktop: FunctionComponent = () => {
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
                <label><input 
                type="radio" 
                value="nadaPreocupado" 
                name="resposta1"
                checked={respostas.resposta1 === "nadaPreocupado"}
                onChange={() => handleRespostaChange("resposta1", "nadaPreocupado")}
                />{" "}
                Nada preocupado
                </label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input 
                type="radio" 
                value="poucoPreocupado" 
                name="resposta1"
                checked={respostas.resposta1 === "poucoPreocupado"}
                onChange={() => handleRespostaChange("resposta1", "poucoPreocupado")}
                />{" "}
                Pouco preocupado
                </label>
              </h4>
              <h4 className="nada-preocupado">
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
              <h4 className="nada-preocupado">
                <label><input 
                type="radio" 
                value="preocupado" 
                name="resposta1"
                checked={respostas.resposta1 === "preocupado"}
                onChange={() => handleRespostaChange("resposta1", "preocupado")}
                />{" "}
                Preocupado
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoPreocupado" 
                name="resposta1"
                checked={respostas.resposta1 === "muitoPreocupado"}
                onChange={() => handleRespostaChange("resposta1", "muitoPreocupado")}
                />{" "}
                Muito preocupado
                </label>
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
              <h4 className="nada-preocupado">
                <label><input 
                type="radio" 
                value="poucoIneressado" 
                name="resposta2"
                checked={respostas.resposta2 === "poucoIneressado"}
                onChange={() => handleRespostaChange("resposta2", "poucoIneressado")}
                />{" "}
                Pouco interessado
                </label>
              </h4>
              <h4 className="nada-preocupado">
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
              <h4 className="nada-preocupado">
                <label><input 
                type="radio" 
                value="interessado" 
                name="resposta2"
                checked={respostas.resposta2 === "interessado"}
                onChange={() => handleRespostaChange("resposta2", "interessado")}
                />{" "}
                Interessado
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
                Muito interessado
                </label>
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
                <label><input 
                type="radio" 
                value="nadaInteressado" 
                name="resposta3"
                checked={respostas.resposta3 === "nadaInteressado"}
                onChange={() => handleRespostaChange("resposta3", "nadaInteressado")}
                />{" "}
                Nada interessado
                </label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input 
                type="radio" 
                value="poucoInteressado" 
                name="resposta3"
                checked={respostas.resposta3 === "poucoInteressado"}
                onChange={() => handleRespostaChange("resposta3", "poucoInteressado")}
                />{" "}
                Pouco interessado
                </label>
              </h4>
              <h4 className="nada-preocupado">
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
              <h4 className="nada-preocupado">
                <label><input 
                type="radio" 
                value="interessado" 
                name="resposta3"
                checked={respostas.resposta3 === "interessado"}
                onChange={() => handleRespostaChange("resposta3", "interessado")}
                />{" "}
                Interessado
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoInteressado" 
                name="resposta3"
                checked={respostas.resposta3 === "muitoInteressado"}
                onChange={() => handleRespostaChange("resposta3", "muitoInteressado")}
                />{" "}
                Muito interessado
                </label>
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
                <label><input 
                type="radio" 
                value="nadaMotivado" 
                name="resposta4"
                checked={respostas.resposta4 === "nadaMotivado"}
                onChange={() => handleRespostaChange("resposta4", "nadaMotivado")}
                />{" "}
                Nada Motivado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input 
                type="radio" 
                value="poucoMotivado" 
                name="resposta4"
                checked={respostas.resposta4 === "poucoMotivado"}
                onChange={() => handleRespostaChange("resposta4", "poucoMotivado")}
                />{" "}
                Pouco Motivado</label>
              </h4>
              <h4 className="nada-preocupado">
                <label><input 
                type="radio" 
                value="neutro" 
                name="resposta4"
                checked={respostas.resposta4 === "neutro"}
                onChange={() => handleRespostaChange("resposta4", "neutro")}
                />{" "}
                Neutro</label>
              </h4>
              <h4 className="nada-preocupado">
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
              {redirecting ? "Aguarde..." : <img src="/arrow.svg" alt="Seta" />}
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default TestPage05Desktop;
