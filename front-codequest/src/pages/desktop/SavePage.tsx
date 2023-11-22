import { FunctionComponent, useState } from "react";
import "./SavePage.css";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const SavePageDesktop: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [redirecting, setRedirecting] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleRedirect = () => {
    if (email) {
      // Faça algo com o email, por exemplo, enviar para o servidor
      // Em seguida, redirecione de volta à homepage
      setRedirecting(true);
      setTimeout(() => {
        setRedirecting(false);
        // Realize o redirecionamento aqui, por exemplo:
        // history.push("/");
      }, 1000);
    }
  };


  return (
    <div className="save-page-desktop">
      <div className="save-page">
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
        <div className="save-page-child" />
        <img className="logo-branca-icon" alt="" src="/logo-branca@2x.png" />
        <div className="rectangle">
          <img className="image-14-icon" alt="" src="/image-14@2x.png" />
          <div className="rectangle-child" />
          <div className="email">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
          />
          </div>
          <Link to="/">
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
          <div className="text4">
            <div className="finalizando-seu-teste">Finalizando seu teste!</div>
            <div className="por-favor-digite">
              por favor, digite seu email e nós enviaremos seu teste em breve
            </div>
          </div>
          <img className="x-icon" alt="" src="/x.png">
            <Link to="/"></Link>
          </img>
        </div>
      </div>
    </div>
  );
};

export default SavePageDesktop;
