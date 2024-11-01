import React from 'react';
import './P_H_Media.css';
import Form_varianza_conocida from './Varianza_conocida/Form_varianza_conocida';
import Form_varianza_desconocida_npequeño from './Form_varianza_desconocida_npequeño/Form_varianza_desconocida_npequeño';
import Form_varianza_desconocida_ngrande from './Form_varianza_desconocida_ngrande/Form_varianza_desconocida_ngrande';

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
    </div>
  );
};

export default P_H_Media;