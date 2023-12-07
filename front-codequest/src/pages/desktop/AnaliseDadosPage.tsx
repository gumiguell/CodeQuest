import { FunctionComponent } from "react";
import "./AnaliseDadosPage.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useState } from "react";

const AnaliseDadosPageDesktop: FunctionComponent = () => {
  const [redirecting, setRedirecting] = useState(false);

  const handleRedirect = () => {
    // Ativar o sinalizador de redirecionamento para mostrar algum indicador de carregamento (opcional).
    setRedirecting(true);

    // Atraso de 1000 milissegundos (1 segundo) antes do redirecionamento.
    setTimeout(() => {
      setRedirecting(false); // Desativar o sinalizador de redirecionamento.
    }, 5000); // 1000 milissegundos = 1 segundo
  };

  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + '/pdf/AnaliseDados.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'AnaliseDados.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="analisedados-page-desktop">
      <div className="analisedados-page">
        <img className="background-icon1" alt="" src="/background@2x.png" />
        <img className="image-software-icon" alt="" src="/image-25@2x.png" />
        <img className="logo-padrao-icon1" alt="" src="/logo-padrao@2x.png" />
        <div className="text">
          <div className="objetivo-a-rea-container2">
            <ul className="objetivo-a-rea-de-anlise-de">
              <li className="cursos-de-anlise">
                <span className="objetivo3">{`Objetivo: `}</span>
                <b>
                  A área de Análise de Dados busca extrair informações
                  significativas a partir de conjuntos de dados, ajudando as
                  empresas a tomar decisões mais embasadas e identificar padrões
                  ocultos.
                </b>
              </li>
            </ul>
            <p className="blank-line8">
              <b>&nbsp;</b>
            </p>
            <ul className="objetivo-a-rea-de-anlise-de">
              <li className="cursos-de-anlise">
                <span className="objetivo3">{`O que faz: `}</span>
                <b>
                  Profissionais nessa área coletam, organizam e interpretam
                  dados, aplicando técnicas estatísticas e ferramentas de
                  análise para identificar tendências, insights e padrões. Eles
                  trabalham com dados de diversas fontes para fornecer
                  informações valiosas para tomadas de decisão.
                </b>
              </li>
            </ul>
            <p className="blank-line8">
              <b>&nbsp;</b>
            </p>
            <ul className="objetivo-a-rea-de-anlise-de">
              <li>
                <span className="objetivo3">{`Vantagens: `}</span>
                <b>
                  A análise de dados é essencial para empresas que buscam
                  compreender melhor seu público, mercado e operações. Os
                  profissionais dessa área têm a oportunidade de influenciar as
                  estratégias das empresas por meio de insights baseados em
                  dados. Além disso, a demanda por analistas de dados está em
                  alta em diversos setores.
                </b>
              </li>
            </ul>
          </div>
          <div className="curso-de-graduao-container">
            <ul className="objetivo-a-rea-de-anlise-de">
              <li className="cursos-de-anlise">
                Curso de Graduação em Estatística, Ciência de Dados ou áreas
                correlatas.
              </li>
            </ul>
            <p className="blank-line8">&nbsp;</p>
            <ul className="objetivo-a-rea-de-anlise-de">
              <li className="cursos-de-anlise">
                Cursos de análise estatística e aprendizado de máquina para
                compreender as técnicas de análise de dados.
              </li>
            </ul>
            <p className="blank-line8">&nbsp;</p>
            <ul className="objetivo-a-rea-de-anlise-de">
              <li>
                Certificações em ferramentas de análise de dados como Python, R
                e SQL.
              </li>
            </ul>
          </div>
        </div>
        <div className="title">
          <b className="teste-finalizado">TESTE FINALIZADO.</b>
          <div className="desenvolvimento-de-software">ANÁLISE DE DADOS</div>
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
        <div className="money-text">
          <img className="money" alt="" src="/money.svg" />
          <b className="valor">R$ 4.924/mês</b>
        </div>
      </div>
    </div>
  );
};

export default AnaliseDadosPageDesktop;
