import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/elements/Carrusel.css"
import Proyecto  from "./Proyecto";
import imagen1 from './1.png'
import imagen2 from './2.webp'
import imagen3 from './3.jpg'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "inner-div"
  };
  return (
		<div className="contenedor-carrusel-proyectos">
			<Slider {...settings}>
				<div className="contenedor-carrusel-proyecto">
          <Proyecto
            titulo={"aaaaaaaaaaaaaaaaaa"}
            imagen={imagen1}
            texto={"Si tienes palabras largas que están causando desbordamiento dentro de tu contenedor, puedes utilizar la propiedad word-wrap: break-word; o su equivalente moderno overflow-wrap: break-word; en CSS. Esto permitirá que las palabras largas se dividan en múltiples líneas para ajustarse al ancho del contenedor. Aquí te muestro cómo implementarlo:"}>
            </Proyecto>
				</div>
        <div className="contenedor-carrusel-proyecto">				
        <Proyecto
					titulo={"bbbbbbbbbbbbbbbbbb"}
          imagen={imagen2}
					texto={"Si tienes palabras largas que están causando desbordamiento dentro de tu contenedor, puedes utilizar la propiedad word-wrap: break-word; o su equivalente moderno overflow-wrap: break-word; en CSS. Esto permitirá que las palabras largas se dividan en múltiples líneas para ajustarse al ancho del contenedor. Aquí te muestro cómo implementarlo:"}>
					</Proyecto>
				</div>
        <div className="contenedor-carrusel-proyecto">				
        <Proyecto
					titulo={"cccccccccccccccccc"}
          imagen={imagen3}
					texto={"Si tienes palabras largas que están causando desbordamiento dentro de tu contenedor, puedes utilizar la propiedad word-wrap: break-word; o su equivalente moderno overflow-wrap: break-word; en CSS. Esto permitirá que las palabras largas se dividan en múltiples líneas para ajustarse al ancho del contenedor. Aquí te muestro cómo implementarlo:"}>
					</Proyecto>
				</div>

        <div className="contenedor-carrusel-proyecto">				
        <Proyecto
					titulo={"ddddddddddddddddddd"}
          imagen={imagen1}
					texto={"Si tienes palabras largas que están causando desbordamiento dentro de tu contenedor, puedes utilizar la propiedad word-wrap: break-word; o su equivalente moderno overflow-wrap: break-word; en CSS. Esto permitirá que las palabras largas se dividan en múltiples líneas para ajustarse al ancho del contenedor. Aquí te muestro cómo implementarlo:"}>
					</Proyecto>
				</div>
			</Slider>
		</div>
	);

}