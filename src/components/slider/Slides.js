import React from "react";
import "./Slider.css"
import image from "../about/autoBoxMatic.jpeg"
import image2 from "../about/autoBoxMatic2.jpeg"
import image3 from "../about/autoBoxMatic3.jpeg"



const slidesInfo = [
  {
    src:"https://cdn.pixabay.com/photo/2022/08/15/03/07/path-7387018_960_720.jpg",
    alt: "Reseña 1",
    desc: "Reseña 1"
  },
  {
    src: "https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_960_720.jpg",
    alt: "Reseña 2",
    desc: "Reseña 2"
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/18/15/58/vw-1835506_960_720.jpg",
    alt: "Reseña 3",
    desc: "Reseña 3"
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_960_720.jpg",
    alt: "Reseña 1",
    desc: "Reseña 1"
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_960_720.jpg",
    alt: "Reseña 1",
    desc: "Reseña 1"
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href="https://www.instagram.com/box_matic/?hl=es" target="_blank"><img src={slide.src} alt={slide.alt} /></a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;