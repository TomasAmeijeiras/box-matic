import React from 'react'
import "../about/About.css"
import logoBoxMatic from "../about/logoBoxMatic.jpeg"

const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
          <h3>Sobre Nosotros</h3>
          <p>Somos un taller mecánico especializado en cajas automáticas, con más de 15 años de trayectoria. Ofrecemos asesoramiento personalizado y servicio postventa</p>
        </div>
        <div className="about-img">
          <img src={logoBoxMatic} alt="Logo BoxMatic" />
        </div>
    </div>
  )
}

export default About