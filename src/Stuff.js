import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Articulo</h2>
        <p>Instalación
          Para comenzar a utilizar React debemos instalar algunos paquetes.

          Lo primero que tenemos que instalar es Node.js ya que vamos a 
          utilizar npm para la instalación de los paquetes de ReactJs.

          Una vez descargado e instalado, vamos a proceder con los siguientes comandos:

          Verificar si esta bien instalado Node y que versión:

          node -v 
          Instalar de manera global el paquete Create React App:

          npm install -g create-react-app
          Ingresar a la carpeta en donde pondrás tus proyectos y ejecutar:

          create-react-app nombreProyecto
          Y por último, iniciar la aplicación:

          npm start
          Si todo esta bien, la aplicación estará corriendo en el puerto 3000. 
          Suele abrirse solo el navegador en esta dirección, pero si no es así, 
          sólo debes ingresar a http://localhost:3000 y verás tu app de React en marcha!</p>
        <ol>
          <li>node -v</li>
          <li>npm install -g create-react-app</li>
          <li>create-react-app nombreProyecto</li>
          <li>npm start</li>
          <li>http://localhost:3000</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;