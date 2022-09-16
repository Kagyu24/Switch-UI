import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const SleepMode = () => {
  return (
    <Container>
      <SleepOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Auto-Sleep (Playing on COnsole Screen)</h1>
        <div>10min</div>
      </SleepOptions>
      <SleepOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Auto-Sleep (Connected to TV)</h1>
        <div>1hr</div>
      </SleepOptions>
      <EmptySpace>&nbsp;</EmptySpace>
      <SleepOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Suspended Auto-Sleep While Playing Media Content</h1>
        <div>Off</div>
      </SleepOptions>
      <EmptySpace>
        <p>
          Prevents auto-sleep from activating while media content is playing. If
          theis option is disabled, the console will still go to sleep after
          four hours of media playback.
        </p>
      </EmptySpace>
      <SleepOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Matintain Internet Connectioon in Slepe Mode</h1>
        <div>On</div>
      </SleepOptions>
      <EmptySpace>
        <p>
          If this option is enabled, downloads initiated from your PC or
          smartphone will start right away, even when the console is in sleep
          mode. Disabling this option will reduce the console's energy
          consumption during sleep mode while connected to the Internet.
        </p>
        <p>
          <FontAwesomeIcon icon={faDiamond} /> This will have an effect only
          when connected to the Internet via wired connection.
        </p>
      </EmptySpace>
      <SleepOptions>
        <h1>Wake When AC addapter Is Disconnected</h1>
        <div>On</div>
      </SleepOptions>
      <EmptySpace>
        <p>
          If this option is enabled, the console will wake from sleep mode when
          it is removed from the dock.
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

const SleepOptions = styled(motion.div)`
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
