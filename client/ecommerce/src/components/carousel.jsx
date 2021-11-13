import React from "react";

function Carousels() {
  const produtOfferImg = [
    {
      image: "./images/product-images-offer/prdimg-offer1.jpg",
      name: "blueberry",
      id: 1,
    },
    {
      image: "./images/product-images-offer/prdimg-offer2.jpg",
      name: "blueberry",
      id: 2,
    },
    {
      image: "./images/product-images-offer/prdimg-offer3.jpg",
      name: "Banana",
      id: 3,
    },
    {
      image: "./images/product-images-offer/prdimg-offer4.jpg",
      name: "Apple",
      id: 4,
    },
  ];

  const productContents = produtOfferImg.map((prd) => "fdf");

  return <li>sdad</li>;
}

export default Carousels;
