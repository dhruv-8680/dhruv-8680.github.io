import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 transform translate-x-[-100%]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-auto ${
                index === currentSlide ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-500`}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-300"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-300"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
