import styled from "styled-components";

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
  padding: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  font-size: 2.5em;
  border-bottom: 2px solid #007bff; /* Accent color underline */
  padding-bottom: 10px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Item = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: calc(25% - 20px); /* Adjusted to fit four items per row */
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    background-color: #e9f7fe; /* Light background on hover */
  }

  @media (max-width: 1200px) {
    width: calc(33.33% - 20px); /* Three items per row */
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px); /* Two items per row */
  }

  @media (max-width: 480px) {
    width: 100%; /* One item per row */
  }
`;

const Img = styled.img`
  width: 100%;
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
