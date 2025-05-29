import { image } from 'framer-motion/client';
import React from 'react';
import { useState } from 'react';
import * as SlideDetails from "../styles/ImageSliderDesign";

const ImageSlider = ({imageList}) => {
  const BASE_URL = import.meta.env.VITE_BACK_API_IMG_URL;

  const [currentIndex, setCurrentIndex] = useState(0);

  if(!imageList || imageList.length  === 0 ) return null;
  
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? imageList.length  - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === imageList.length  - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentImageUrl = BASE_URL + imageList[currentIndex].image_Url;

  
  return (
    <SlideDetails.SliderContainer>
      <SlideDetails.Arrow direction="prev" onClick={goToPrevious}> ‹ </SlideDetails.Arrow>
        <SlideDetails.Slide  >
          <SlideDetails.SlideImage
            src={currentImageUrl}
            alt={`slide_${currentIndex}`}
          />
        </SlideDetails.Slide>
      <SlideDetails.Arrow direction="next" onClick={goToNext}> › </SlideDetails.Arrow>

    </SlideDetails.SliderContainer>
  );
};

export default ImageSlider;