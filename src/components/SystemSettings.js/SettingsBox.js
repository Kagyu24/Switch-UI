import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ControlButtons } from "../Menu/ControlButtons";

export const SettingsBox = () => {
  return (
    <Showcase>
      <Settingsbox
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.8, delay: 0.5 }}
      >
        <ViewAll>
          <Link to="/menu">
            <View>
              <ViewSVG width="64" height="64">
                <g>
                  <rect
                    id="svg_1"
                    height="28"
                    width="28"
                    y="33"
                    x="33"
                    stroke="#fff"
                    fill="#fff"
                  />
                  <rect
                    id="svg_2"
                    height="28"
                    width="28"
                    y="0"
                    x="0"
                    stroke="#fff"
                    fill="#ffffff"
                  />
                  <rect
                    id="svg_3"
                    height="28"
                    width="28"
                    y="33"
                    x="0"
                    stroke="#fff"
                    fill="#fff"
                  />
                  <rect
                    id="svg_4"
                    height="28"
                    width="28"
                    y="0"
                    x="33"
                    stroke="#fff"
                    fill="#fff"
                  />
                </g>
              </ViewSVG>
              <h1>Back to Main Menu</h1>
            </View>
          </Link>
        </ViewAll>
        <ControlButtons />
      </Settingsbox>
    </Showcase>
  );
};

const Showcase = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Settingsbox = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.3);
  width: 90vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  padding: 15px;
  position: absolute;
  top: 12%;
  overflow: scroll;
`;

const ViewAll = styled.span`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 3px solid #fff;
`;
const View = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: #fff;
  margin-bottom: 6px;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
  &:active {
    color: white;
  }
`;
const ViewSVG = styled.svg`
  scale: 0.8;
`;
