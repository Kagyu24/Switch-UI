import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ControlButtons = () => {
  return (
    <ControlsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <ControlButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0
          24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </ControlButton>
      <ControlsText>Options</ControlsText>
      &nbsp;
      <ControlButton>A</ControlButton>
      <ControlsText>Select</ControlsText>
    </ControlsContainer>
  );
};

const ControlsContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 3%;
  right: 5%;
  opacity: 1;
  z-index: 2;
`;

const ControlButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-weight: 700;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

const ControlsText = styled.p`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
`;
