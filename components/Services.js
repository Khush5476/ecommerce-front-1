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
  font-weight: bold;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Center the items horizontally */
`;

const Item = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: calc(50% - 20px); /* Two items per row with spacing */
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  @media (max-width: 768px) {
  }
  

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    background-color: #e9f7fe; /* Light background on hover */
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
    
        
            <Img src="/lights.jpg" alt="Lights" />
            <H3>Spot Lights</H3>
         
         
            <Img src="/gutters.jpg" alt="Gutters" />
            <H3>Gutters</H3>
         
       
            <Img src="/skylight.jpg" alt="Skylight" />
            <H3>Skylight</H3>
      
        
            <Img src="/wiring.jpg" alt="Wiring" />
            <H3>Wiring</H3>
          </Item>
        </List>
      </Container>
    </Body>
  );
}
