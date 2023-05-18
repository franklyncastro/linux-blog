import React, { useEffect, useRef } from "react";
import style from "../styles/Description.module.css";

const Description = () => {
  const sudoRef = useRef(null);
 

  useEffect(() => {
    if (sudoRef.current) {
      sudoRef.current.scrollIntoView({ behavior: "smooth" });
    }
   
  });

  return (
    <div className={style.container}>
      <h1 className={style.title}>Lista de comandos</h1>
      <section className={style.section1}>
        <div className={style.card}>
          <h2 ref={sudoRef} id="sudo" className={style.title2}>
            Comando sudo
          </h2>
          <p>
            Abreviatura de superusuario do, sudo es uno de los comandos básicos
            más populares de Linux que te permite realizar tareas que requieren
            permisos administrativos o de root.
          </p>
          <p>
            Al utilizar sudo, el sistema pedirá a los usuarios que se
            autentiquen con una contraseña. A continuación, el sistema Linux
            registrará una marca de tiempo como seguimiento. Por defecto, cada
            usuario root puede ejecutar comandos sudo durante
            <strong>15 minutos por sesión.</strong>
          </p>
          <p>
            Si intentas ejecutar sudo en la línea de comandos sin autenticarte,
            el sistema registrará la actividad como un evento de seguridad.
          </p>
          <div>
            <h4>Esta es la sintaxis general:</h4>
            <strong>sudo (comando)</strong>
          </div>
          <p>También puedes añadir una opción, por ejemplo:</p>
          <ul>
            <li>
              <strong>-k</strong> o <strong>-reset-timestamp</strong> invalida
              el archivo timestamp.
            </li>
            <li>
              <strong>-g</strong> o <strong>-group=group</strong> ejecuta
              comandos como un nombre o ID de grupo especificado
            </li>
            <li>
              <strong>-h</strong> o <strong>-host=host</strong> ejecuta comandos
              en el host.
            </li>
          </ul>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}

        <div className={style.card}>
          <h2 id="pwd" className={style.title2}>
            Comando pwd
          </h2>
          <p>
            Utiliza el comando pwd para encontrar la ruta de tu directorio de
            trabajo actual. Simplemente introduciendo <strong>pwd</strong> te
            devolverá la ruta actual completa, una ruta de todos los directorios
            que comienza con una barra oblicua <strong>(/)</strong>. Por
            ejemplo, <strong>/inicio/nombredeusuario</strong>.
          </p>
          <div>
            <h4>El comando pwd utiliza la siguiente sintaxis:</h4>
            <strong>pwd [opción]</strong>
          </div>
          <p>Tiene dos opciones aceptables:</p>
          <ul>
            <li>
              <strong>-L</strong> o <strong>-logical</strong> imprime el
              contenido de las variables de entorno, incluidos los enlaces
              simbólicos.
            </li>
            <li>
              <strong>-P</strong> o <strong>-physical</strong> imprime la ruta
              real del directorio actual.
            </li>
          </ul>
        </div>

        {/* --------------------------------------------------------------------------------------------------- */}
      </section>
    </div>
  );
};

export default Description;
