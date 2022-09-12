import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const LibraryControlButtonsTop = () => {
  return (
    <ControlsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <ControlButtonL>L</ControlButtonL>
      <ControlsText>Groups</ControlsText>
      &nbsp;
      <ControlButtonR>R</ControlButtonR>
      <ControlsText>Sort/Filter</ControlsText>
    </ControlsContainer>
  );
};

const ControlsContainer = styled(motion.span)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  opacity: 1;
  z-index: 2;
`;

const ControlButtonL = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  border-radius: 50% 0 0 0;
  width: 30px;
  height: 25px;
  text-align: center;
  font-weight: 600;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

const ControlButtonR = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  border-radius: 0 50% 0 0;
  width: 30px;
  height: 25px;
  text-align: center;
  font-weight: 600;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

const ControlsText = styled.p`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
`;
