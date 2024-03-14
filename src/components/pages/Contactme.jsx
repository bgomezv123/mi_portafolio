import Habilidad from '../elements/Habilidad'
import Grid from '../elements/CuadroHabilidades'
import '../../assets/css/pages/Contactme.css'
import cv from '/contactme/cv.png'
import github from '/contactme/github.png'
import gmail from '/contactme/gmail.webp'
import linkedin from '/contactme/linkendin.png'
import whatsapp from '/contactme/whatsapp.png'

export const Services = () => {
    return <>

        <div className='contenedor-contactme-page'>
            <div className='contenedor-habilidades'>
            <a  href="/contactme/cv.pdf" target="_blank">

            <Habilidad imagen={cv} titulo={"CV"} texto={""}/>
            </a>

            <a  href="https://github.com/bgomezv123" target="_blank">

            <Habilidad imagen={github} titulo={"WhatsApp"} texto={""}/>
            </a>

            <a  href="mailto:bgomezv@unsa.edu.pe" target="_blank">

            <Habilidad imagen={gmail} titulo={"Github"} texto={""}/>
            </a>

            <a  href="https://www.linkedin.com/in/brian-joseph-gomez-velasco-3b132a253/" target="_blank">

            <Habilidad imagen={linkedin} titulo={"Linkendind"} texto={""}/>
            </a>

            <a  href="https://wa.me/51945388033" target="_blank">

            <Habilidad imagen={whatsapp} titulo={"Linkendind"} texto={""}/>
            </a>

            </div>

        </div>


    </>

}