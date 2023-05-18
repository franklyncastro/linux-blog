import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from '../styles/Landing.module.css'
import img from '../../img/linux.jpg'
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className={style.container}>
     <img src={img} alt="img not found" className={style.img}/>
     <div className={style.btnContainer}>
        <Link className={style.btn} to='/home'>Let's Start</Link>
     </div>
    </div>
  );
};

export default Landing;
