import React, { useRef } from "react";
import Slider from "react-slick";
import Slide1 from "../../../assets/images/slide1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlide() {
  const sliderRef = useRef(null);

  const items = [
    {
      href: "http://www.kdpress.co.kr/news/articleView.html?idxno=128644",
      imgSrc: Slide1,
      alt: "Image 1",
    },
    {
      href: "http://www.kdpress.co.kr/news/articleView.html?idxno=127340",
      imgSrc: Slide1,
      alt: "Image 2",
    },
    {
      href: "http://www.kdpress.co.kr/news/articleView.html?idxno=127340",
      imgSrc: Slide1,
      alt: "Image 3",
    },
    {
      href: "http://www.kdpress.co.kr/news/articleView.html?idxno=127340",
      imgSrc: Slide1,
      alt: "Image 4",
    },
    {
      href: "http://www.kdpress.co.kr/news/articleView.html?idxno=127340",
      imgSrc: Slide1,
      alt: "Image 5",
    },
    {
      href: "http://www.kdpress.co.kr/news/articleView.html?idxno=127340",
      imgSrc: Slide1,
      alt: "Image 6",
    },
  ];

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative my-10 w-full  overflow-hidden">
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-[1300px] max-[1400px]:w-[1200px] max-[1250px]:w-[800px]"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="owl-item max-w-[427.667px] max-[900px]:w-full px-2"
          >
            <div className="item">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="w-full h-[280px] object-cover"
                />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
