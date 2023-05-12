import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { sliderData } from "../../fakedata";
import "slick-carousel/slick/slick.css";
import "./styles.css"

function SliderItem() {
   const settings = {
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
   };
  return (
    <section style={{marginTop :80, height :"100vh"}} name = "home">
      <Slider {...settings} style = {{padding : 20}} className = "slider">
        {sliderData.map((item) => (
          <div key={item.id} className = "item">
            <div className="slider__wrapper">
              <div className="slider__content">
                <h2  className="text-bold font-main text-4xl font-Pacifico">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
              <div className="slider__img ">
                <img src={item.imgUrl} alt="" className="w-100 image" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SliderItem;
