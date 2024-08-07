import styled, { keyframes } from "styled-components";
import React from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    .contact-inputs {
      width: 80vw;
    }
    .contact-right {
      display: none;
    }
  }
`;

const LeftTitle = styled.div`
  font-weight: 600;
  color: blue;
  font-size: 40px;
  margin-bottom: 5px;
  animation: fade 1s ease;
`;

const LeftTitle2 = styled.div`
  border: none;
  width: 120px;
  height: 5px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: black;
  animation: fade 1s ease;
`;

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

const ContactsInput = styled.input`
  width: 400px;
  height: 50px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-weight: 500;
  color: #666;
  border-radius: 50px;
  border: 1px solid black;
  transition: all 0.3s ease;

  &:hover {
    animation: ${hoverAnimation} 0.3s ease;
    box-shadow: 0px 0px 10px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  font-size: 16px;
  color: #fff;
  gap: 10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px 0.1px gray;
  animation: ${colorAnimation} 3s linear infinite;
  &:hover {
    background-color: #e9ecef; /* Light gray background on hover */
    transform: scale(1.1); /* Scale up slightly on hover */
    box-shadow: 0 0 10px 0.4px gray;
  }
`;

const TextArea = styled.textarea`
  height: 140px;
  padding-top: 15px;
  border-radius: 20px;
  width: 400px;
  height: 150px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-weight: 500;
  color: #666;
  border-radius: 50px;
  border: 1px solid black;

  &:hover {
    animation: ${hoverAnimation} 0.3s ease;
    box-shadow: 0px 0px 10px;
  }
`;

const ContactLeft = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  @keyframes move {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  animation: move 1s ease;
`;

const Img = styled.img`
  width: 500px;

  @keyframes spin {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  animation: spin 1s ease;
`;

const Img1 = styled.img`
  width: 20px;
`;

export default function Email() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6546a1dc-371d-405c-8f4f-da0b068e6714");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();

      if (result.success) {
        console.log(result);
        // Redirect to the Confirm page
        window.location.href = "/Confirm"; // Replace with your actual Confirm page URL
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <Container>
      <ContactLeft
        onSubmit={handleSubmit}
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-left"
      >
        <div className="contact-left-title">
          <LeftTitle>Talk To Me</LeftTitle>
          <LeftTitle2></LeftTitle2>
        </div>
        <input
          type="hidden"
          name="access_key"
          value="6546a1dc-371d-405c-8f4f-da0b068e6714"
        />
        <ContactsInput
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-inputs"
          required
        />
        <ContactsInput
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-inputs"
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          className="contact-inputs"
          required
        />
        <Button type="submit">
          Submit <Img1 src="/arrow_icon.png" />
        </Button>
      </ContactLeft>
      <div className="contact-right">
        <Img src="/right_img.png" />
      </div>
    </Container>
  );
}
