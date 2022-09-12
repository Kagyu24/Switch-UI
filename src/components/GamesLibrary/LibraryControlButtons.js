import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const LibraryControlButtons = () => {
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
          viewBox="0 0 24 24"
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
      <Link to="/menu">
        <ControlButton>B</ControlButton>
      </Link>
      <ControlsText>Back</ControlsText>
      &nbsp;
      <ControlButton>A</ControlButton>
      <ControlsText>Start</ControlsText>
    </ControlsContainer>
  );
};

const ControlsContainer = styled(motion.span)`
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 90%;
  height: auto;
  padding: 10px 10px;
  border-top: 1px solid #fff;
  position: sticky;
  bottom: -2%;
  right: 0;
  opacity: 1;
  z-index: 3;
`;

const ControlButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  font-weight: 600;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.6);
  text-decoration: none;
`;

const ControlsText = styled.p`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
`;
