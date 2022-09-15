import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import amiibo from "../../../img/CoverArt/amiibo.webp";

export const Amiibo = () => {
  return (
    <Container>
      <AmiiboContainer>
        <ImageContainer>
          <Image src={amiibo} alt="Amiibo Logo" />
        </ImageContainer>
        <p>You can edit and delete data saved to amiibo.</p>
      </AmiiboContainer>
      <Option
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Register Owner and Nickname</h1>
      </Option>
      <Option
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Delete Game Data</h1>
      </Option>
      <Option
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Reset amiibo</h1>
      </Option>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const AmiiboContainer = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid rgba(190, 190, 190, 0.4);
  p {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Option = styled(motion.div)`
  width: 90%;
  height: 10%;
  border-bottom: 1px solid rgba(190, 190, 190, 0.4);
  padding: 1.2rem;
  h1 {
    font-size: 1.8rem;
    font-weight: 400;
  }
  &:hover {
    border: 3px solid lightblue;
    color: turquoise;
    cursor: pointer;
  }
`;
