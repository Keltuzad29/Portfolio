import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    id: 1,
    video:
      "https://player.vimeo.com/video/595038033?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=d2a14b22b4",
    linkYoutube:
      "https://www.youtube.com/watch?v=QTYWlhuJW0E&t=128s&ab_channel=camilocerquera",
    alt: "Proyecto 1",
    desc: "Proyecto AppDogs",
    title: "Proyecto Individual.mp4",
  },
  {
    id: 2,
    video:
      "https://player.vimeo.com/video/595037183?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=1cadb2e850",
    linkYoutube:
      "https://www.youtube.com/watch?v=dOg-mfJzQiY&t=25s&ab_channel=camilocerquera",
    alt: "Proyecto 2",
    desc: "Proyecto AppWeather",
    title: "Proyecto App Weather.mp4",
  },
  {
    id: 3,
    video:
      "https://player.vimeo.com/video/595042162?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=781e5b8e2c",
    linkYoutube:
      "https://keltuzad29.github.io/Proyect_Movies/",
    alt: "Proyecto 3",
    desc: "Proyecto AppMovies",
    title: "Video App Movies.mp4",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    {/* <img src={slide.src} alt={slide.alt}/> */}

    <iframe
      padding="0px"
      margin="0px"
      width="800px"
      height="400px"
      key={slide.id}
      src={slide.video}
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      title={slide.title}
      controls
    ></iframe>

    <div className="slide-desc">
      <a href={slide.linkYoutube} target="_blank" rel="noreferrer">
        <span>{slide.desc}</span>
      </a>
    </div>
  </div>
));

export default slides;
