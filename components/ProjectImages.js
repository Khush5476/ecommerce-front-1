import React, { useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Styling for the images and slider
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto; /* Maintain aspect ratio */
  cursor: pointer;
  height: 50px;
  
  @media screen and (min-width: 768px) {
    height: 75px;
  }
`;

const BigImage = styled.img`
  max-width: 100%;
  height: 200px; /* Adjust height as needed */
  object-fit: cover; /* Ensure the image covers the space */
  cursor: pointer; /* Indicate that the image is clickable */
  
  @media screen and (min-width: 768px) {
    height: 300px; /* Adjust height as needed */
  }
  
  @media screen and (min-width: 975px) {
    height: 400px; /* Adjust height as needed */
  }
`;

const BigImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden; /* Hide overflow when zoomed */
`;

const SliderWrapper = styled.div`
  .slick-slide {
    display: flex;
    align-items: center; /* Center images vertically */
    justify-content: center; /* Center images horizontally */
  }

  .slick-dots {
    bottom: -30px; /* Default position */
    
    @media screen and (max-width: 768px) {
      bottom: -50px; /* Move dots down 20px more on mobile */
      margin: 0; /* Remove default margin */
    }
  }

  .slick-dots li {
    margin: 0 5px; /* Default margin */
    
    @media screen and (max-width: 768px) {
      margin: 0 .1px; /* Reduce space between dots on mobile */
    }

    @media screen and (min-width: 768px) and (max-width: 975px) {
      margin: 0 2px; /* Reduce space between dots between 768px and 975px */
    }
  }

  .slick-dots li button {
    @media screen and (min-width: 768px) and (max-width: 975px) {
      width: 6px; /* Smaller size between 768px and 975px */
      height: 6px; /* Smaller size between 768px and 975px */
    }
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
    color: gray;
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

// Modal styling
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContent = styled.div`
  position: relative;
  display: inline-block; /* Adjust size based on content */
  max-width: 90%;
  max-height: 90%;
  padding: 20px; /* Equal padding around the image */
  box-sizing: border-box;
`;

const ModalImage = styled.img`
  height: 80vh; /* Fixed height for all modal images */
  width: auto; /* Maintain aspect ratio */
  max-width: 100%; /* Ensure image fits within the modal */
  object-fit: contain; /* Ensure image is contained within its box */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px; /* Distance from the top of the ModalContent */
  right: 10px; /* Distance from the right side of the ModalContent */
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1; /* Ensure it stays above the image */
`;

export default function ProductImages({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0] || ""); // Default to empty string if images are not available
  const [modalImage, setModalImage] = useState(null); // State for modal image
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

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <BigImageWrapper>
        <BigImage
          src={activeImage}
          alt="Main Image"
          onClick={() => openModal(activeImage)}
        />
      </BigImageWrapper>
      {hasMultipleImages && (
        <SliderWrapper>
          <Slider {...settings}>
            {images.map(image => (
              <div key={image}>
                <Image
                  src={image}
                  alt="Thumbnail"
                  onClick={() => setActiveImage(image)}
                />
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      )}
      <Modal isVisible={!!modalImage} onClick={closeModal}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>×</CloseButton>
          <ModalImage src={modalImage} alt="Enlarged" />
        </ModalContent>
      </Modal>
    </>
  );
}

