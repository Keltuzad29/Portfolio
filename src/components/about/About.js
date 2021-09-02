import React from "react";
import "./About.css";
import foto from "../../media/fondo.jpg";
import cv from "../../media/cv.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Algo Acerca de Mi</h3>
        <p>
          Yo soy Camilo Cerquera me gusta mucho la Programacion💻y aprender cada
          dia cosas nuevas,😎incursione en el desarrollo hace tiempo en un curso
          de sistemas y aprendiendo lo basico de Visual Basic, como todos
          haciendo mi primer Hola Mundo!👨‍💻, despues me aleje un poco de esto y
          en la universidad estudiando Electronica y Telecomunicaciones📡vi un
          par de materias sobre el tema, siempre me emocione mucho cuando los
          programas funcionaban🤩pero nunca crei que ser Desarrollador iba a ser
          mi oficio hasta que me enfrente al mercado laboral y no encajaba en
          ningun lado,😰 luego conoci Henry me vi retado y acepte el desafio, ya
          he aprendido bastantes cosas y continuo capacitandome📖y
          especializandome cada dia mas en algo que en realidad me motiva y
          mueve fibras dentro de mi.😁
        </p>
        <h3>Skills</h3>
        <div className="about-skills">
          <img
            width="50px"
            height="50px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"
            alt="skill"
          />
          <img
            width="45px"
            height="45px"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            alt="skill"
          />
          <img
            width="40px"
            height="40px"
            src="https://seeklogo.com/images/O/ottawa-js-logo-394DB38073-seeklogo.com.png"
            alt="skill"
          />
          <img
            width="12%"
            height="40px"
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
            alt="skill"
          />
          <img
            width="14%"
            height="42px"
            src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"
            alt="skill"
          />
          <img
            width="10%"
            height="50px"
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            alt="skill"
          />
          <img
            width="50px"
            height="50px"
            src="http://pngimg.com/uploads/php/php_PNG10.png"
            alt="skill"
          />
          <br />

          <img
            width="12%"
            height="40px"
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
            alt="skill"
          />
          <img
            width="10%"
            height="45"
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
            alt="skill"
          />
          <img
            width="10%"
            height="40px"
            src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"
            alt="skill"
          />
          <img
            width="12%"
            height="30px"
            src="https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/express-routing-logo.png"
            alt="skill"
          />
          <img
            width="12%"
            height="40px"
            src="https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg"
            alt="skill"
          />
          <img
            width="14%"
            height="45px"
            src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-ar21.svg"
            alt="skill"
          />
          <br />
        </div>
      </div>
      <div className="about-img">
        <img src={foto} alt="about" />
        <a
          href="https://drive.google.com/file/d/12X3j2sSYxe12TLHMKaCHzEWgi6cfaVQM/view"
          target="_blank"
          rel="noreferrer"
        >
          <img className="about-img-cv" src={cv} alt="CV" />
        </a>
      </div>
    </div>
  );
};

export default About;
