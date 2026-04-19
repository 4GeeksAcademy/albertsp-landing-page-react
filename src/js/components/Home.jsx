import React from "react";
import Navegacion from "./Navegacion";
import Tarjeta from "./Tarjeta";
import Encabezado from "./Encabezado";
import PiePagina from "./PiePagina";

const Home = () => {
  return (
    <>
      <Navegacion className="navbar"></Navegacion>
      <div className="contenedor-principal">
        <Encabezado></Encabezado>
        <div className="contenedor-tarjetas">
          <Tarjeta
            title={"HTML"}
            description={
              "HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript)."
            }
            source={"./src/img/html-5_5968267.png"}
            link={"https://developer.mozilla.org/es/docs/Web/HTML"}
          ></Tarjeta>
          <Tarjeta
            title={"CSS"}
            description={
              "Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (incluyendo varios lenguajes basados en XML como SVG, MathML o XHTML). CSS describe cómo debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios."
            }
            source={"./src/img/css-3_5968242.png"}
            link={"https://developer.mozilla.org/es/docs/Web/CSS"}
          ></Tarjeta>
          <Tarjeta
            title={"Javascript"}
            description={
              "JavaScript (JS) es un lenguaje de programación ligero, interpretado (o compilado justo-a-tiempo) con funciones de primera clase. Si bien es más conocido como el lenguaje de scripting para páginas web, muchos entornos fuera del navegador también lo usan, tal como Node.js, Apache CouchDB y Adobe Acrobat."
            }
            source={"./src/img/js_5968292.png"}
            link={"https://developer.mozilla.org/es/docs/Web/JavaScript"}
          ></Tarjeta>
          <Tarjeta
            title={"React"}
            description={
              "React (también conocido como React.js o ReactJS) es una biblioteca de JavaScript de código abierto creada por Facebook en 2013, enfocada en la construcción de interfaces de usuario (UI) interactivas y dinámicas para aplicaciones web y móviles. Su enfoque principal es la creación de componentes reutilizables, permitiendo que el desarrollo frontend sea más eficiente, escalable y rápido al actualizar solo las partes necesarias de la página."
            }
            source={"./src/img/molecule_10285707.png"}
            link={"https://es.react.dev/"}
          ></Tarjeta>
        </div>
      </div>
      <div className="contenedor-footer">
        <p>Progreso del Bootcamp Full-Stack</p>
        <PiePagina></PiePagina>
      </div>
    </>
  );
};

export default Home;
