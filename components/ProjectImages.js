import React, { useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto; /* Maintain aspect ratio */
  cursor: pointer;
  height: 50px;
  @media  screen and (min-width: 768px){
  height: 75px;

`;

const BigImage = styled.img`
  max-width: 100%;
  height: 300px; /* Adjust height as needed */
  object-fit: cover; /* Ensure the image covers the space */
  @media  screen and (min-width: 768px){
  height: 400px; /* Adjust height as needed */
}
    @media screen and (min-width: 900px) {
    height: 330px;
`;

const BigImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const SliderWrapper = styled.div`
  .slick-slide {
    display: flex;
    align-items: center; /* Center images vertically */
    justify-content: center; /* Center images horizontally */
  }

  .slick-dots {
    bottom: -30px; /* Adjust position if needed */
  }

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    z-index: 1;
  }

  .slick-prev {
    left: 10px;
    background: black;
    color: white;
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    &:before {
      color: white;
      font-size: 18px;
      content: '←'; /* Arrow icon */
    }
  }

  .slick-next {
    right: 15px;
    background: black;
    color: white;
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    &:before {
      color: white;
      font-size: 18px;
      content: '→'; /* Arrow icon */
    }
  }

  .slick-prev:hover,
  .slick-next:hover {
    background: #333;
  }
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const hasMultipleImages = images.length > 1;

  const settings = {
    dots: hasMultipleImages, // Only show dots if there are multiple images
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(images.length, 3), // Show as many slides as available, max 3
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0', // Ensure no extra padding around centered image
    afterChange: index => setActiveImage(images[index]),
  };

  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} alt="Main Image" />
      </BigImageWrapper>
      {hasMultipleImages && (
        <SliderWrapper>
          <Slider {...settings}>
            {images.map(image => (
              <div key={image}>
                <Image src={image} alt="Thumbnail" onClick={() => setActiveImage(image)} />
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      )}
    </>
  );
}



