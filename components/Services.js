import styled from "styled-components";

const Body = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Item = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(25% - 20px); /* Adjusted to fit four items per row */
  text-align: center;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px; /* Fixed height to ensure consistency */
  object-fit: cover; /* Ensures the image covers the container without distortion */
  display: block;
  border-bottom: 1px solid #ddd;
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
        <h1>Our Services</h1>
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
