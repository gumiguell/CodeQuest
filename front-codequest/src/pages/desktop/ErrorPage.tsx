import { Link, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from "react-bootstrap";
import { FunctionComponent } from "react";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Not Found</h2>
      <p>The resource requested could not be found on this server!</p>
      <Link to="/"><Button variant="primary">Go Home</Button></Link>
    </div>
  );
}

export default ErrorPage;

// import { FunctionComponent } from "react";
// import "./DesWebPage.css";
// import { Link } from 'react-router-dom';
// import { Button } from "react-bootstrap";
// import { useState } from "react";

// class ErrorPage {
//     private errorDiv: HTMLDivElement;
  
//     constructor() {
//       this.errorDiv = document.createElement("div");
//       this.errorDiv.style.display = "flex";
//       this.errorDiv.style.flexDirection = "column";
//       this.errorDiv.style.justifyContent = "center";
//       this.errorDiv.style.alignItems = "center";
//       this.errorDiv.style.height = "100vh";
//       this.errorDiv.style.backgroundColor = "#f2f2f2";
//       this.errorDiv.innerHTML = `
//         <h1 style="font-size: 10rem; margin: 0;">404</h1>
//         <h2 style="font-size: 3rem; margin: 0;">Not Found</h2>
//         <p style="font-size: 1.5rem; margin: 0;">The resource requested could not be found on this server!</p>
//       `;
//       document.body.appendChild(this.errorDiv);
//     }
//   }

//   export default ErrorPage;