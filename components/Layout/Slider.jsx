"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function BannerSlider({ children }) {
  const settings = {
    dots: true, // Show dots
    infinite: true, // Infinite loop
    speed: 600, // Transition speed
    slidesToShow: 1, // Show one slide
    slidesToScroll: 1, // Scroll one slide
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Change slide every 3s
    arrows: true, // Show next/prev arrows
    pauseOnHover: true, // Pause on mouse hover
    // Custom dots
    appendDots: (dots) => (
      <div
        style={{
          bottom: "30px", // position dots lower
        }}
      >
        <ul className="  flex justify-center gap-1">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        title="Paging"
        className="w-3 h-3 bg-gray-400 rounded-full hover:bg-blue-600 transition"
      ></button>
    ),
  };

  return (
    <Slider className="" {...settings}>
      {children}
    </Slider>
  );
}
