import React, { useState } from 'react';
import './Diferencia_varianza_conocida.css';

const Diferencia_varianza_conocida = () => {
    const [formData, setFormData] = useState({
        x1_barra: '',
        x2_barra: '',
        sigma1: '',
        sigma2: '',
        n1: '',
        n2: '',
        alpha: '',
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
            const response = await fetch('/api/Diferencia_varianza_conocida', {
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
            <h2>Prueba de Hipótesis (Diferencia de Medias, Varianza Conocida)</h2>
            <form onSubmit={handleSubmit} className="form">
                <label className="label">Media de la primera muestra (x̄1):</label>
                <input
                    type="number"
                    step="0.01"
                    name="x1_barra"
                    value={formData.x1_barra}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Media de la segunda muestra (x̄2):</label>
                <input
                    type="number"
                    step="0.01"
                    name="x2_barra"
                    value={formData.x2_barra}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Desviación estándar de la primera población (σ1):</label>
                <input
                    type="number"
                    step="0.01"
                    name="sigma1"
                    value={formData.sigma1}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Desviación estándar de la segunda población (σ2):</label>
                <input
                    type="number"
                    step="0.01"
                    name="sigma2"
                    value={formData.sigma2}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Tamaño de la primera muestra (n1):</label>
                <input
                    type="number"
                    name="n1"
                    value={formData.n1}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Tamaño de la segunda muestra (n2):</label>
                <input
                    type="number"
                    name="n2"
                    value={formData.n2}
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

export default Diferencia_varianza_conocida;
