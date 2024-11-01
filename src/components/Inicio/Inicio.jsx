import React from "react";
import "./inicio.css";

function Inicio() {
    return (
        <main className="about-container">
  <section className="about-content">
    <h2>Pruebas de Hipótesis en Estadística</h2>
    <p>
      Las pruebas de hipótesis en estadística son procedimientos que nos permiten tomar decisiones sobre una población basándonos en muestras. 
      Consisten en formular una afirmación inicial, llamada hipótesis nula, y tratar de determinar si los datos observados nos permiten rechazarla 
      en favor de una alternativa.
    </p>
    <p>
      Este proceso es esencial en la investigación científica, donde se busca establecer conclusiones a partir de muestras representativas. 
      Una prueba de hipótesis es fundamental para evaluar la veracidad de afirmaciones y para tomar decisiones informadas basadas en datos estadísticos.
    </p>
    <div className="Prueba-hipotesis">
      <div className="tipos">
        <h3>Tipos de Pruebas de Hipótesis</h3>
        <p>
          Las pruebas de hipótesis se pueden clasificar en varios tipos según la naturaleza de los datos y la comparación que se desea realizar. 
          Algunos tipos comunes son:
        </p>
        <ul>
          <li><strong>Pruebas de una muestra</strong>: Compara una muestra con un valor hipotético de la población.</li>
          <li><strong>Pruebas de dos muestras</strong>: Compara dos muestras entre sí para evaluar si hay diferencias significativas entre ellas.</li>
          <li><strong>Pruebas paramétricas</strong>: Asumen que los datos siguen una distribución específica, como la distribución normal (e.g., prueba t, ANOVA).</li>
          <li><strong>Pruebas no paramétricas</strong>: No requieren supuestos de distribución (e.g., prueba de Mann-Whitney, prueba de Chi-cuadrado).</li>
          <li><strong>Pruebas unilaterales y bilaterales</strong>: Evalúan si la diferencia es en una sola dirección (unilateral) o en ambas (bilateral).</li>
        </ul>
      </div>
      <div className="importancia">
        <h3>Importancia de las Pruebas de Hipótesis</h3>
        <p>
          Las pruebas de hipótesis permiten a los investigadores y científicos evaluar teorías y tomar decisiones basadas en datos. 
          Este proceso ayuda a reducir la incertidumbre y proporciona una base sólida para confirmar o rechazar afirmaciones.
          Además, son esenciales para la toma de decisiones en áreas como la medicina, psicología, economía y ciencias sociales.
        </p>
        <p>
          La prueba de hipótesis nos permite establecer niveles de significancia (usualmente el 5% o 1%), que determinan la probabilidad de cometer un 
          error al rechazar la hipótesis nula. Esto asegura un control en la precisión de los resultados y contribuye a que las conclusiones sean confiables.
        </p>
      </div>
    </div>
  </section>
</main>

    );
}

export default Inicio;