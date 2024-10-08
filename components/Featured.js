import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
// import CartIcon from "./Icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";




const Bg = styled.div`
 background-color: #222;
 color: #fff;
 padding: 50px 0;
`
const Title = styled.h1`
 margin: 0;
 font-weight: normal;
 font-size: 2.25rem;
        @media  screen and (min-width: 768px){
         font-size: 3rem;
        }

`

const Desc = styled.p`
color: #aaa;
font-size: 0.8rem;

`;

const ColumnsWrapper = styled.div`
padding: 30px 0;
display: grid;
grid-template-columns: 1fr;

gap: 40px;
img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
}
    div: nth-child(1){
    order: 2;
}
       @media  screen and (min-width: 768px){
       grid-template-columns: 1.1fr 0.9fr;
    div: nth-child(1){
    order: 0;
}
    img{
    max-width: 100%;
}
       }

            @keyframes fade {
    from {opacity: .1;}
    to {opacity: 1;}
 }
    animation: fade .75s ease;

`;

const Column = styled.div`
display: flex;
align-items: center;
`

const ButtonsWrapper = styled.div`
display:flex;
gap: 10px;
margin-top: 25px;

`
const Img = styled.img`
    background-color: rgba(255, 255, 255, .02);
    // backdrop-filter: blur(30px);
    border: 2px solid rgba(255, 255, 255, .1);
              &:hover {
    box-shadow: 0px 0px 5px rgba(255, 255, 255, .2);

  }
    
`



export default function Featured({project}){
    // const {addProject} = useContext(CartContext);
    // function addFeaturedToCart(){
    //   addProject(project._id);
    // }
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                <Column>
                    <div>
                    <Title>{project.Title}</Title>
                    <Desc>{project.Description} </Desc>
                    <ButtonsWrapper>


                    <ButtonLink href={'/project/'+project._id} outline={1} >Read More</ButtonLink>
                    </ButtonsWrapper>
                    </div>
                    </Column>
                    <Column>
                        <Img src="https://meet-next-ecommerce.s3.amazonaws.com/1722800325503.jpg"/>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    )
}