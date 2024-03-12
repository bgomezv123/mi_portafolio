import '../../assets/css/pages/Home.css'
import { Link, BrowserRouter } from 'react-router-dom'
import imagen1 from '../../assets/logo/1708123090905.jpeg'
import imagen2 from './2.webp'
import imagen3 from './3.jpg'
import Presentacion from '../elements/Presentacion'
import SimpleSlider from '../elements/Carrusel'

export const Home = () => {
    return <div className='contenedor-page'>
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

				<SimpleSlider></SimpleSlider>

    </div>
}