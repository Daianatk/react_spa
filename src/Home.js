import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hola</h2>
        <p>¿Qué es React?
        React es una librería Front-end 
        basada en Javascript. Su objetivo es crear interfaces de 
        usuario a través de componentes, 
        fomentando el uso de SPA (Single Page Applications).</p>

        <p>¿Componentes? ¿SPA?
        Los componentes se pueden definir como cada parte que compone una página. 
        Los componentes mas comunes de encontrar son: Navbar (Header), Body (el cuerpo de la página) 
        y Footer (Pie de página). A su vez, el cuerpo de la página estará compuesto por más componentes, 
        por ejemplo un slider, una tabla, un formulario, etc.

        Si bien SPA no es algo difícil de entender, la mejor forma de entender la motivación que lleva a 
        hacer SPAs es a través de un ejemplo práctico:

        En nuestra página vamos a tener componentes que se repitan siempre, como por ejemplo: La Navbar y 
        el Footer, las llamadas a CSS externos o a librerías JS. Al querer cambiar de sección, en una 
        aplicación común, todos estos elementos se tiene que volver a cargar en la página, lo que hace que 
        la UX no sea la más fluida posible.

        Entonces: ¿Cómo podemos hacer para no recargar toda la página al cambiar de sección?

        Simple, implementando SPA con ReactJS, podremos conseguir que lo único que se recargue en nuestra 
        página sean los elementos del Body, y esto es tan rápido que casi no nos vamos a dar cuenta!

        Ahora si, entendiendo un poco el potencial de ReactJs, podemos empezar a crear nuestra primera aplicación.</p>
 
        <p>ReactJS — Primeros pasos</p>
      </div>
    );
  }
}
 
export default Home;