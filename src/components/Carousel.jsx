import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item";
import { products } from "../constants";

export default function SimpleSlider() {
  console.log(products);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h1
        class="font-medium leading-tight text-5xl mt-0 mb-2 text-white"
        id="product"
      >
        Products
      </h1>
      <Slider {...settings}>
        {products.map((product) => {
          return <Item img={product.img} title={product.title} />;
        })}
      </Slider>
    </>
  );
}
