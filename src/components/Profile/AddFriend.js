import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6mygxcm",
        "template_hskicnp",
        form.current,
        "gfne2tBzcCa0_pY0B"
      )
      .then(
        (result) => {
          console.log(result.text);

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <ContactText>
        <h1>Wanna get in touch?</h1>
        <p>
          If you liked this app, feel free to email me below or you can also
          email me on my portfolio site at{" "}
          <a style={{ color: "#537dac" }} href="justinlemos.com">
            justinlemos.com
          </a>
        </p>
      </ContactText>
      <ContactBox>
        <Form ref={form} onSubmit={sendEmail}>
          <FormFields>
            <Label>Name</Label>
            <Input placeholder="Enter your name" type="text" name="name" />
          </FormFields>
          <FormFields>
            <Label>Email</Label>
            <Input placeholder="Enter your email" type="email" name="email" />
          </FormFields>

          <FormFields>
            <Label>Message</Label>
            <TextArea
              placeholder="Type your message..."
              name="message"
              cols="60"
              rows="10"
            />
          </FormFields>
          <SubmitButton type="submit" value="Send" />
        </Form>
      </ContactBox>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 3rem;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const ContactBox = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 60%;
  height: 60%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "Mulish";
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 95%;
  height: 100%;
`;

const Label = styled.label`
  color: #537dac;
`;

const Input = styled.input`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  border: none;
  border: 2px outset #537dac;
  font-size: 1rem;
  outline: none;
  background-color: inherit;
  color: white;
  font-family: "Mulish";
  padding-left: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  border-radius: 5px;
  border: none;
  border: 2px outset #537dac;
  font-size: 1rem;
  outline: none;
  background-color: inherit;
  color: white;
  resize: none;
  font-family: "Mulish";
`;

const SubmitButton = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  background-color: #fff;
  border: 2px solid #4871a1;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  background-color: inherit;
  color: #537dac;
  &:hover {
    background-color: #537dac;
    color: white;
    transition: all 0.2s ease-in-out;
  }
`;
