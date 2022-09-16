import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SystemInfoMenu } from "../../components/SystemSettings/SettingsSystemInfo";
import { Themes } from "./SettingsPages/Themes";
import { Amiibo } from "./SettingsPages/amiibo";
import { Bluetooth } from "./SettingsPages/Bluetooth";
import { Notifications } from "./SettingsPages/Notifications";
import { TVSettings } from "./SettingsPages/TVSettings";
import { SleepMode } from "./SettingsPages/SleepMode";
import { ScreenLock } from "./SettingsPages/ScreenLock";
import { System } from "./SettingsPages/System";

export const SettingsBox = () => {
  const [openThemes, setOpenThemes] = useState(false);
  const [openAmiibo, setOpenAmiibo] = useState(false);
  const [openBluetooth, setOpenBluetooth] = useState(false);
  const [openNotifs, setOpenNotifs] = useState(false);
  const [openTV, setOpenTV] = useState(false);
  const [openSleep, setOpenSleep] = useState(false);
  const [openLock, setOpenLock] = useState(false);
  const [openSystem, setOpenSystem] = useState(false);

  return (
    <div>
      <div className="container">
        <div>
          <div className="circle"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
          <div className="circle6"></div>
          <div className="circle7"></div>
          <div className="circle8"></div>
          <div className="circle9"></div>
        </div>
      </div>
      <Showcase>
        <SettingBox
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.8, delay: 0.5 }}
        >
          <SettingTitle>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h1>System Settings</h1>
            <SystemInfoMenu />
          </SettingTitle>
          <Profile>
            <TabsContainer>
              <Tabs
                onClick={() => {
                  setOpenThemes(true);
                  setOpenAmiibo(false);
                  setOpenBluetooth(false);
                  setOpenNotifs(false);
                  setOpenTV(false);
                  setOpenSleep(false);
                  setOpenLock(false);
                  setOpenSystem(false);
                }}
                whileHover={{
                  borderColor: ["#078fde", "#8bdefc", "#078fde"],
                  transition: {
                    duration: 1.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
              >
                <TabTextBorder>Themes</TabTextBorder>
              </Tabs>
              <Tabs
                onClick={() => {
                  setOpenAmiibo(true);
                  setOpenThemes(false);
                  setOpenBluetooth(false);
                  setOpenNotifs(false);
                  setOpenTV(false);
                  setOpenSleep(false);
                  setOpenLock(false);
                  setOpenSystem(false);
                }}
              >
                <TabTextBorder>amiibo</TabTextBorder>
              </Tabs>
              <Tabs
                whileHover={{
                  borderColor: ["#047cc2", "#8bdefc", "#0472b1"],
                  transition: {
                    duration: 1.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
                onClick={() => {
                  setOpenBluetooth(true);
                  setOpenAmiibo(false);
                  setOpenThemes(false);
                  setOpenNotifs(false);
                  setOpenTV(false);
                  setOpenSleep(false);
                  setOpenLock(false);
                  setOpenSystem(false);
                }}
              >
                <TabTextBorder>Bluetooth® Audio</TabTextBorder>
              </Tabs>
              <Tabs
                whileHover={{
                  borderColor: ["#078fde", "#8bdefc", "#078fde"],
                  transition: {
                    duration: 1.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
                onClick={() => {
                  setOpenNotifs(true);
                  setOpenAmiibo(false);
                  setOpenBluetooth(false);
                  setOpenThemes(false);
                  setOpenTV(false);
                  setOpenSleep(false);
                  setOpenLock(false);
                  setOpenSystem(false);
                }}
              >
                <TabTextBorder>Notifications</TabTextBorder>
              </Tabs>
              <Tabs
                whileHover={{
                  borderColor: ["#078fde", "#8bdefc", "#078fde"],
                  transition: {
                    duration: 1.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
                onClick={() => {
                  setOpenTV(true);
                  setOpenNotifs(false);
                  setOpenAmiibo(false);
                  setOpenBluetooth(false);
                  setOpenThemes(false);
                  setOpenSleep(false);
                  setOpenLock(false);
                  setOpenSystem(false);
                }}
              >
                <TabTextBorder>TV Settings</TabTextBorder>
              </Tabs>
              <Tabs
                whileHover={{
                  borderColor: ["#078fde", "#8bdefc", "#078fde"],
                  transition: {
                    duration: 1.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
                onClick={() => {
                  setOpenSleep(true);
                  setOpenTV(false);
                  setOpenNotifs(false);
                  setOpenAmiibo(false);
                  setOpenBluetooth(false);
                  setOpenThemes(false);
                  setOpenLock(false);
                  setOpenSystem(false);
                }}
              >
                <TabTextBorder>Sleep Mode</TabTextBorder>
              </Tabs>
              <Tabs
                whileHover={{
                  borderColor: ["#078fde", "#8bdefc", "#078fde"],
                  transition: {
                    duration: 1.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
                onClick={() => {
                  setOpenLock(true);
                  setOpenSleep(false);
                  setOpenTV(false);
                  setOpenNotifs(false);
                  setOpenAmiibo(false);
                  setOpenBluetooth(false);
                  setOpenThemes(false);
                  setOpenSystem(false);
                }}
              >
                <TabTextBorder>Screen Lock</TabTextBorder>
              </Tabs>
              <Tabs
                whileHover={{
                  borderColor: ["#078fde", "#8bdefc", "#078fde"],
                  transition: {
                    duration: 1.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
                onClick={() => {
                  setOpenSystem(true);
                  setOpenLock(false);
                  setOpenSleep(false);
                  setOpenTV(false);
                  setOpenNotifs(false);
                  setOpenAmiibo(false);
                  setOpenBluetooth(false);
                  setOpenThemes(false);
                }}
              >
                <TabTextBorder>System</TabTextBorder>
              </Tabs>
              <Tabs
                whileHover={{
                  borderColor: ["#078fde", "#8bdefc", "#078fde"],
                  transition: {
                    duration: 1.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
              >
                <Linkstyle to="/menu">
                  <TabTextBorder>Back to Main Menu</TabTextBorder>
                </Linkstyle>
              </Tabs>
            </TabsContainer>
            <Container>
              {openThemes && <Themes />}
              {openAmiibo && <Amiibo />}
              {openBluetooth && <Bluetooth />}
              {openNotifs && <Notifications />}
              {openTV && <TVSettings />}
              {openSleep && <SleepMode />}
              {openLock && <ScreenLock />}
              {openSystem && <System />}
            </Container>
          </Profile>
        </SettingBox>
      </Showcase>
    </div>
  );
};

const Showcase = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
`;

const SettingBox = styled(motion.div)`
  width: 90vw;
  height: 90vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  border-radius: 40px;
  position: absolute;
  top: 5%;
  overflow: hidden;
`;

const SettingTitle = styled.span`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-end;
  gap: 15px;
  padding-left: 5rem;
  border-bottom: 1px solid white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, 0.75);
  padding-top: 10px;
  padding-bottom: 10px;
  h1 {
    font-weight: 400;
  }
`;

const Profile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TabsContainer = styled.div`
  width: 25%;
  display: flex;
  padding: 0.4rem;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 10px 15px 25px rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

const Tabs = styled(motion.div)`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  h1 {
    width: 100%;
    height: 100%;
    font-weight: 300;
    padding: 1.1rem;
    text-align: start;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      border: 3px solid lightblue;
      padding: 1rem;
      color: turquoise;
      cursor: pointer;
    }
  }
`;

const TabTextBorder = styled.h1`
  &:hover {
    &:before {
      content: "";
      border-left: 3px solid turquoise;
      margin-left: -3%;
      margin-right: 3%;
    }
  }
`;

const Linkstyle = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  width: 100%;
  ${TabTextBorder}:hover & {
    color: turquoise;
  }
`;

const Container = styled.div`
  width: 75%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
