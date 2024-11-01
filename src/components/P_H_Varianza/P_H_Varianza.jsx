import React from "react";
import "./P_H_Varianza.css";
import Form_Varianza from "./Form_Varianza/Form_Varianza";

const P_H_Varianza = () => {
    return (
      <div className="main-form-container">
        <h2>Pruebas de Hipótesis por Varianza</h2>
  
        <div className="form-section">
          <Form_Varianza/>
        </div>

      </div>
    );
  };
  
  export default P_H_Varianza;