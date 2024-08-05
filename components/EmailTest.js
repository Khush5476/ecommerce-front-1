// import { useState } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//     height: 100vh;
//     display:flex;
//     align-items: center;
//     justify-content: space-evenly;
// `;

// const ContactsInput = styled.input`
//     width: 400px;
//     height: 50px;
//     border: none;
//     outline: none;
//     padding-left: 25px;
//     font-weight: 500;
//     color: #666;
//     border-radius: 50px;
//     border: 1px solid black;
// `;

// const Button = styled.button`
//     display: flex;
//     align-items: center;
//     padding: 15px 30px;
//     font-size: 16px;
//     color: #fff;
//     gap: 10px;
//     border: none;
//     border-radius: 50px;
//     background: linear-gradient(270deg, #ff994f, #fa6d86);
//     cursor: pointer;
// `;

// const TextArea = styled.textarea`
//     padding-top: 15px;
//     border-radius: 20px;
//     width: 400px;
//     height: 100px;
//     border: none;
//     outline: none;
//     padding-left: 25px;
//     font-weight: 500;
//     color: #666;
//     border-radius: 50px;
//     border: 1px solid black;
// `;

// const ContactLeft = styled.form`
//     display: flex;
//     flex-direction: column;
//     align-items: start;
//     gap: 20px;
// `;

// const Img = styled.img`
//    width: 500px

// `

// const EmailForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const json = JSON.stringify(formData);

//         try {
//             const response = await fetch("https://api.web3forms.com/submit", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json"
//                 },
//                 body: json
//             });
//             const result = await response.json();
//             if (result.success) {
//                 console.log(result); // Optional: log the result
//                 // Redirect to another page using Next.js router
//                 window.location.href = "/Confirm"; // Replace with your desired URL
//             } else {
//                 console.error("Form submission failed:", result);
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//         }
//     };

//     const handleChange = (event) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value
//         });
//     };

//     return (
//         <Container>
//             <ContactLeft onSubmit={handleSubmit}>
//                 <ContactsInput type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//                 <ContactsInput type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
//                 <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
//                 <Button type="submit">Submit</Button>
//             </ContactLeft>
//         <div class="contact-right">
//         <Img src="http://127.0.0.1:5500/Website/Email/right_img.png"></Img>
//        </div>
//         </Container>
//     );
// };

// export default EmailForm;