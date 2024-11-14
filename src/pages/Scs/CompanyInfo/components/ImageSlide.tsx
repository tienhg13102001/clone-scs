import { motion } from 'framer-motion';
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slide1 from "../../../../assets/images/slide1.jpg";

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
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: false }}
      className="relative my-10 w-full mx-auto max-[870px]:overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="w-full min-w-[1300px] max-[1450px]:min-w-[1200px] max-[1270px]:min-w-[1000px] max-[1050px]:min-w-[800px] max-[870px]:w-full">
        {items.map((item, index) => (
          <div key={index} className="max-w-full px-2 ">
            <div className="item">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="w-full h-auto max-h-[280px] object-cover"
                />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
