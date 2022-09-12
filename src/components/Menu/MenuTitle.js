import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuTitle = () => {
  return (
    <Logo
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, delay: 0.5 }}
    >
      <Nintendo>Nintendo</Nintendo>
      <Switch>Switch</Switch>
    </Logo>
  );
};

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: -3%;
  left: 33%;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
  line-height: 1;
  scale: 0.6;
`;

const Nintendo = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  letter-spacing: 1.5rem;
  font-weight: 800;
`;

const Switch = styled.h2`
  font-size: 8rem;
  text-transform: uppercase;
  letter-spacing: 1.2rem;
  font-weight: 800;
`;
