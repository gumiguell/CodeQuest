import { FunctionComponent } from "react";
import "./SegTiPage.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useState } from "react";


const SegTiPageDesktop: FunctionComponent = () => {
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
                 A área de Segurança de Tecnologia da Informação (TI) concentra-se em proteger sistemas, redes e dados contra ameaças cibernéticas e garantir a confidencialidade, integridade e disponibilidade das informações.                </b>
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
                  <span className="objetivo2">O que faz: </span>
                </span>
                <b>
                  <span>{` `}</span>
                  <span>
                  Profissionais de segurança de TI identificam vulnerabilidades em sistemas, desenvolvem estratégias para proteger redes, monitoram atividades suspeitas e respondem a incidentes de segurança. Eles ajudam a mitigar riscos de ataques cibernéticos e protegem informações sensíveis.                </span>
                </b>
              </li>
            </ul>
            <p className="blank-line4">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <ul className= "objetivo-a-rea-de-desenvolvi">
              <li>
                <span>
                  <span className="objetivo2">Vantagens: </span>
                </span>
                <b>
                  <span>{` `}</span>
                  <span>
                  A segurança de TI é crucial para empresas e organizações que dependem da tecnologia para operar. Os profissionais dessa área têm um papel vital em salvaguardar informações e prevenir violações de dados. A crescente sofisticação das ameaças cibernéticas torna a segurança de TI uma área de grande importância e demanda.                </span>
                </b>
              </li>
            </ul>
          </div>
          <div className="curso-de-graduao-container">
            <ul className="objetivo-a-rea-de-desenvolvi">
              <li className="cursos-online-de">
              Curso de Graduação em Segurança da Informação, Ciência da Computação com ênfase em segurança ou cursos similares.              </li>
            </ul>
            <p className="blank-line6">&nbsp;</p>
            <ul className="objetivo-a-rea-de-desenvolvi">
              <li className="cursos-online-de">
              Treinamento em certificações de segurança, como CompTIA Security+, Certified Information Systems Security Professional (CISSP) ou Certified Ethical Hacker (CEH).              </li>
            </ul>
            <p className="blank-line6">&nbsp;</p>
            <ul className="objetivo-a-rea-de-desenvolvi">
              <li>
              Participação em cursos de ética hacker e penetração para entender como proteger sistemas contra ataques.              </li>
            </ul>
          </div>          
        </div>
        <div className="title">
          <b className="teste-finalizado">TESTE FINALIZADO:</b>
          <div className="desenvolvimento-de-software">SEGURANÇA DE T.I</div>
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
        <img className="image-software-icon" alt="" src="/image-26@2x.png" />
        <div className="money-text">
          <img className="money" alt="" src="/money.svg" />
          <b className="valor">R$3.650/mês</b>
        </div>
      </div>
    </div>
  );
};

export default SegTiPageDesktop;
