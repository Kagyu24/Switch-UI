import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const Bluetooth = () => {
  return (
    <Container>
      <Pair
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Pair Device</h1>
      </Pair>
      <ListRules>
        <h1>To use BlueTooth audio, you must first pair a device.</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faDiamond} />
            <p>
              Up to two wireless controllers can connect while using Bluetooth
              audio.
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faDiamond} />
            <p>
              Bluetooth audio will be disconnected during local communication.
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faDiamond} />
            <p>Bluetooth microphones cannot be used.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faDiamond} />
            <p>
              You may experience audio latency depending on your Bluetooth
              device.
            </p>
          </li>
        </ul>
      </ListRules>
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

const Pair = styled(motion.div)`
  width: 90%;
  border-top: 1px solid rgba(190, 190, 190, 0.4);
  padding: 0.3rem;
  h1 {
    font-size: 1.8rem;
    font-weight: 400;
  }
  &:hover {
    border: 3px solid lightblue;
    padding: 0.13rem;
    cursor: pointer;
  }
`;

const ListRules = styled.div`
  width: 90%;
  display: flex;
  padding-top: 0.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid rgba(190, 190, 190, 0.4);
  h1 {
    color: rgba(190, 190, 190, 0.6);
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    padding-top: 5px;
  }
  ul {
    list-style: none;
    color: rgba(190, 190, 190, 0.6);
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      font-weight: 400;
      padding-top: 5px;
    }
  }
`;
