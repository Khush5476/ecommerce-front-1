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
  padding: 60px 20px 20px; /* Added top padding */
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

  animation: ${scaleIn} 0.5s ease-out; /* Apply scale-in animation */

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

export default function Services() {
  return (
    <Body>
      <Container>
        <Heading>Our Services</Heading>
        <List>
          <Item>
            <Img src="/roofs.jpg" alt="Makes Roofs" />
            <H3>Makes Roofs</H3>
          </Item>
          <Item>
            <Img src="/lights.jpg" alt="Lights" />
            <H3>Spot Lights</H3>
          </Item>
          <Item>
            <Img src="/gutters.jpg" alt="Gutters" />
            <H3>Gutters</H3>
          </Item>
          <Item>
            <Img src="/skylight.jpg" alt="Skylight" />
            <H3>Skylight</H3>
          </Item>
          <Item>
            <Img src="/wiring.jpg" alt="Wiring" />
            <H3>Wiring</H3>
          </Item>
        </List>
      </Container>
    </Body>
  );
}
