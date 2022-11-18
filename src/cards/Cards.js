import React from "react";
import Card from "./Card";

import image1 from "../components/about/autoBoxMatic.jpeg";
import image2 from "../components/about/autoBoxMatic2.jpeg"
import image3 from "../components/about/autoBoxMatic3.jpeg"

const cards = [
  {
    id: 1,
    title: "Audi",
    image: image1,
    url: "",
  },
  {
    id: 2,
    title: "BMW",
    image: image2,
    url: "",
  },
  {
    id: 3,
    title: "Audi",
    image: image3,
    url: "",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;