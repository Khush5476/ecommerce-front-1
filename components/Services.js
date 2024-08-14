import styled from "styled-components";

const Body = styled.div `
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    `
  
const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  `
const List = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
const Item = styled.div `
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: calc(33% - 20px);
    text-align: center;
    padding: 10px;
  `
const Img = styled.img `
    width: 100%;
    height: auto;
    display: block;
    border-bottom: 1px solid #ddd;
  `
const H3 = styled.div `
    margin: 10px 0;
  `

export default function Services(){
    return (
<>
   <Body>
      <Container>
        <h1>Our Services</h1>
        <List>
          <Item>
            <Img src="/roofs.jpg" alt="Makes Roofs"/>
            <H3>Makes Roofs</H3>
        </Item>
        <Item>
            <Img src="/lights.jpg" alt="Lights"/>
            <H3>Spot Lights</H3>
            </Item>
            <Item>
            <Img src="/gutters.jpg" alt="Gutters"/>
            <H3>Gutters</H3>
            </Item>
            <Item>
            <Img src="/skylight.jpg" alt="/Skylight"/>
            <H3>Skylight</H3>
            </Item>
            <Item>
            <Img src="/wiring.jpg" alt="Wiring"/>
            <H3>Wiring</H3>
            </Item> 
        </List>
        </Container>
    </Body>
</>
);
}