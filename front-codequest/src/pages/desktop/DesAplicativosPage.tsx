import { FunctionComponent } from "react";
import "./DesAplicativosPage.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useState } from "react";

const DesAplicativosPageDesktop: FunctionComponent = () => {
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
    <div className="desaplicativos-page-desktop">
      <div className="desaplicativos-page">
        <img className="background-icon3" alt="" src="/background@2x.png" />
        <img className="image-24-icon" alt="" src="/image-23@2x.png" />
        <img className="logo-padrao-icon3" alt="" src="/logo-padrao@2x.png" />
        <div className="text">
          <div className="objetivo-a-rea-container4">
            <ul className="vantagens-o-desenvolvimento-d">
              <li className="cursos-de-desenvolvimento">
                <span className="objetivo5">{`Objetivo: `}</span>
                <b>
                  A área de Desenvolvimento de Aplicativos visa criar
                  aplicativos para dispositivos móveis, tablets e computadores,
                  melhorando a experiência dos usuários e atendendo às suas
                  necessidades.
                </b>
              </li>
            </ul>
            <p className="blank-line16">
              <b>&nbsp;</b>
            </p>
            <ul className="vantagens-o-desenvolvimento-d">
              <li className="cursos-de-desenvolvimento">
                <span className="objetivo5">{`O que faz: `}</span>
                <b>
                  Os profissionais dessa área criam aplicativos específicos para
                  atender a demandas variadas, como transporte, comunicação,
                  entretenimento e produtividade. Eles trabalham para tornar os
                  aplicativos atraentes e funcionais em diferentes plataformas.
                </b>
              </li>
            </ul>
            <p className="blank-line17">&nbsp;</p>
            <ul className="vantagens-o-desenvolvimento-d">
              <li>
                <span className="objetivo5">{`Vantagens: `}</span>
                <b>
                  O desenvolvimento de aplicativos permite criar soluções
                  direcionadas às necessidades das pessoas, com potencial para
                  alcançar um grande público. A constante evolução tecnológica
                  abre espaço para a criação de ideias inovadoras, e os
                  desenvolvedores de aplicativos podem se destacar nesse
                  cenário.
                </b>
              </li>
            </ul>
          </div>
          <div className="curso-de-graduao-container">
            <ul className="vantagens-o-desenvolvimento-d">
              <li className="cursos-de-desenvolvimento">
                Curso de Graduação em Ciência da Computação, Engenharia de
                Computação ou Design de Interface.
              </li>
            </ul>
            <p className="blank-line16">&nbsp;</p>
            <ul className="vantagens-o-desenvolvimento-d">
              <li className="cursos-de-desenvolvimento">
                Cursos de desenvolvimento de aplicativos móveis para iOS e
                Android.
              </li>
            </ul>
            <p className="blank-line16">&nbsp;</p>
            <ul className="vantagens-o-desenvolvimento-d">
              <li>
                Treinamento em design de experiência do usuário (UX) para criar
                interfaces intuitivas e atrativas.
              </li>
            </ul>
          </div>
        </div>
        <div className="title">
          <b className="teste-finalizado3">TESTE FINALIZADO:</b>
          <div className="desenvolvimento-de-aplicativos">
            DESENVOLVIMENTO DE APLICATIVOS
          </div>
        </div>
        <div className="money-text">
          <img className="money" alt="" src="/money.png" />
          <b className="valor">R$ 4.331/mês</b>
        </div>
        <div>
          <Link to="/">
              <Button
                className="boto-voltar"
                name="Botão Voltar"
                id="btnVoltar"
                variant="primary"
                onClick={handleRedirect}
                disabled={redirecting}
              >
                {redirecting ? "Aguarde..." : "VOLTAR A TELA INICIAL"}
              </Button>
          </Link>
        </div>
        <div>
          <Link to="/save">
              <Button
                className="botao-salvar-teste"
                name="Botão Salvar"
                id="btnSalvar"
                variant="primary"
                onClick={handleRedirect}
                disabled={redirecting}
              >
                {redirecting ? "Aguarde..." : "SALVAR TESTE"}
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesAplicativosPageDesktop;
