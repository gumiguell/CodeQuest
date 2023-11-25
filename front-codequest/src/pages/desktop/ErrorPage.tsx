import { FunctionComponent } from "react";
import "./DesWebPage.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useState } from "react";

class ErrorPage {
    private errorDiv: HTMLDivElement;
  
    constructor() {
      this.errorDiv = document.createElement("div");
      this.errorDiv.style.display = "flex";
      this.errorDiv.style.flexDirection = "column";
      this.errorDiv.style.justifyContent = "center";
      this.errorDiv.style.alignItems = "center";
      this.errorDiv.style.height = "100vh";
      this.errorDiv.style.backgroundColor = "#f2f2f2";
      this.errorDiv.innerHTML = `
        <h1 style="font-size: 10rem; margin: 0;">404</h1>
        <h2 style="font-size: 3rem; margin: 0;">Not Found</h2>
        <p style="font-size: 1.5rem; margin: 0;">The resource requested could not be found on this server!</p>
      `;
      document.body.appendChild(this.errorDiv);
    }
  }