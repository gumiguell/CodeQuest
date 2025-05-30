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
        if (rect.top < window.innerHeight * 0.8 && displayText === "") { // Start typing only once
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex <= textToType.length) {
              setDisplayText(textToType.substring(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(interval);
            }
          }, 30); 
          window.removeEventListener("scroll", handleScroll); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textToType, displayText]); // Added displayText to dependencies

  const handleRedirect = () => {
    setRedirecting(true);
    setTimeout(() => {
      setRedirecting(false);
      // Navigation is handled by RouterLink, this is for visual feedback if needed
    }, 1000); 
  };

  return (
    <div className="home-page-desktop">
      <header className="high">
        <img className="logo-branco-icon" alt="CodeQuest Logo" src="/logo-branco.png" />
        <nav className="text-high">
          <ScrollLink
            to="aboutPageContainer"
            smooth={true}
            duration={500}
            className="about"
            id="txtAboutLink" // Changed id for clarity
          >
            SOBRE NÓS
          </ScrollLink>
          <ScrollLink
            to="contactPageContainer"
            smooth={true}
            duration={500}
            className="contact"
            id="txtContactLink" // Changed id for clarity
          >
            CONTATO
          </ScrollLink>
        </nav>
      </header>

      <section className="high-page">
        <img className="background-high-icon" alt="" src="/background-high@2x.png" />
        <div className="hero-content">
          <div className="title-and-button">
            <div className="title4">
              <p>SEU TESTE</p>
              <p>TECNOLÓGICO</p>
              <p>AQUI.</p>
            </div>
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
          <img className="astronaut-icon" alt="Astronauta" src="/astronaut@2x.png" />
        </div>
      </section>
      
      <section className="about-page" id="aboutPageContainer">
        <img className="image-10-icon" alt="Fundo Sobre Nós" src="/background-about@2x.png" />
        <img className="rock-of-the-astronaut-1" alt="Pedra do astronauta" src="/rock-of-the-astronaut-1@2x.png" />
        <div className="title-about-container">
          <h1 className="about-us" id="titleAbout">
            SOBRE NÓS
          </h1>
          <div className="rectangle-title" />
        </div>
        <div className="txtAbout-container">
          <p className="txtAbout" id="txtAboutP"> {/* Changed h2 to p for semantic text */}
            <span>{displayText}</span>
          </p>
        </div>
        <div className="members-container"> {/* Added wrapper */}
          <div className="member-card gustavo">
            <img className="image-6-icon" alt="Gustavo Miguel" src="/imgGustavo@2x.png" />
            <h3 className="member-name gustavo-miguel" id="txtGustavo">
              Gustavo Miguel
            </h3>
          </div>
          <div className="member-card kauan">
            <img className="image-4-icon" alt="Kauan Piacente" src="/imgKauan@2x.png" />
            <h3 className="member-name kauan-piacente" id="txtKauan">
              Kauan Piacente
            </h3>
          </div>
          <div className="member-card joo">
            <img className="image-5-icon" alt="João Victor" src="/imgJoao@2x.png" />
            <h3 className="member-name joo-victor" id="txtJoao">
              João Victor
            </h3>
          </div>
        </div>
      </section>

      <footer className="contact-page" id="contactPageContainer"> {/* Changed to footer for semantics */}
        <img className="background-contact-icon" alt="Fundo Contato" src="/background-contact@2x.png" />
        <img className="logos-icon" alt="Logos parceiros" src="/imgLogos@2x.png" />
        <div className="socials">
          <div className="social-item instagram">
            <a href="https://www.instagram.com/codequest_/" target="_blank" rel="noopener noreferrer">
              <img className="vector-icon vector-icon1" alt="Instagram" src="/undefined5.png" /> {/* Added base class */}
            </a> 
            <h2 className="social-text cdquestinsta">@codequest_</h2>
          </div>
          <div className="social-item gmail">
            <a href="mailto:codequest03@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className="vector-icon" alt="Gmail" src="/undefined4.png" />
            </a> 
            <h2 className="social-text cdquestmail">codequest03@gmail.com</h2>
          </div>
          <div className="social-item local">
            <a href="https://maps.google.com/?q=R.+Culto+%C3%A0+Ci%C3%AAncia,+177+-+Centro,+Campinas+-+SP,+13020-060" target="_blank" rel="noopener noreferrer">
              <img className="vector-icon vector-icon2" alt="Localização" src="/undefined6.png" /> {/* Added base class */}
            </a>  
            <h2 className="social-text cdquestloca">R. Culto à Ciência - Centro, Campinas - SP</h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageDesktop;
