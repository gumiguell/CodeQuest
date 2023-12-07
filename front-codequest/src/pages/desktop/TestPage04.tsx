import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage04.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const TestPage04Desktop: FunctionComponent = () => {
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
    <div className="testpage04-desktop">
      <div className="test-page">
        <div className="background-iniciar">
          <img
            className="rectangle-login-icon3"
            alt=""
            src="/rectangle-quest.png"
          />
        </div>
        <img className="logo-padrao-icon4" alt="" src="/logo-padrao1@2x.png" />
        <div className="text-test">
          <div className="se-interessa-por-container">
            <ul className="se-interessa-por-descobrir-inf">
              <h3 className="nada-interessado">
                <b>
                  Se interessa por descobrir informações importantes escondidas
                  em grandes quantidades de dados?
                </b>
              </h3>
            </ul>
            <ul className="se-interessa-por-descobrir-inf">
              <h4 className="nada-interessado">
                <label><input 
                type="radio" 
                value="nadaInteressado" 
                name="resposta1"
                checked={respostas.resposta1 === "nadaInteressado"}
                onChange={() => handleRespostaChange("resposta1", "nadaInteressado")}
                />{" "}
                Nada interessado
                </label>
              </h4>
              <h4 className="nada-interessado">
                <label><input 
                type="radio" 
                value="poucoInteressado" 
                name="resposta1"
                checked={respostas.resposta1 === "poucoInteressado"}
                onChange={() => handleRespostaChange("resposta1", "poucoInteressado")}
                />{" "}
                Pouco interessado
                </label>
              </h4>
              <h4 className="nada-interessado">
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
              <h4 className="nada-interessado">
                <label><input 
                type="radio" 
                value="interessado" 
                name="resposta1"
                checked={respostas.resposta1 === "interessado"}
                onChange={() => handleRespostaChange("resposta1", "interessado")}
                />{" "}
                Interessado
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoInteressado" 
                name="resposta1"
                checked={respostas.resposta1 === "muitoInteressado"}
                onChange={() => handleRespostaChange("resposta1", "muitoInteressado")}
                />{" "}
                Muito interessado
                </label>
              </h4>
            </ul>
          </div>
          <div className="gostaria-de-aprender-container">
            <ul className="se-interessa-por-descobrir-inf">
              <h3 className="nada-interessado">
                <b>
                  Gostaria de aprender como usar números e estatísticas para
                  encontrar padrões e tendências em conjuntos de informações?
                </b>
              </h3>
            </ul>
            <ul className="se-interessa-por-descobrir-inf">
              <h4 className="nada-interessado">
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
              <h4 className="nada-interessado">
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
              <h4 className="nada-interessado">
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
              <h4 className="nada-interessado">
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
          <div className="valoriza-a-possibilidade-container">
            <ul className="se-interessa-por-descobrir-inf">
              <h3 className="nada-interessado">
                <b>
                  Valoriza a possibilidade de ajudar empresas a tomar decisões
                  melhores com base em dados concretos?
                </b>
              </h3>
            </ul>
            <ul className="se-interessa-por-descobrir-inf">
              <h4 className="nada-interessado">
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
              <h4 className="nada-interessado">
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
              <h4 className="nada-interessado">
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
              <h4 className="nada-interessado">
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
          <div className="se-sente-motivado-container">
            <ul className="se-interessa-por-descobrir-inf">
              <h3 className="nada-interessado">
                <b>
                  Se sente motivado a criar visualizações de dados interessantes
                  para tornar informações complexas mais compreensíveis?
                </b>
              </h3>
            </ul>
            <ul className="se-interessa-por-descobrir-inf">
              <h4 className="nada-interessado">
                <label><input 
                type="radio" 
                value="nadaInteressado" 
                name="resposta4"
                checked={respostas.resposta4 === "nadaInteressado"}
                onChange={() => handleRespostaChange("resposta4", "nadaInteressado")}
                />{" "}
                Nada interessado
                </label>
              </h4>
              <h4 className="nada-interessado">
                <label><input 
                type="radio" 
                value="poucoInteressado" 
                name="resposta4"
                checked={respostas.resposta4 === "poucoInteressado"}
                onChange={() => handleRespostaChange("resposta4", "poucoInteressado")}
                />{" "}
                Pouco interessado
                </label>
              </h4>
              <h4 className="nada-interessado">
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
              <h4 className="nada-interessado">
                <label><input 
                type="radio" 
                value="interessado" 
                name="resposta4"
                checked={respostas.resposta4 === "interessado"}
                onChange={() => handleRespostaChange("resposta4", "interessado")}
                />{" "}
                Interessado
                </label>
              </h4>
              <h4>
                <label><input 
                type="radio" 
                value="muitoInteressado" 
                name="resposta4"
                checked={respostas.resposta4 === "muitoInteressado"}
                onChange={() => handleRespostaChange("resposta4", "muitoInteressado")}
                />{" "}
                Muito interessado
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
        <Link to="/testpage05">
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
        <Link to="/testpage03">
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

export default TestPage04Desktop;
