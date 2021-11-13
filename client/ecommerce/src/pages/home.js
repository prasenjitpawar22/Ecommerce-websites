import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { ReactComponent as Delivery } from "../svgs/delivery.svg";

function HomePage(props) {
  const { products, onAdd } = props;

  useEffect(() => {
    document.body.style.overflow = "visible";
  }, []);

  return (
    <div className="container mx-auto select-none">
      <div className="m-2 container mx-auto">
        <div className="mb-12 flex bg-green-600 mx-auto items-center  ">
          <Delivery className="xl:p-12 md:p-6 sm:p-2 xl:w-5/12 sm:w-3/5 md:w-3/5 h-full" />
          <p className="p-12 mx-auto xl:text-4xl md:text-2xl xl:leading-snug text-white text-center">
            Get your order delivered in <br />
            <mark className="bg-gray-800 text-white rounded-full px-4 my-">
              2 minitues
            </mark>
          </p>
        </div>
        <Swiper slidesPerView={4} spaceBetween={0}>
          <SwiperSlide>
            <img src="./images/Carousel/img-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/Carousel/img-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/Carousel/img-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/Carousel/img-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/Carousel/img-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/Carousel/img-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/Carousel/img-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/Carousel/img-3.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" container ">
        <Swiper
          spaceBetween={5}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              {/* <div class="md:w-1/3"> */}
              <div className="h-full border-2  border-opacity-60 rounded-lg overflow-hidden hover:border-green-500	">
                <img src={product.image} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Organic
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {product.name}
                  </h1>
                  <p className="leading-relaxed mb-3">${product.price}</p>
                  <div
                    className="w-max px-2 rounded-full cursor-pointer mx-0 bg-transparent border-4 hover:bg-blue-300 text-black"
                    onClick={() => onAdd(product)}
                  >
                    Add to cart
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomePage;
