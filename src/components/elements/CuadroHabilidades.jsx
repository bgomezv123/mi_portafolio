import React, { useState } from 'react';
import '../../assets/css/elements/CuadroHabilidades.css'
import Habilidad from './Habilidad';
import django from '/logos-tecnologias/django.png'
import c from '/logos-tecnologias/c.svg'
import cplusplus from '/logos-tecnologias/c++.png'
import darrt from '/logos-tecnologias/dart.png'
import express from '/logos-tecnologias/express.png'
import flutter from '/logos-tecnologias/flutter.png'
import java from '/logos-tecnologias/java.png'
import js from '/logos-tecnologias/js.png'
import kotlin from '/logos-tecnologias/kotlin.png'
import laravel from '/logos-tecnologias/laravel.png'
import mariadb from '/logos-tecnologias/mariadb.png'
import mysql from '/logos-tecnologias/mysql.svg'
import php from '/logos-tecnologias/php.png'
import postgres from '/logos-tecnologias/postgres.svg'
import python from '/logos-tecnologias/python.webp'
import reactLogo from '/logos-tecnologias/react-logo.png'
import reactNavive from '/logos-tecnologias/react-native.png'
import rest from '/logos-tecnologias/rest.jpeg'
import angular from '/logos-tecnologias/angular.png'
import linux from '/logos-tecnologias/gnulinux.png'
import aws from '/logos-tecnologias/aws.png'

const Grid = () => {

  const ArrayHabilidades = [
    [1, <Habilidad imagen={django} titulo={"Django"} texto={"Avanzado"}/>], 
    [2, <Habilidad imagen={express} titulo={"Express JS"} texto={"Intermedio"}/>], 
    [3, <Habilidad imagen={laravel} titulo={"Laravel"} texto={"Intermedio"}/>], 
    [4, <Habilidad imagen={reactLogo} titulo={"React Js"} texto={"Intermedio"}/>], 
    [5, <Habilidad imagen={angular} titulo={"Angular Js"} texto={"Basico"}/>], 
    [6, <Habilidad imagen={postgres} titulo={"Postgres"} texto={"Intermedio"}/>], 
    [7, <Habilidad imagen={mysql} titulo={"Mysql"} texto={"Intermedio"}/>], 
    [8, <Habilidad imagen={mariadb} titulo={"MariaDB"} texto={"Intermedio"}/>], 
    [9, <Habilidad imagen={rest} titulo={"RestApi"} texto={"Intermedio"}/>], 
    [10, <Habilidad imagen={flutter} titulo={"Flutter"} texto={"Basico"}/>], 
    [11, <Habilidad imagen={reactNavive} titulo={"React Native"} texto={"Basico"}/>], 
    [12, <Habilidad imagen={php} titulo={"PHP"} texto={"Intermedio"}/>], 
    [13, <Habilidad imagen={c} titulo={"C"} texto={"Intermedio"}/>], 
    [14, <Habilidad imagen={cplusplus} titulo={"C++"} texto={"Intermedio"}/>], 
    [15, <Habilidad imagen={java} titulo={"Java"} texto={"Intermedio"}/>], 
    [16, <Habilidad imagen={kotlin} titulo={"Kotlin"} texto={"Intermedio"}/>], 
    [17, <Habilidad imagen={js} titulo={"Java Script"} texto={"Intermedio"}/>], 
    [18, <Habilidad imagen={darrt} titulo={"Dart"} texto={"Intermedio"}/>], 
    [19, <Habilidad imagen={python} titulo={"Python"} texto={"Avanzado"}/>], 
    [20, <Habilidad imagen={aws} titulo={"AWS"} texto={"Certifación"}/>], 
    [21, <Habilidad imagen={linux} titulo={"Gnu/Linux"} texto={"Intermedio"}/>], 

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