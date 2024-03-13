import React, { useState } from 'react';
import '../../assets/css/elements/CuadroHabilidades.css'
import Habilidad from './Habilidad';
import logoReact from './react-logo.png'

const Grid = () => {

  const ArrayHabilidades = [
    [1, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [2, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [3, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [4, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [5, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [6, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [7, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [8, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [9, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [10, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [11, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 
    [12, <Habilidad imagen={logoReact} titulo={"React Js"} texto={"Intermedio"}/>], 

  ]

  return (
    <div className="grid-container">
      {   
      ArrayHabilidades.map((item) => (
        <div key={item[0]} className="grid-item">{item[1]}</div>
      ))
      }
    </div>
  );
};

export default Grid;