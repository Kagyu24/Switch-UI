import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const System = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 10000);
  }, []);
  return (
    <Container>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>System Update</h1>
      </SystemOptions>
      <EmptySpace>
        <p>Current version 14.1.2</p>
      </EmptySpace>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Update Dock</h1>
      </SystemOptions>
      <EmptySpace>
        <p>Update the Nintedno Switch dock firmware.</p>
      </EmptySpace>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Console Nickname</h1>
        <div>Big Mongo</div>
      </SystemOptions>
      <EmptySpace>&nbsp;</EmptySpace>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Language</h1>
        <div>English</div>
      </SystemOptions>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Region</h1>
        <div>The Americas</div>
      </SystemOptions>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Date and Time</h1>
      </SystemOptions>
      <EmptySpace>
        <p>
          Current date and time:{" "}
          {dateState.toLocaleDateString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}{" "}
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </EmptySpace>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Console Battery (%)</h1>
        <div>On</div>
      </SystemOptions>
      <EmptySpace>
        <p>
          The console battery will be displayed on the HOME Menu as a
          percentage.
        </p>
      </EmptySpace>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Console Sound</h1>
        <div>Stereo</div>
      </SystemOptions>
      <EmptySpace>
        <p>
          You can configure sound in the TV Settings menu when the console is
          connected to a TV.
        </p>
      </EmptySpace>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Mute When Headphones Are Disconnected</h1>
        <div>On</div>
      </SystemOptions>
      <SystemOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Lower Max Headphone Volume</h1>
        <div>On</div>
      </SystemOptions>
      <EmptySpace>
        <p>
          Set a maximum colume for headphones or speakers connected to the
          console.
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
  overflow-y: scroll;
`;

const SystemOptions = styled(motion.div)`
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
