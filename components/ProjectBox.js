import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    animation: ${hoverAnimation} 0.3s ease;
  }
`;

const WhiteBox = styled(Link)`

height:200px;
width: 350px;
  @media  screen and (min-width: 768px){
  height: 250px;
  width: 400px;
  margin-left: -20px;
}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  // overflow: hidden; /* Ensure image fits within the box */

  img {
      height: 200px;
    width: 350px;
    @media  screen and (min-width: 768px){
    height: 250px;
    width: 400px;
}
    border-radius: 10px;
    object-fit: cover; /* Ensure image covers the box without distortion */

  }
`;

const Title1 = styled(Link)`
  font-weight: normal;
  font-size: 1.5rem;
  margin: 10px 0;
  color: inherit;
  text-decoration: none;
  text-align: center; /* Center the title text */
`;

const ProjectInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align content */
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center align price row */
  margin-top: 5px;
`;

const Price1 = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export default function ProjectBox({ _id, Title, Description, Price, Images }) {
  const { addProject } = useContext(CartContext);
  const url = `/project/${_id}`;

  return (
    <ProjectWrapper>
      <WhiteBox href={url}>
        <img src={Images?.[0]} alt={Title} />
      </WhiteBox>
      <ProjectInfoBox>
        <Title1 href={url}>{Title}</Title1>
        <PriceRow>
    
          {/* Uncomment the button if needed */}
          {/* <Button onClick={() => addProject(_id)} primary outline> Add to Cart </Button> */}
        </PriceRow>
      </ProjectInfoBox>
    </ProjectWrapper>
  );
}
