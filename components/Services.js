import styled, { keyframes } from "styled-components";

// Define keyframes for the animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fallIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Body = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 20px; /* Default padding for larger screens */

  /* Remove or adjust top padding on mobile screens */
  @media screen and (max-width: 768px) {
    padding: 85px 20px 20px; /* Reduced padding for mobile screens */
  }
`;

const Heading = styled.h1`
  text-align: center;
  margin: 0 auto 40px; /* Remove margin-top to ensure fixed height */
  color: #333;
  font-size: 2.5em;
  border-bottom: 2px solid #007bff; /* Accent color underline */
  padding-bottom: 10px;
  font-weight: bold;
  width: 100%; /* Full width of the container */
  height: 80px; /* Fixed height */
  line-height: 80px; /* Center text vertically */
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); /* Adjust based on the minimum and maximum item width */
  gap: 20px; /* Gap between items */
  justify-items: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  animation: ${fadeIn} 1s ease-in; /* Apply fade-in animation */
`;

const Item = styled.div`
  background-color: #fff;
  width: 100%; /* Full width of its grid cell */
  max-width: 340px; /* Maximum width for the item */
  height: 260px; /* Fixed height to ensure consistency */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  display: flex; /* Use flexbox to center content */
  flex-direction: column; /* Stack content vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  opacity: 0; /* Initially hidden */
  animation: ${fallIn} 1s ease-out forwards; /* Apply falling animation */
  animation-delay: ${props => props.delay}; /* Stagger the start time of the animation */

  /* Ensure animation properties are applied after the animation ends */
  animation-fill-mode: forwards; 

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    background-color: #e9f7fe; /* Light background on hover */
  }
`;

const Img = styled.img`
  width: 100%; /* Ensure image fills the width of the item */
  height: 200px; /* Fixed height to ensure consistency */
  object-fit: cover; /* Ensures the image covers the container without distortion */
  display: block;
  border-radius: 8px; /* Rounded corners for images */
  margin-bottom: 15px;
`;

const H3 = styled.h3`
  margin: 10px 0;
  font-size: 1.2em;
  color: #333;
  font-weight: bold;
`;

// Sample data for items
const services = [
  { imgSrc: "/roofs.jpg", alt: "Makes Roofs", title: "Makes Roofs" },
  { imgSrc: "/lights.jpg", alt: "Lights", title: "Spot Lights" },
  { imgSrc: "/gutters.jpg", alt: "Gutters", title: "Gutters" },
  { imgSrc: "/skylight.jpg", alt: "Skylight", title: "Skylight" },
  { imgSrc: "/wiring.jpg", alt: "Wiring", title: "Wiring" },
];

export default function Services() {
  return (
    <Body>
      <Container>
        <Heading>Our Services</Heading>
        <List>
          {services.map((service, index) => (
            <Item key={index} delay={`${index * 0.2}s`}>
              <Img src={service.imgSrc} alt={service.alt} />
              <H3>{service.title}</H3>
            </Item>
          ))}
        </List>
      </Container>
    </Body>
  );
}

