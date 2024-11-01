import React, { useState } from 'react';
import './Form_varianza_conocida.css';

const Form_varianza_conocida = () => {
    const [formData, setFormData] = useState({
        x_barra: '',
        sigma: '',
        miu0: '',
        alpha: '',
        n: '',
        tipo_prueba: 'bilateral'
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/Form_varianza_conocida', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            setResult(data.resultado);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h2>Prueba de Hipótesis por Media y Varianza conocida</h2>
            <form onSubmit={handleSubmit} className="form">
                <label className="label">Media de la muestra (x̄):</label>
                <input
                    type="number"
                    step="0.01"
                    name="x_barra"
                    value={formData.x_barra}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Desviación estándar de la población (σ):</label>
                <input
                    type="number"
                    step="0.01"
                    name="sigma"
                    value={formData.sigma}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Media bajo H0 (μ0):</label>
                <input
                    type="number"
                    step="0.01"
                    name="miu0"
                    value={formData.miu0}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Nivel de significancia (α):</label>
                <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    name="alpha"
                    value={formData.alpha}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Tamaño de la muestra (n):</label>
                <input
                    type="number"
                    name="n"
                    value={formData.n}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Tipo de prueba:</label>
                <select
                    name="tipo_prueba"
                    value={formData.tipo_prueba}
                    onChange={handleChange}
                    className="select"
                >
                    <option value="bilateral">Bilateral</option>
                    <option value="derecha">Unilateral a la derecha</option>
                    <option value="izquierda">Unilateral a la izquierda</option>
                </select>

                <button type="submit" className="button">Calcular Prueba</button>
            </form>

            {result && (
                <div className="result">
                    <h3>Resultado:</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default Form_varianza_conocida;