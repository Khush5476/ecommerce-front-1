import Link from "next/link"
import styled, {keyframes} from "styled-components";
import { ButtonStyle } from "./Button";
import { primary } from "./lib/colors";

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    color:white;

  }
  50% {
    transform: scale(1.1);

    
  }
  100% {
    transform: scale(1.05);
    color:white;

  }
`;

const StyledLink = styled(Link)`
${ButtonStyle}
        background-color: transparent;
        color: #fff;
        border: 1.25px solid #fff;
          &:hover {
          
    animation: ${hoverAnimation} 0.3s ease;
    
    box-shadow: 0px 0px 3px ;
    background-color: rgba(255, 255, 255, .05);
    backdrop-filter: blur(30px);
    
    
  }
`

export default function ButtonLink(props) {
    return(
        <StyledLink {...props} />
    );
}