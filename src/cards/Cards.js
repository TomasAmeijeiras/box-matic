import React from "react";
import Card from "./Card";

import image1 from "../components/about/autoBoxMatic.jpeg";
import image2 from "../components/about/autoBoxMatic2.jpeg"
import image3 from "../components/about/autoBoxMatic3.jpeg"

const cards = [
  {
    id: 1,
    title: "Audi A6",
    image: image1,
    url: "https://www.instagram.com/box_matic/?hl=es",
    text: ""
  },
  {
    id: 2,
    title: "Volkswagen Amarok",
    image: image2,
    url: "https://www.instagram.com/box_matic/?hl=es",
    text: ""
  },
  {
    id: 3,
    title: "Audi A6",
    image: image3,
    url: "https://www.instagram.com/box_matic/?hl=es",
    text: ""
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100" id="Work">
      <div className="row">
        {cards.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;