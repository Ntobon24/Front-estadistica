import React, { useState } from 'react';
import './Form_diferencia_proporciones.css';

const Form_diferencia_proporciones = () => {
    const [formData, setFormData] = useState({
        p1_gorrito: '',
        p2_gorrito: '',
        p1: '',
        p2: '',
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
            const response = await fetch('/api/Form_diferencia_proporciones', {
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
            <h2>Prueba de Hipótesis (Diferencia de Proporciones)</h2>
            <form onSubmit={handleSubmit} className="form">
                <label className="label">Proporción muestral del primer grupo (p̂1):</label>
                <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    name="p1_gorrito"
                    value={formData.p1_gorrito}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Proporción muestral del segundo grupo (p̂2):</label>
                <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    name="p2_gorrito"
                    value={formData.p2_gorrito}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Proporción bajo H0 para el primer grupo (p1):</label>
                <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    name="p1"
                    value={formData.p1}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Proporción bajo H0 para el segundo grupo (p2):</label>
                <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    name="p2"
                    value={formData.p2}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Tamaño de la muestra del primer grupo (n1):</label>
                <input
                    type="number"
                    name="n1"
                    value={formData.n1}
                    onChange={handleChange}
                    className="input"
                    required
                />

                <label className="label">Tamaño de la muestra del segundo grupo (n2):</label>
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

export default Form_diferencia_proporciones;
