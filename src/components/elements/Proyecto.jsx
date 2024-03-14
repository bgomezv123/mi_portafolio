import '../../assets/css/elements/Proyecto.css'

import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { FaFileCode } from "react-icons/fa6";
import React, { useState } from 'react';

function Proyecto({titulo, texto, imagen1, imagen2, tecnologia, linkGithub}) {
    


  return (
    <>
        <div className='contenedor-proyecto '>
        <div className={"etiqueta-diagonal "+tecnologia}>{tecnologia}</div>
        <div className='contenedor-imagen-proyecto flip-z'>
            <img src= {imagen1} className="imagen-proyecto1" alt="imagen proyecto"></img>
            <img src= {imagen2} className="imagen-proyecto2" alt="imagen proyecto"></img>
        </div>
        <div className="contenedor-texto-proyecto">
          <h1 className="titulo-proyecto">{titulo}</h1>
          <p className="texto-proyecto">{texto}</p>
        </div>
        <ul className="contenedor-redes-sociales-proyecto">
          <a className="link-proyecto" href={linkGithub} target="_blank">
            <li>
            <FaGithubSquare className="icono-red-social"/>
              <p>GitHub</p>
            </li>
          </a>
          <a className="link-proyecto" href={linkGithub} target="_blank">
          <li>
            <MdOutlineWeb className="icono-red-social"/>
            <p>Demo</p>
          </li>
          </a>
          <a className="link-proyecto" href={linkGithub} target="_blank">
          <li>
            <FaFileCode className="icono-red-social"/>
            <p>Codigo</p>
          </li>
          </a>

      </ul>
      </div>
    
    
    </>

      
    );
}


export default Proyecto;