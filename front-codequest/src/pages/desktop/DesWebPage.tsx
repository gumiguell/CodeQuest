import { FunctionComponent } from "react";
import "./DesWebPage.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useState } from "react";

const DesWebPageDesktop: FunctionComponent = () => {
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
    <div className="desweb-page-desktop">
      <div className="desweb-page">
        <img className="background-icon3" alt="" src="/background@2x.png" />
        <img className="image-24-icon" alt="" src="/image-24@2x.png" />
        <img className="logo-padrao-icon3" alt="" src="/logo-padrao@2x.png" />
        <div className="text">
          <div className="objetivo-a-rea-container3">
            <ul className="o-que-faz-profissionais-dessa">
              <li className="cursos-de-html">
                <span className="objetivo4">Objetivo:</span>
                <b>
                  {" "}
                  A área de Desenvolvimento Web se concentra em criar sites e
                  aplicações web que sejam atraentes, funcionais e responsivos,
                  proporcionando uma experiência positiva para os usuários
                  online.
                </b>
              </li>
            </ul>
            <p className="blank-line12">
              <b>&nbsp;</b>
            </p>
            <ul className="o-que-faz-profissionais-dessa">
              <li className="cursos-de-html">
                <span className="objetivo4">O que faz:</span>
                <b>
                  {" "}
                  Profissionais dessa área trabalham com linguagens de
                  programação como HTML, CSS e JavaScript para criar interfaces
                  de usuário, desenvolver sites dinâmicos e garantir que as
                  páginas da web se adaptem a diferentes dispositivos.
                </b>
              </li>
            </ul>
            <p className="blank-line12">
              <b>&nbsp;</b>
            </p>
            <ul className="o-que-faz-profissionais-dessa">
              <li>
                <span className="objetivo4">Vantagens:</span>
                <b>
                  {" "}
                  O desenvolvimento web é fundamental para a presença online de
                  empresas e indivíduos. Os desenvolvedores web têm a
                  oportunidade de criar sites modernos e interativos,
                  influenciando diretamente a forma como as pessoas interagem na
                  internet. Além disso, o mercado de desenvolvimento web é amplo
                  e em constante crescimento.
                </b>
              </li>
            </ul>
          </div>
          <div className="curso-de-graduao-container">
            <ul className="o-que-faz-profissionais-dessa">
              <li className="cursos-de-html">
                Curso de Graduação em Ciência da Computação ou Tecnologia da
                Informação com foco em desenvolvimento web.
              </li>
            </ul>
            <p className="blank-line12">&nbsp;</p>
            <ul className="o-que-faz-profissionais-dessa">
              <li className="cursos-de-html">
                Cursos de HTML, CSS e JavaScript para aprender as bases da
                programação web.
              </li>
            </ul>
            <p className="blank-line12">&nbsp;</p>
            <ul className="o-que-faz-profissionais-dessa">
              <li>
                Estudo de frameworks populares como React, Angular ou Vue.js
                para criar sites modernos e dinâmicos.
              </li>
            </ul>
          </div>
        </div>
        <div className="title">
          <b className="teste-finalizado">TESTE FINALIZADO.</b>
          <div className="desenvolvimento-web">DESENVOLVIMENTO WEB</div>
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
                {redirecting ? "Aguarde..." : "Voltar a tela inicial"}
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
        
        <div className="money-text">
          <img className="money" alt="" src="/money.svg" />
          <b className="valor">R$ 2.849/mês</b>
        </div>
      </div>
    </div>
  );
};

export default DesWebPageDesktop;
