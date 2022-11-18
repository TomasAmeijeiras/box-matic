import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>BoxMatic</h1>
        <p>15 años de experiencia nos avalan</p>
      </div>
      <div className="footer-contact">
        <a href="tel:+01140800480" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp whatsapp"> 11-4080-0480</i>
        </a>
        <p></p>
      </div>
      <div className="footer-sns">
        <div className="design-by">
          <h1>Agustín Ameijeiras</h1>
          <p>Mecánico  Principal</p>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer