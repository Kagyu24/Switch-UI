import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

export const Notifications = () => {
  const [OnText, setOnText] = useState("");
  const [On, setOn] = useState("");
  return (
    <Container>
      <NotificationOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        onClick={() => setOn(!On)}
      >
        <h1>"Download Complete" Notifications</h1>
        <div>{On ? "Off" : "On"}</div>
      </NotificationOptions>
      <NotificationOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Friend Notifications</h1>
      </NotificationOptions>
      <NotificationOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Platinum Point Notfications</h1>
      </NotificationOptions>
      <EmptySpace>&nbsp;</EmptySpace>
      <NotificationOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <h1>Alarm Notifications</h1>
      </NotificationOptions>
      <EmptySpace>
        <AlarmText>
          After setting an alarm, you will get a notification at the date and
          time of your chossing.
        </AlarmText>
      </EmptySpace>
      <NotificationOptions
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        onClick={() => setOnText(!OnText)}
      >
        <h1>Notification Sound</h1>
        <div>{OnText ? "Off" : "On"}</div>
      </NotificationOptions>
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

const NotificationOptions = styled(motion.div)`
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(190, 190, 190, 0.4);
`;

const AlarmText = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  text-align: center;
`;
