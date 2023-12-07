import { FunctionComponent } from "react";
import "./DesSoftwarePage.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

const DesSoftwarePageDesktop: FunctionComponent = () => {
  const [redirecting, setRedirecting] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar a exibição do popup

  const handleRedirect = () => {
    setRedirecting(true);

    setTimeout(() => {
      setRedirecting(false);
      setShowPopup(true); // Mostrar o popup após o tempo de espera
    }, 5000);
  };

  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + "/pdf/DesSoftware.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "DesSoftware.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dessoftware-page-desktop">
      <div className="dessoftware-page">
        <img className="background-icon1" alt="" src="/background@2x.png" />
        <img className="logo-padrao-icon1" alt="" src="/logo-padrao@2x.png" />
        <div className="text">
          <div className="objetivo-a-rea-container1">
            <ul className="objetivo-a-rea-de-desenvolvi">
              <li className="cursos-online-de">
                <span className="span">
                  <span className="objetivo2">Objetivo: </span>
                </span>
                <b>
                  A área de Desenvolvimento de Software e Aplicações tem como
                  objetivo criar programas e aplicativos que atendam às
                  necessidades das empresas e dos usuários, proporcionando
                  soluções tecnológicas para diversos desafios.
                </b>
              </li>
            </ul>
            <p className="blank-line4">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <ul className="objetivo-a-rea-de-desenvolvi">
              <li className="cursos-online-de">
                <span>
                  <span className="objetivo2">O que faz:</span>
                </span>
                <b>
                  <span>{` `}</span>
                  <span>
                    Os profissionais dessa área escrevem códigos e projetam
                    sistemas de software para desenvolver aplicativos de
                    computador, software empresarial e muito mais. Eles podem
                    trabalhar em uma variedade de setores, desde jogos até
                    aplicativos financeiros.
                  </span>
                </b>
              </li>
            </ul>
            <p className="blank-line4">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <ul className="objetivo-a-rea-de-desenvolvi">
              <li>
                <span>
                  <span className="objetivo2">Vantagens:</span>
                </span>
                <b>
                  <span>{` `}</span>
                  <span>
                    Trabalhar com desenvolvimento de software permite a criação
                    de soluções úteis e inovadoras. Os desenvolvedores podem ver
                    suas ideias ganhando vida em forma de software. Além disso,
                    a demanda por desenvolvedores de software é alta, o que
                    proporciona boas oportunidades de emprego e carreira.
                  </span>
                </b>
              </li>
            </ul>
          </div>
          <div className="curso-de-graduao-container">
            <ul className="objetivo-a-rea-de-desenvolvi">
              <li className="cursos-online-de">
                Curso de Graduação em Ciência da Computação, Engenharia de
                Software ou áreas relacionadas.
              </li>
            </ul>
            <p className="blank-line6">&nbsp;</p>
            <ul className="objetivo-a-rea-de-desenvolvi">
              <li className="cursos-online-de">
                Cursos online de programação em linguagens populares como Java,
                Python, C# ou JavaScript.
              </li>
            </ul>
            <p className="blank-line6">&nbsp;</p>
            <ul className="objetivo-a-rea-de-desenvolvi">
              <li>
                Participação em bootcamps de desenvolvimento de software que
                ofereçam treinamento intensivo e prático.
              </li>
            </ul>
          </div>
        </div>
        <div className="title">
          <b className="teste-finalizado">TESTE FINALIZADO:</b>
          <div className="desenvolvimento-de-software">
            DESENVOLVIMENTO DE SOFTWARE
          </div>
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

          <Button
            className="botao-salvar-teste"
            name="Botão Salvar"
            id="btnSalvar"
            variant="primary"
            onClick={handleDownload}
            disabled={redirecting}
          >
            {redirecting ? "Aguarde..." : "BAIXAR TESTE"}
          </Button>
        </div>
        <img
          className="image-software-icon"
          alt=""
          src="/image-software@2x.png"
        />
        <div className="money-text">
          <img className="money" alt="" src="/money.svg" />
          <b className="valor">R$ 4.780/mês</b>
        </div>
      </div>
    </div>
  );
};

export default DesSoftwarePageDesktop;
