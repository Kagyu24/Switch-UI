import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Unlock = () => {
  const bounce = {
    jump: {
      y: [0, -10, 0],
      transition: {
        type: "bounce",
        duration: 1,
        yoyo: 3,
        delay: 10,
      },
    },
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      <Button>
        <Link to="/menu">A</Link>
      </Button>
      <Text variants={bounce} animate="jump">
        Smash to Unlock!
      </Text>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  scale: 1.25;
  bottom: 15%;
  right: 15%;
  opacity: 1;
`;

const Button = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  font-weight: 600;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: 15px;
  text-decoration: none;
`;

const Text = styled(motion.p)`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
`;
