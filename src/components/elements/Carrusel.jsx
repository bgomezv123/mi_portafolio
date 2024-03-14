import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/elements/Carrusel.css"
import Proyecto  from "./Proyecto";
import portillo1 from '/proyectos/portillo1.png'
import portillo2 from '/proyectos/portillo2.png'
import ra1 from '/proyectos/ra1.png'
import ra2 from '/proyectos/ra2.png'
import edge1 from '/proyectos/edge1.png'
import edge2 from '/proyectos/edge2.png'
import portafolio1 from '/proyectos/portafolio1.png'
import portafolio2 from '/proyectos/portafolio2.png'

export default function SimpleSlider() {

  let statSlidesNum = 3

  if (window.innerWidth <= 768){
    statSlidesNum = 1
  }

  const [slidesToShow, setSlidesToShow] = useState(statSlidesNum);

  useEffect(() => {
    const handleResize = () => {
      // Cambia el número de diapositivas a mostrar según el ancho de la pantalla
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // Muestra solo una diapositiva en dispositivos móviles
      } else {
        setSlidesToShow(3); // Muestra tres diapositivas en otros tamaños de pantalla
      }
    };

    // Agrega el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    className: "inner-div"
  };
  return (
		<div className="contenedor-carrusel-proyectos">
			<Slider {...settings}>
      <div className="contenedor-carrusel-proyecto">				
          <Proyecto
					  titulo={"Mi Portafolio - Brian Gomez Velasco"}
            imagen1={portafolio1}
            imagen2={portafolio2}
					  texto={"Pagina Web desarrollada con React Js, es mi portafolio personal que cuenta con mis proyectos personales, mis principales habilidades, informacion academica y mis redes sociales"}
            tecnologia={"Web"}
            linkGithub={"https://github.com/bgomezv123/mi_portafolio"}
            >
              


					</Proyecto>
				</div>

				<div className="contenedor-carrusel-proyecto">
            <Proyecto
            titulo={"CRM Inmobiliaria Portillo S.A.C"}
            imagen1={portillo1}
            imagen2={portillo2}

            texto={"Sistema desarrollado con REACT y DJANGO, es un CRM para la gestión de clientes de la empresa Portillo Construcciones S.A.C. Comprende 7 modulos tales como: Gestión de Roles, Gestión de Usuarios, Gestión de Campañas, Gestión de Proyectos, Gestión de Productos y Gestión de Clientes"}
            tecnologia={"Web"}
            linkGithub={"https://github.com/portilloERP/ERP_PORTILLO"}

            >
     
            </Proyecto>
				</div>
        <div className="contenedor-carrusel-proyecto">				
          <Proyecto
					  titulo={"StyleApp - Realidad Aumentada"}
            imagen1={ra1}
            imagen2={ra2}
					  texto={"Aplicacion movil android, desarrollada con Kotlin y con el SDK Arcore, para hacer uso de la tecnologia de realidad aumentada sin la necesidad de tener un dispositvo movil potente, los modelos 3D fueron desarrollados con Blender"}
            tecnologia={"Movil"}
            linkGithub={"https://github.com/bgomezv123/ARCORE_FILTROS_V1"}

            >


					</Proyecto>
				</div>
        <div className="contenedor-carrusel-proyecto">				
          <Proyecto
					  titulo={"Sistema de domótica - Cámara de seguridad y control de luces"}
            imagen1={edge1}
            imagen2={edge2}
				    texto={"Sistema de domótica utilizando una arquitectura de EDGE computing, este sistema cuenta con una aplicacion movil para la gestion remota de luces y camara de seguridad, un rasperry(GNU/LINUX) para centralizar los dipositivos IoT (ESP8266 y ESP32CAM) y finalmente varios servicios cloud computing de AWS"}
            tecnologia={"Iot"}
            linkGithub={"https://github.com/bgomezv123/PE_EdgeComputing"}

            >
					</Proyecto>
				</div>



			</Slider>
		</div>
	);

}