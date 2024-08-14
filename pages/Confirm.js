import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link'; // Import Link from next/link
import Header from '@/components/Header'; // Adjust path as per your project structure

// Keyframe animations
const colorAnimation = keyframes`
  0% {
    background-color: #ff994f;
    box-shadow: 0 0 30px  #ff994f;
  }
  50% {
    background-color: #fa6d86;
    box-shadow: 0 0 30px  #fa6d86;
  }
  100% {
    background-color: #ff994f;
    box-shadow: 0 0 30px #ff994f;
  }
`;
const decolorAnimation = keyframes`
  0% {
    background-color: #fa6d86;
  }
  50% {
    background-color: #ff994f;
  }
  100% {
    background-color: #fa6d86;
  }
`;

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const unhoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled components for the ConfirmPage
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* Light gray background */ 


`;

const Content = styled.div`
  background-color: #fff;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Light shadow */
  text-align: center;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 0 5px .2px gray;
  transition: all 1s ease;

          @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    50% {
      transform: translateY(0);
    }
    60% {
      transform: translateY(-15px);
    }
    80% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }

//    animation: bounce 1s ease;

          @keyframes nope {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  animation: nope 1s ease;


    &:hover {
    box-shadow: 0 0 10px .5px gray;
          transform: scale(1.01); /* Scale up slightly on hover */
    
  }

`;

const Title = styled.h1`
  color: #333; /* Dark gray text color */
  font-size: 32px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  color: #666; /* Medium gray text color */
  font-size: 20px;
  line-height: 1.6;
`;

const CheckmarkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px; /* Adjust spacing between message and checkmark */
`;

const CheckmarkCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, #00cc66, #008000); /* Radial gradient background */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #fff; /* White border around the circle */
  box-shadow: 0 0 12px rgba(0, 204, 102, 0.7); /* Light shadow */
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Scale up slightly on hover */
    box-shadow: 0 0 18px rgba(0, 204, 102, 0.9); /* Bigger shadow on hover */
  }
`;

const CheckmarkIcon = styled.div`
  width: 70px;
  height: 70px;
  color: white;
  animation: ${hoverAnimation} 1s ease infinite;
  transition: all 0.3s ease;
  
`;

const StyledLink = styled.div`

  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 15px;
  transition: background-color 0.3s ease;
  animation: ${colorAnimation} 3s linear infinite;
  border: black;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9ecef; /* Light gray background on hover */
      transform: scale(1.05); /* Scale up slightly on hover */
      box-shadow: 0 0 10px .4px gray;
  }
`;

const ConfirmPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>Form Submitted Successfully!</Title>
          <Message>Thank you for contacting us.</Message>
          <CheckmarkWrapper>
            <CheckmarkCircle>
              <CheckmarkIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </CheckmarkIcon>
            </CheckmarkCircle>
          </CheckmarkWrapper>
          <Link href="/Email" passHref>
            <StyledLink>Go To Email Page</StyledLink>
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default ConfirmPage;







