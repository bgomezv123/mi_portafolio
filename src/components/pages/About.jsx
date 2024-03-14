import '../../assets/css/pages/About.css'
import { useEffect, useState } from 'react'
import Presentacion from '../elements/Presentacion'
import imagen1 from '../../assets/logo/1708123090905.jpeg'


export const About = () => {


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <>
<div className={`fondo-pista ${scrolled ? "scrolled" : ""}`}>
        <div className='contenedor-de-brianxd'>
            <div className="wrapper">
            <div className="human">
                <div className="human__head">
                <div className="human__face"><span></span>
                    <div className="human__hair">
                    <div></div>
                    <div></div>
                    </div>
                    <div className="human__hood"></div>
                </div>
                <div className="human__body">
                    <div>
                    <div></div>
                    </div>
                    <div className="human__reg human__reg--left">
                    <div>
                        <div>
                        <div></div>
                        </div>
                    </div>
                    </div>
                    <div className="human__reg human__reg--right">
                    <div>
                        <div>
                        <div></div>
                        </div>
                    </div>
                    </div>
                    <div className="human__arm human__arm--left">
                    <div>
                        <div>
                        <div></div>
                        </div>
                    </div>
                    </div>
                    <div className="human__arm human__arm--right">
                    <div>
                        <div>
                        <div></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="board">
                <div className="board__body board__body--back">
                <div className="board__side board__side--left"></div>
                <div className="board__center"></div>
                <div className="board__side board__side--right"></div>
                </div>
                <div className="board__body board__body--front">
                <div className="board__side board__side--left"></div>
                <div className="board__center"></div>
                <div className="board__side board__side--right"></div>
                </div>
                <div className="board__tires">
                <div className="board__tire"><span></span></div>
                <div className="board__tire"><span></span></div>
                <div className="board__tire"><span></span></div>
                <div className="board__tire"><span></span></div>
                </div>
            </div>
            <div className="shadow"></div>
            <div className="wind">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>

        </div>
        </div>

            <div className='contenedor-contenedor-presentacion'>
					<Presentacion
						nombres={"BRIAN"}
						apellidos={"GOMEZ"}
						desarrollador={"Full-Stack"}
						texto={"Soy desarrollador Full-Stack egresado de la Escuela Profesional de Ingeniería de Sistemas en la Universidad Nacional de San Agustín de Arequipa. Cuento con un sólido interés en la tecnologías emergentes y el desarrollo Web. Apasionado por resolver desafíos tanto técnicos como intelectuales y aprender de manera continua. Comprometido con el crecimiento profesional y la contribución a proyectos innovadores en el campo de la informática."}
						imagen={imagen1}
					>
					</Presentacion>
				</div>
        </>
        
    );

}