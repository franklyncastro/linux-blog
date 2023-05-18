import React from "react";
import style from "../styles/Content.module.css";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title} id="start">Tabla del Contenido</h1>

      <section className={style.section1}>
        <ul>
          <li>
            <Link to="/description#sudo">Comando sudo</Link>
          </li>
          <li>
            <Link to="/description#pwd">Comando pwd</Link>
          </li>
          <li>
            <Link to="/description#cd">Comando cd</Link>
          </li>
          <li>
            <Link to="/description#ls">Comando ls</Link>
          </li>
          <li>
            <Link to="/description#cat">Comando cat</Link>
          </li>
          <li>
            <Link to="/description#cp">Comando cp</Link>
          </li>
          <li>
            <Link to="/description#mv">Comando mv</Link>
          </li>
          <li>
            <Link to="/description#mkdir">Comando mkdir</Link>
          </li>
          <li>
            <Link to="/description#rmdir">Comando rmdir</Link>
          </li>
          <li>
            <Link to="/description#rm">Comando rm</Link>
          </li>
          <li>
            <Link to="/description#touch">Comando touch</Link>
          </li>
          <li>
            <Link to="/description#locate">Comando locate</Link>
          </li>
          <li>
            <Link to="/description#find">Comando find</Link>
          </li>
          <li>
            <Link to="/description#grep">Comando grep</Link>
          </li>
          <li>
            <Link to="/description#df">Comando df</Link>
          </li>
          <li>
            <Link to="/description#du">Comando du</Link>
          </li>
          <li>
            <Link to="/description#head">Comando head</Link>
          </li>
          <li>
            <Link to="/description#tail">Comando tail</Link>
          </li>
          <li>
            <Link to="/description#diff">Comando diff</Link>
          </li>
          <li>
            <Link to="/description#tar">Comando tar</Link>
          </li>
          <li>
            <Link to="/description#chmod">Comando chmod</Link>
          </li>
          <li>
            <Link to="/description#chown">Comando chown</Link>
          </li>
          <li>
            <Link to="/description#jobs">Comando jobs</Link>
          </li>
          <li>
            <Link to="/description#kill">Comando kill</Link>
          </li>
          <li>
            <Link to="/description#ping">Comando ping</Link>
          </li>
          <li>
            <Link to="/description#wget">Comando wget</Link>
          </li>
          <li>
            <Link to="/description#uname">Comando uname</Link>
          </li>
          <li>
            <Link to="/description#top">Comando top</Link>
          </li>
          <li>
            <Link to="/description#history">Comando history</Link>
          </li>
          <li>
            <Link to="/description#man">Comando man</Link>
          </li>
          <li>
            <Link to="/description#echo">Comando echo</Link>
          </li>
          <li>
            <Link to="/description#zip">Comandos zip y unzip</Link>
          </li>
          <li>
            <Link to="/description#hostname">Comando hostname</Link>
          </li>
          <li>
            <Link to="/description#useradd">Comando useradd y userdel</Link>
          </li>
          <li>
            <Link to="/description#apt-get">Comando apt-get</Link>
          </li>
          <li>
            <Link to="/description#nano">Comandos nano, vi y jed</Link>
          </li>
          <li>
            <Link to="/description#alias">Comandos alias y unalias</Link>
          </li>
          <li>
            <Link to="/description#su">Comando su</Link>
          </li>
          <li>
            <Link to="/description#htop">Comando htop</Link>
          </li>
          <li>
            <Link to="/description#ps">Comando ps</Link>
          </li>
        </ul>

      </section>
        <a href="#start" className={style.up}>Up</a>
    </div>
  );
};

export default Content;
