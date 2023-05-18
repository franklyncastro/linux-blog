import React, { useState, useEffect } from "react";
import style from "../styles/Home.module.css";
import CarouselImg from '../Carousel/CarouselImg'
const Home = () => {
  useEffect(() => {
    console.log("Probando Use Effect");
  }, []);

  return (
    <div className={style.container} id="start">
      <CarouselImg />
      <div>
      <h1 className={style.title}>40 Comandos básicos que todo usuario de Linux debe conocer</h1>
      </div>
      <section className={style.section1}>
        <p>
          <strong>Linux</strong> es una familia de sistemas operativos
          <strong>Unix</strong> de código abierto basados en el núcleo Linux.
          Estos incluyen
          <strong> Ubuntu, Fedora, Debian, openSUSE y Red Hat</strong>. Linux es
          utilizado comúnmente para gestionar un Servidor Virtual Privado
          <strong>(VPS)</strong>. Para trabajar con Linux, es necesario utilizar
          un shell, es decir un programa que permite acceder a los servicios del
          sistema operativo. La mayoría de las distribuciones de Linux utilizan
          una interfaz gráfica de usuario <strong>(GUI)</strong>, por lo que son
          fáciles de usar para principiantes.
        </p>

        <p>
          Sin embargo, te recomendamos utilizar la interfaz de línea de comandos
          <strong>(CLI)</strong> porque es más rápida y ofrece más control. Las
          tareas que requieren varios pasos en la <strong>GUI</strong> pueden
          realizarse en cuestión de segundos introduciendo comandos en la
          <strong>CLI</strong>.
        </p>

        <p>
          Así que si quieres usar Linux, aprender las utilidades o comandos
          linux más comunes te será de gran ayuda. Este artículo te enseñará los
          <strong>40</strong> comandos básicos para ayudarte a utilizar tu
          distribución <strong>Linux eficazmente</strong>.
        </p>
      </section>
      <h1 className={style.title}>¿Qué es un comando Linux?</h1>
      <section className={style.section1}>
      <p>
      Un comando Linux es un programa o utilidad que se ejecuta en la CLI, una consola que interactúa con el sistema a través de textos y procesos. Es similar a la aplicación Símbolo del Sistema en Windows.
      </p>
      <p>
      Los comandos de Linux se ejecutan en el Terminal pulsando Enter al final de la línea. Puedes ejecutar comandos para realizar diversas tareas, desde la instalación de paquetes hasta la gestión de usuarios y la manipulación de archivos.
      </p>
      <p>
      La sintaxis general de un comando Linux es la siguiente:
      </p>
      <strong>Nombredelcomando [opcion(es)] [parametro(s)]</strong>
      <p>
      Los comandos Linux pueden contener una opción o un parámetro. En algunos casos, pueden ejecutarse sin ellos. Estas son las tres partes más comunes de un comando:
      </p>
      <strong>CommandName</strong> es la regla que deseas ejecutar.
      <strong>Option</strong> o <strong>flag</strong> modifica el funcionamiento de un comando. Para ejecutarla, utiliza guiones (-) o guiones dobles (—).
      <strong>Parameter</strong> o <strong>argument</strong> especifica cualquier información necesaria para el comando.
       <br /> <br />
      <p>Ten en cuenta que todos los comandos de Linux distinguen entre mayúsculas y minúsculas.</p>
      </section>

          <a href="#start" className={style.up}>Up</a>

    </div>
  );
};

export default Home;
