import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <h1>Camilo Andrés Cerquera</h1>
                <p></p>
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
                    <a href="https://linkedin.com" target="_blank">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                </div>
                    <a href="https://twitter.com" target="_blank">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                    <a href="https://github.com" target="_blank">
                        <i className="fab fa-github github"></i>
                    </a>
            </div>
        </footer>
    )
}

export default Footer
