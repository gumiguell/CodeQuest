import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./TestPage01.css";
const TestPage01Desktop: FunctionComponent = () => {
  return (
    <div className="testpage01-desktop">
      <div className="test-page3">
        <div className="background-iniciar3">
          <img
            className="rectangle-icon3"
            alt=""
            src="/background-test3@2x.png"
          />
          <img
            className="rectangle-login-icon3"
            alt=""
            src="/rectangle-login3@2x.png"
          />
        </div>
        <img className="logo-padrao-icon7" alt="" src="/logo-padrao1@2x.png" />
        <ol className="text-test3">
          <h2 className="se-sente-empolgado-container">
            <ul className="se-sente-empolgado-com-a-ideia">
              <li className="nada-empolgado">
                <b>
                  Se sente empolgado com a ideia de criar programas que podem
                  melhorar a forma como as empresas ou pessoas realizam tarefas?
                </b>
              </li>
            </ul>
            <ul className="se-sente-empolgado-com-a-ideia">
              <li className="nada-empolgado">
                <span>1 - Nada Empolgado</span>
              </li>
              <li className="nada-empolgado">
                <span>2 - Pouco Empolgado</span>
              </li>
              <li className="nada-empolgado">
                <span>3 - Neutro</span>
              </li>
              <li className="nada-empolgado">
                <span>4 - Empolgado</span>
              </li>
              <li>
                <span>5 - Muito Empolgado</span>
              </li>
            </ul>
          </h2>
          <div className="gostaria-de-aprender-container2">
            <ul className="se-sente-empolgado-com-a-ideia">
              <li className="nada-empolgado">
                <b>
                  Gostaria de aprender a linguagem "código" para criar
                  aplicativos, jogos ou software?
                </b>
              </li>
            </ul>
            <ul className="se-sente-empolgado-com-a-ideia">
              <li className="nada-empolgado">
                <span>1 - Nada Interessado</span>
              </li>
              <li className="nada-empolgado">
                <span>2 - Pouco Interessado</span>
              </li>
              <li className="nada-empolgado">
                <span>3 - Neutro</span>
              </li>
              <li className="nada-empolgado">
                <span>4 - Interessado</span>
              </li>
              <li>
                <span>5 - Muito Interessado</span>
              </li>
            </ul>
          </div>
          <div className="se-sente-atrado-container">
            <ul className="se-sente-empolgado-com-a-ideia">
              <li className="nada-empolgado">
                <b>
                  Se sente atraído por trabalhar em equipe para criar
                  aplicativos ou software maiores?
                </b>
              </li>
            </ul>
            <ul className="se-sente-empolgado-com-a-ideia">
              <li className="nada-empolgado">
                <span>1 - Nada Atraído</span>
              </li>
              <li className="nada-empolgado">
                <span>2 - Pouco Atraído</span>
              </li>
              <li className="nada-empolgado">
                <span>3 - Neutro</span>
              </li>
              <li className="nada-empolgado">
                <span>4 - Atraído</span>
              </li>
              <li>
                <span>5 - Muito Atraído</span>
              </li>
            </ul>
          </div>
          <div className="considera-emocionante-a-container">
            <ul className="se-sente-empolgado-com-a-ideia">
              <li className="nada-empolgado">
                <b>
                  Considera emocionante a possibilidade de ver suas ideias se
                  transformarem em programas ou aplicativos reais?
                </b>
              </li>
            </ul>
            <ul className="se-sente-empolgado-com-a-ideia">
              <li className="nada-empolgado">
                <span>1 - Nada Emocionante</span>
              </li>
              <li className="nada-empolgado">
                <span>2 - Pouco Emocionante</span>
              </li>
              <li className="nada-empolgado">
                <span>3 - Neutro</span>
              </li>
              <li className="nada-empolgado">
                <span>4 - Emocionante</span>
              </li>
              <li>
                <span>5 - Muito Emocionante</span>
              </li>
            </ul>
          </div>
        </ol>
        <div className="title-test3">
          <div className="rectangle-div" />
          <div className="em-uma-escala3">
            Em uma escala de 1 a 5, o quanto você:
          </div>
        </div>
        <Button
          className="continuar4"
          name="Botão Continuar"
          id="btnContinuar"
          variant="primary"
          href="/testpage02-desktop"
        >
          continuar
        </Button>
      </div>
    </div>
  );
};

export default TestPage01Desktop;
