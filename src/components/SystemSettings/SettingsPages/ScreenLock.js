import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const ScreenLock = () => {
  return (
    <Container>
      <LockOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Lock Console in Sleep Mode</h1>
        <div>On</div>
      </LockOptions>
      <EmptySpace>
        <p>
          Lock the console so that the same button must be pressed three times
          to proceed when you exit sleep mode. The console will not lock when
          connected to a TV.
        </p>
      </EmptySpace>
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

const LockOptions = styled(motion.div)`
  width: 90%;
  padding: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(190, 190, 190, 0.4);
  h1 {
    font-size: 1.75rem;
    font-weight: 400;
  }
  &:hover {
    border: 3px solid lightblue;
    padding: 0.6rem;
    color: turquoise;
    cursor: pointer;
  }
`;

const EmptySpace = styled.div`
  width: 90%;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px solid rgb(190, 190, 190, 0.4);
  p {
    font-weight: 300;
  }
`;
