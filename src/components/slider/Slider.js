import React from "react";
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import Slides from "./Slides";
import "./Slider.css";
import { Carousel } from "3d-react-carousal";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis Proyectos</h2>
      </div>
      <Carousel  slides={Slides} />
    </div>

    // <div className="carousel-container">
    //     <div className="carousel-title">
    //         <h2>Mis Proyectos</h2>
    //     </div>
    //     <Carousel plugins={['arrows', 'infinite','centered']}

    //         slidesPerPages={3}
    //         animationSpeed={500}
    //         offset={8}
    //         space
    //         itemWidth={1000}
    //         slides={Slides}
    //         breakpoints={{
    //             960: {
    //                 arrows: false,
    //                 slidesPerPages: 1,
    //                 itemWidth: 250,
    //             },
    //         }}
    //     />

    // </div>
  );
};

export default Slider;
