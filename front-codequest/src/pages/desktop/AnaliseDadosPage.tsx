import { FunctionComponent } from "react";
import "./AnaliseDadosPage.css";
const AnaliseDadosPageDesktop: FunctionComponent = () => {
  return (
    <div className="analisedados-page-desktop">
      <div className="analisedados-page">
        <img className="background-icon2" alt="" src="/background@2x.png" />
        <img className="image-25-icon" alt="" src="/image-25@2x.png" />
        <img className="logo-padrao-icon2" alt="" src="/logo-padrao@2x.png" />
        <div className="text1">
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
          <div className="curso-de-graduao-container2">
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
          <img className="icon2" alt="" src="/1.png" />
        </div>
        <div className="title2">
          <b className="teste-finalizado2">TESTE FINALIZADO.</b>
          <div className="anlise-de-dados">ANÁLISE DE DADOS</div>
        </div>
        <div className="money-text2">
          <b className="r-4924ms">R$ 4.924/mês</b>
          <img className="group-icon2" alt="" src="/group.png" />
        </div>
        <div className="botao-voltar1">
          <b className="voltar-a-tela2">Voltar a tela inicial</b>
        </div>
        <div className="botao-salvar-teste2">
          <b className="salvar-teste2">SALVAR TESTE</b>
        </div>
      </div>
    </div>
  );
};

export default AnaliseDadosPageDesktop;
