import React, { useState } from 'react';

const Carousel: React.FC = () => {
  const images: string[] = ['/image1.jpg', '/image2.jpg', '/image3.jpg']; // Add your images here
  const [current, setCurrent] = useState<number>(0);

  function nextSlide(): void {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide(): void {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className="flex items-center justify-center">
      <button onClick={prevSlide} className="p-4">Prev</button>
      <img src={images[current]} alt="carousel" className="w-1/2 h-auto" />
      <button onClick={nextSlide} className="p-4">Next</button>
    </div>
  );
}

export default Carousel;
