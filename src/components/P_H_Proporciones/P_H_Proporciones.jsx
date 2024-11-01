import React from "react";
import "./P_H_Proporciones.css";
import Form_proporciones from "./Form_proporciones/Form_proporciones";
import Form_diferencia_proporciones from "./Form_diferencia_proporciones/Form_diferencia_proporciones";

const P_H_Proporciones = () => {
    return (
      <div className="main-form-container">
        <h2>Pruebas de Hipótesis por proporciones</h2>
  
        <div className="form-section">
          <Form_proporciones/>
        </div>

        <div className="form-section">
          <Form_diferencia_proporciones/>
        </div>  

      </div>
    );
  };
  
  export default P_H_Proporciones;