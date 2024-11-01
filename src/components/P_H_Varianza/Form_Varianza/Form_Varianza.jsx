import React, { useState } from 'react';
import './Form_varianza.css';

const Form_Varianza = () => {
    const [formData, setFormData] = useState({
        n: '',
        s: '',
        sigma0: '',
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
            const response = await axios.post('/api/Form_Varianza', formData);
            setResult(response.data.resultado);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h2>Prueba de Hipótesis (Varianza)</h2>
            <form onSubmit={handleSubmit} className="form">
                <label className="label">Tamaño de la muestra (n):</label>
                <input
                    type="number"
                    name="n"
                    value={formData.n}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Desviación estándar de la muestra (s):</label>
                <input
                    type="number"
                    step="0.01"
                    name="s"
                    value={formData.s}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Desviación estándar bajo H0 (σ₀):</label>
                <input
                    type="number"
                    step="0.01"
                    name="sigma0"
                    value={formData.sigma0}
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

export default Form_Varianza;
