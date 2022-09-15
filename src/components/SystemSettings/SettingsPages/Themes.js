import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import "../checkmark.css"

export const Themes = () => {
  return (
    <Container>
      <ColorContainer>
        <SquareSpace>
          <WhiteSquare></WhiteSquare>
          <h1>Basic White</h1>
        </SquareSpace>
        <div>
          <FontAwesomeIcon className="checkmark" icon={faCircleCheck} />
        </div>
      </ColorContainer>
      <ColorContainer>
        <SquareSpace>
          <BlackSquare></BlackSquare>
          <h1>Basic Black</h1>
        </SquareSpace>
        <div>
          <FontAwesomeIcon className="checkmark" icon={faCircleCheck} />
        </div>
      </ColorContainer>
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
const ColorContainer = styled.span`
  width: 90%;
  border-top: 1px solid rgba(185, 190, 190, 0.4);
  border-bottom: 1px solid rgba(185, 190, 190, 0.4);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SquareSpace = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  h1 {
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

const WhiteSquare = styled.div`
  width: 10rem;
  height: 5rem;
  background: white;
`;

const BlackSquare = styled.div`
  width: 10rem;
  height: 5rem;
  background: black;
`;
