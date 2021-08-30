import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className= 'footer-info'>
                <h1>Camilo Andrés Cerquera</h1>
                <p>Bogota-Colombia</p>
            </div>
            <div className="footer-contact">
                <h3>Contactame</h3>
                <p>Y comencemos, manos a la obra!</p>
            </div>
            <div className='footer-sns'>
                <div className='desing-by'>
                    Diseñado por Camilo Andres Cerquera
                </div>
                <div className='sns-links'>
                    <a href="https://www.linkedin.com/in/camilo-cerquera/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/Keltuzad29" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                
                    <a href="https://twitter.com/CamiloACerquera?s=09" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/C.Cerquera" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>

                    <a href="https://wa.link/7qt2y1" target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp whatsapp"></i>
                    </a> 
                    <a  href="mailto:c.cerquera.123@gmail.com" target="_blank" rel="noreferrer">
                        <i className="fas fa-envelope envelope"></i>
                    </a>                  
                    </div>
            </div>
        </footer>
    )
}

export default Footer
