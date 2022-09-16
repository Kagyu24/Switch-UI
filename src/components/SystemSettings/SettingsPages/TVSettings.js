import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const TVSettings = () => {
  return (
    <Container>
      <TVSettingsOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>TV Resolution</h1>
        <div>Automatic</div>
      </TVSettingsOptions>
      <TVSettingsOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>RGB Range</h1>
        <div>Full Range</div>
      </TVSettingsOptions>
      <TVSettingsOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Adjust Screen Size</h1>
      </TVSettingsOptions>
      <TVSettingsOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Screen Burn-In Reduction</h1>
        <div>On</div>
      </TVSettingsOptions>
      <EmptySpace>
        <p>Reduce screen brightness after five minutes of inactivity.</p>
      </EmptySpace>
      <TVSettingsOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Match TV Power State</h1>
        <div>On</div>
      </TVSettingsOptions>
      <EmptySpace>
        <p>
          When switching to TV mode with the console docked or when the console
          exits sleep mode, the TV will turn on. Turning off the TV will put the
          console in sleep mode.
        </p>
        <p>
          <FontAwesomeIcon icon={faDiamond} /> HDMI settings must also be
          enabled on your TV. Some TV models may be unable to use this feature.
        </p>
      </EmptySpace>
      <TVSettingsOptions>
        <h1>TV Sound</h1>
        <div>On</div>
      </TVSettingsOptions>
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

const TVSettingsOptions = styled(motion.div)`
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
`;
