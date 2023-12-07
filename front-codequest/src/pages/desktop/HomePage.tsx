import { FunctionComponent, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./HomePage.css";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const HomePageDesktop: FunctionComponent = () => {
  const [displayText, setDisplayText] = useState("");
  const [redirecting, setRedirecting] = useState(false);

  const textToType = `Nós somos um grupo de estudantes do Colégio Técnico de Campinas, e esse é o nosso Trabalho de Conclusão de Curso do Departamento de Processamento de Dados.`;

  useEffect(() => {
    const aboutPageContainer = document.getElementById("aboutPageContainer");

    const handleScroll = () => {
      if (aboutPageContainer) {
        const rect = aboutPageContainer.getBoundingClientRect();

        // Verifique se o elemento aboutPageContainer está no campo de visão do usuário.
        if (rect.top < window.innerHeight * 0.8) {
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex <= textToType.length) {
              setDisplayText(textToType.substring(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(interval);
            }
          }, 30); // Velocidade da digitação (50 milissegundos)
          window.removeEventListener("scroll", handleScroll); // Remova o ouvinte após iniciar a animação.
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textToType]);

  const handleRedirect = () => {
    setRedirecting(true);

    // Simule um atraso de 1 segundo antes do redirecionamento
    setTimeout(() => {
      setRedirecting(false);
      // Realize o redirecionamento real no local apropriado dentro da função handleRedirect.
      // history.push("/testpage01");
    }, 1000); // 1000 milissegundos = 1 segundo
  };

  return (
    <div className="home-page-desktop">
      <div className="high-page">
        <img className="background-high-icon" alt="" src="/background-high@2x.png" />
        <img className="astronaut-icon" alt="" src="/astronaut@2x.png" />
        <header className="high">
          <img className="rectangle-high" alt="" src="/rectangle-high.svg" />
          <img className="logo-branco-icon" alt="" src="/logo-branco.png" />
          <div className="text-high">
            <ScrollLink
              to="aboutPageContainer"
              duration={500}
              className="about"
              id="txtAbout"
            >
              about
            </ScrollLink>
            <ScrollLink
              to="contactPageContainer"
              duration={500}
              className="contact"
              id="txtContact"
            >
              contact
            </ScrollLink>
          </div>
        </header>
        <div className="title4">
          <p>SEU TESTE</p>
          <p>TECNOLÓGICO</p>
          <p>AQUI.</p>
          <RouterLink to="/testpage01">
            <Button
              className="boto-iniciar"
              name="Botão Iniciar"
              id="btnIniciar"
              variant="primary"
              onClick={handleRedirect}
              disabled={redirecting}
            >
              {redirecting ? "Aguarde..." : "INICIAR"}
            </Button>
          </RouterLink>
        </div>
      </div>
      
      <div className="about-page" id="aboutPageContainer">
        <img className="image-10-icon" alt="" src="/background-about@2x.png" />
        <img className="rock-of-the-astronaut-1" alt="" src="/rock-of-the-astronaut-1@2x.png" />
        <div className="title-about">
          <h1 className="about-us" id="titleAbout">
            About us
          </h1>
          <div className="rectangle-title" />
        </div>
        <h2 className="txtAbout" id="txtAbout">
          <p>
            <span>{displayText}</span>
          </p>
        </h2>
        <div className="gustavo">
          <img className="image-6-icon" alt="" src="/imgGustavo@2x.png" />
          <h3 className="gustavo-miguel" id="txtGustavo">
            Gustavo Miguel
          </h3>
        </div>
        <div className="kauan">
          <img className="image-4-icon" alt="" src="/imgKauan@2x.png" />
          <h3 className="kauan-piacente" id="txtKauan">
            Kauan Piacente
          </h3>
        </div>
        <div className="joo">
          <h3 className="joo-victor" id="txtJoao">
            João Victor
          </h3>
          <img className="image-5-icon" alt="" src="/imgJoao@2x.png" />
        </div>
      </div>

      <div className="contact-page" id="contactPageContainer">
      <img className="background-contact-icon" alt="" src="/background-contact@2x.png" />
      <img className="logos-icon" alt="" src="/imgLogos@2x.png" />
      <div className="socials">
        <div className="instagram">
          <a href="https://www.instagram.com/codequest_/" target="_blank" rel="noopener noreferrer">
            <img className="vector-icon1" alt="" src="/undefined5.png" />
          </a> 
          <h2 className="cdquestinsta">@codequest_</h2>
          
        </div>
        <div className="gmail">
          <a href="mailto:codequest03@gmail.com" target="_blank" rel="noopener noreferrer">
            <img className="vector-icon" alt="" src="/undefined4.png" />
          </a> 
          <h2 className="cdquestmail">codequest03@gmail.com</h2>
          
        </div>
        <div className="local">
          <a href="https://maps.google.com/?q=R.+Culto+%C3%A0+Ci%C3%AAncia,+177+-+Centro,+Campinas+-+SP,+13020-060" target="_blank" rel="noopener noreferrer">
            <img className="vector-icon2" alt="" src="/undefined6.png" />
          </a>  
          <h2 className="cdquestloca">R. Culto à Ciência - Centro, Campinas - SP</h2>
           
          
        </div>
      </div>

      </div>


    </div>
  );
};

export default HomePageDesktop;
