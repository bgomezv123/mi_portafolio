
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
        <li>
          <FaFacebook className="icono-red-social"/>
        </li>
        <li>
          <FaInstagramSquare className="icono-red-social"/>
        </li>
        <li>
          <FaLinkedin className="icono-red-social" />
        </li>
        <li>
          <FaGithub className="icono-red-social"/>
        </li>
        <li>
          <IoLogoWhatsapp className="icono-red-social"/>
        </li>
        <li>
          <SiGmail className="icono-red-social"/>
        </li>
      </ul>


      <Link to='/' className="title"><img src= {LogoBrian} className="logo-brian"/></Link>
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <TiThMenu className="navbar-menu-icon"></TiThMenu>
      </div>

      

		  <ul className={menuOpen ? "open" : ""}>					
				<li>
						<NavLink className="link-navbar" to='/about'>About</NavLink>
				</li>
				<li>
						<NavLink  className="link-navbar" to='/services'>Services</NavLink>
				</li>
      </ul>
    </nav>
  );
};