import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2>BoxMatic</h2>
        <p>"Innovación en Movimiento"</p>
        <ul>
          <li>Cajas Automáticas</li>
          <li>Reductoras 4X4</li>
          <li>Cajas Manuales</li>
          <li>Mecánica Integral</li>
          <li>Diagnóstico</li>
          <li>Reprogramación</li>
          <li>Service</li>
        </ul>
      </div>
      <div className="footer-sns">
        <div className="design-by">
          <h1>Agustín Ameijeiras</h1>
            <p className='mecanic'>Jefe de Mecánicos</p>
            <a className='number' href="tel:+01140800480" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp whatsapp"> 11-4080-0480</i>
            </a>
        </div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/company/boxmatic/?viewAsMember=true" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://www.instagram.com/box_matic/?hl=es" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a href="https://www.facebook.com/people/Box-Matic/100063714422285/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
          <a href="https://goo.gl/maps/vjZtdUs3SWdpBf9E8" target="_blank" rel="noreferrer">
            <i class="fa-solid fa-map-location-dot"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer