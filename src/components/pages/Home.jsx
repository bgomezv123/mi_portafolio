import '../../assets/css/pages/Home.css'
import { Link, BrowserRouter } from 'react-router-dom'
import imagen1 from '../../assets/logo/1708123090905.jpeg'
import imagen2 from './2.webp'
import imagen3 from './3.jpg'
import Presentacion from '../elements/Presentacion'
import SimpleSlider from '../elements/Carrusel'
import Grid from '../elements/CuadroHabilidades'
import { useEffect, useState } from 'react'
import { IoTriangle } from "react-icons/io5";

export const Home = () => {

	const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) { 
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };



    return <div className='contenedor-page'>

			<div className='contenedor-welcome-barra-navegacion'>
				<div className='contenedor-welcome-portafolio-titulo'>
       		<h1 className='welcome-portafolio-titulo'>{">"}WELCOME!</h1>
				</div>
        <nav className='barra-navegacion-home'>
          <ul>
            <li><a href="#seccion1">Sobre mí</a></li>
            <li><a href="#seccion2">Proyectos</a></li>
            <li><a href="#seccion3">Skills</a></li>
          </ul>
        </nav>
      </div>

      <main>
        <section id="seccion1">
				<div className='contenedor-contenedor-presentacion'>
					<Presentacion
						nombres={"BRIAN"}
						apellidos={"GOMEZ"}
						desarrollador={"Full-Stack"}
						texto={"Soy egresado de la Escuela Profesional de Ingeniería de Sistemas en la Universidad Nacional de San Agustín - Arequipa (UNSA). Cuento con un sólido interés en la tecnología y el desarrollo de software. Apasionado por resolver desafíos tanto técnicos como intelectuales y aprender de manera continua. Comprometido con el crecimiento profesional y la contribución a proyectos innovadores en el campo de la informática."}
						imagen={imagen1}
					>
					</Presentacion>
				</div>
        </section>
        <section id="seccion2">
					<h2 className='subtitulo-seccion-home'><span>Proyectos</span></h2>
					<div className='contenedor-contenedor-carrusel'>
						<SimpleSlider></SimpleSlider>
					</div>
        </section>
        <section id="seccion3">
					<h2 className='subtitulo-seccion-home'>Skills</h2>
					<div className='contenedor-contenedor-grid'>
						<Grid></Grid>
					</div>
        </section>
      </main>

      {showButton && (
        <button className="scrollToTopButton" onClick={scrollToTop}><IoTriangle /></button>
      )}




    </div>
}