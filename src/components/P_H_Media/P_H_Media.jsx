import React from 'react';
import './P_H_Media.css';
import Form_varianza_conocida from './Varianza_conocida/Form_varianza_conocida';
import Form_varianza_desconocida_npequeño from './Form_varianza_desconocida_npequeño/Form_varianza_desconocida_npequeño';
import Form_varianza_desconocida_ngrande from './Form_varianza_desconocida_ngrande/Form_varianza_desconocida_ngrande';
import Diferencia_varianza_conocida from './diferencia_varianza_conocida/diferencia_varianza_conocida';
import Diferencia_varianza_desconocida_ngrade from './Diferencia_varianza_desconocida_ngrade/Diferencia_varianza_desconocida_ngrade';
import Diferencia_varianza_desconocida_npequeño from './Diferencia_varianza_desconocida_npequeño/Diferencia_varianza_desconocida_npequeño';

const P_H_Media = () => {
  return (
    <div className="main-form-container">
      <h2>Pruebas de Hipótesis por media</h2>

      <div className="form-section">
        <Form_varianza_conocida/>
      </div>

      <div className="form-section">
        <Form_varianza_desconocida_npequeño/>
      </div>

      <div className="form-section">
        <Form_varianza_desconocida_ngrande/>
      </div>

      <div className="form-section">
        <Diferencia_varianza_conocida/>
      </div>

      <div className="form-section">
        <Diferencia_varianza_desconocida_ngrade/>
      </div>

      <div className="form-section">
        <Diferencia_varianza_desconocida_npequeño/>
      </div>

    </div>
  );
};

export default P_H_Media;