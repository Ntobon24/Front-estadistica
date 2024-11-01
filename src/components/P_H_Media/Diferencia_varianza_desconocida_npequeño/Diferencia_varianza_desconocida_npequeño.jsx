import React, { useState } from 'react';
import './Diferencia_varianza_desconocida_npequeño.css';

const Diferencia_varianza_desconocida_npequeño = () => {
    const [formData, setFormData] = useState({
        x_barra: '',
        y_barra: '',
        d0: '',
        s1: '',
        s2: '',
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
            const response = await fetch('/api/Diferencia_varianza_desconocida_npequeño', {
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
            <h2>Prueba de Hipótesis (Diferencia de Varianzas, Muestra Pequeña)</h2>
            <form onSubmit={handleSubmit} className="form">
                <label className="label">Media de la primera muestra (x̄):</label>
                <input
                    type="number"
                    step="0.01"
                    name="x_barra"
                    value={formData.x_barra}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Media de la segunda muestra (ȳ):</label>
                <input
                    type="number"
                    step="0.01"
                    name="y_barra"
                    value={formData.y_barra}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Diferencia hipotética de medias (d0):</label>
                <input
                    type="number"
                    step="0.01"
                    name="d0"
                    value={formData.d0}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Desviación estándar de la primera muestra (s1):</label>
                <input
                    type="number"
                    step="0.01"
                    name="s1"
                    value={formData.s1}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Desviación estándar de la segunda muestra (s2):</label>
                <input
                    type="number"
                    step="0.01"
                    name="s2"
                    value={formData.s2}
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

export default Diferencia_varianza_desconocida_npequeño;
