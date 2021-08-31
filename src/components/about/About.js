import React from 'react';
import './About.css';
import foto from '../../media/fondo.jpg'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Algo Acerca de Mi</h3>
                <p>Yo soy Camilo Cerquera me gusta mucho la Programacion 💻 y aprender cada dia cosas nuevas, incursione en el desarrollo hace tiempo en un curso de sistemas y aprendiendo lo basico de Visual Basic, como todos haciendo mi primer Hola Mundo!, despues me aleje un poco de esto y en la universidad estudiando Electronica y Telecomunicaciones vi un par de materias sobre el tema, siempre me emocione mucho cuando los programas funcionaban pero nunca crei que ser Desarrollador iba a ser mi oficio hasta que me enfrente al mercado laboral y no encajaba en ningun lado, luego conoci Henry me vi retado y acepte el desafio, ahora aqui estoy aprendiendo cada dia mas y especializandome en algo que en realidad me motiva y mueve fibras dentro de mi.</p>
            </div>
            <div className='about-img'>
                <img src={foto} alt="about"/>
            </div>
        </div>
    )
}

export default About
