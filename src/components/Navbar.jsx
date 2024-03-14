
import "../assets/css/Navbar.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import  LogoBrian from '../assets/logo/logo-brian.png';
import { SiGmail } from "react-icons/si";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <ul className="contenedor-redes-sociales">
        <a  href="https://www.facebook.com/brian.gomez.18400700" target="_blank">
          <li>
            <FaFacebook className="icono-red-social"/>
          </li>
        </a>
        <a  href="https://www.instagram.com/briangomezzzzzz/" target="_blank">
          <li>
            <FaInstagramSquare className="icono-red-social"/>
          </li>
        </a>
        <a  href="https://www.linkedin.com/in/brian-joseph-gomez-velasco-3b132a253/" target="_blank">
          <li>
            <FaLinkedin className="icono-red-social" />
          </li>
          </a>
          <a  href="https://github.com/bgomezv123" target="_blank">

          <li>
            <FaGithub className="icono-red-social"/>
          </li>

          </a>
          <a  href="https://wa.me/51945388033" target="_blank">

          <li>
            <IoLogoWhatsapp className="icono-red-social"/>
          </li>
          </a>
          <a  href="mailto:bgomezv@unsa.edu.pe" target="_blank">

          <li>
            <SiGmail className="icono-red-social"/>
          </li>
          </a>
      </ul>


      <Link to='/' className="title"><img src= {LogoBrian} className="logo-brian"/></Link>
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <TiThMenu className="navbar-menu-icon"></TiThMenu>
      </div>

      

		  <ul className={menuOpen ? "open" : ""}>					
				<li>
						<NavLink className="link-navbar" to='/about'>Acerca de mi</NavLink>
				</li>
				<li>
						<NavLink  className="link-navbar" to='/services'>Contactame</NavLink>
				</li>
      </ul>
    </nav>
  );
};