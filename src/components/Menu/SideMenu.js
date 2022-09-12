import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const SideMenu = ({ close }) => {
  return (
    <SideNav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Close onClick={() => close(false)}>
        <FontAwesomeIcon icon={faX} />
      </Close>
      <SleepMode
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <div>
          <Link to="/">
            <motion.svg
              animate={{
                stroke: ["#078fde", "#8bdefc", "#078fde"],
                transition: {
                  duration: 1.1,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-power"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
              <line x1="12" y1="4" x2="12" y2="12"></line>
            </motion.svg>
          </Link>
        </div>
        Sleep Mode
      </SleepMode>
      <AutoPlane
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        Auto-brightness
        <div onclick="Switch()" id="toggle" class="sidenav-toggle">
          Off
        </div>
      </AutoPlane>
      <BrightVol>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-volume"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 8a5 5 0 0 1 0 8"></path>
          <path d="M17.7 5a9 9 0 0 1 0 14"></path>
          <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
        </svg>
        <Slider
          type="range"
          id="brightness-range"
          min="10"
          max="100"
          value="100"
        />
      </BrightVol>
      <BrightVol>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brightness-up"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="3"></circle>
          <line x1="12" y1="5" x2="12" y2="3"></line>
          <line x1="17" y1="7" x2="18.4" y2="5.6"></line>
          <line x1="19" y1="12" x2="21" y2="12"></line>
          <line x1="17" y1="17" x2="18.4" y2="18.4"></line>
          <line x1="12" y1="19" x2="12" y2="21"></line>
          <line x1="7" y1="17" x2="5.6" y2="18.4"></line>
          <line x1="6" y1="12" x2="4" y2="12"></line>
          <line x1="7" y1="7" x2="5.6" y2="5.6"></line>
        </svg>
        <Slider
          type="range"
          id="brightness-range"
          min="10"
          max="100"
          value="100"
        />
      </BrightVol>
      <AutoPlane
        whileHover={{
          borderColor: ["#078fde", "#8bdefc", "#078fde"],
          transition: {
            duration: 1.1,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        Airplane Mode
        <div onclick="Switch2()" id="toggle2" class="sidenav-toggle">
          Off
        </div>
      </AutoPlane>
      <AirplaneText>
        <p>
          If you turn Airplane Mode on, you will no longer be able to use
          wireless controllers.
        </p>
      </AirplaneText>
      <Controller>
        <svg
          width="200"
          height="200"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <g
            id="svg_1"
            fill="rgba(255,255,255,1)"
            transform="translate(0, 225) scale(0.1, -0.1)"
          >
            <path
              id="svg_2"
              d="m430,1687c-30,-7 -79,-25 -108,-41c-45,-23 -61,-40 -109,-114c-31,-48 -67,-109 -79,-137c-49,-109 -95,-400 -110,-701c-9,-184 16,-263 109,-337c30,-25 49,-31 95,-34c94,-7 145,39 201,180c48,121 67,153 98,166c21,8 154,11 490,9c429,-3 462,-4 481,-21c11,-10 39,-64 62,-120c51,-126 78,-168 124,-197c105,-64 247,18 288,165c13,51 4,332 -17,505c-19,156 -57,326 -88,393c-14,29 -55,89 -91,135c-52,64 -81,89 -125,111c-67,35 -148,51 -246,51c-64,0 -77,-3 -113,-30l-42,-30l-261,0l-260,0l-36,28c-32,24 -46,27 -122,29c-47,1 -111,-3 -141,-10zm1136,-120c100,-22 136,-39 183,-87c51,-53 74,-102 105,-225c49,-195 89,-641 66,-733c-21,-84 -91,-152 -158,-152c-54,0 -96,49 -146,171c-53,130 -68,153 -111,173c-30,15 -90,16 -517,14c-465,-3 -484,-4 -510,-23c-26,-19 -71,-105 -103,-194c-32,-92 -81,-141 -142,-141c-64,0 -133,73 -152,161c-22,97 17,525 65,719c32,128 53,171 113,233c36,38 60,52 111,68c109,33 198,37 670,34c366,-2 469,-5 526,-18z"
            />
            <path
              id="svg_3"
              d="m1500,1470c-37,-37 -21,-94 33,-113c24,-9 63,11 76,39c29,65 -58,125 -109,74z"
            />
            <path
              id="svg_6"
              d="m345,1416c-147,-89 -75,-310 96,-294c92,9 156,86 146,176c-13,117 -141,179 -242,118zm130,-42c33,-15 65,-64 65,-99c0,-25 -27,-72 -52,-89c-12,-9 -40,-16 -61,-16c-54,0 -107,52 -107,105c0,47 14,71 53,95c39,24 59,25 102,4z"
            />
            <path
              id="svg_7"
              d="m1331,1324c-24,-31 -25,-35 -10,-67c30,-65 129,-46 129,25c0,64 -80,92 -119,42z"
            />
            <path
              id="svg_8"
              d="m1660,1330c-37,-37 -21,-94 33,-113c40,-15 95,40 80,80c-19,54 -76,70 -113,33z"
            />
            <path
              id="svg_11"
              d="m1491,1184c-24,-31 -25,-35 -10,-67c23,-50 93,-55 118,-8c40,74 -56,140 -108,75z"
            />
            <path
              id="svg_12"
              d="m1200,1138c-65,-34 -85,-67 -85,-141c0,-49 5,-69 23,-95c70,-97 226,-84 277,24c22,46 16,124 -12,162c-23,32 -97,72 -133,72c-14,0 -46,-10 -70,-22zm146,-72c39,-39 45,-80 17,-126c-57,-97 -203,-53 -203,60c0,50 55,100 110,100c34,0 48,-6 76,-34z"
            />
            <path
              id="svg_13"
              d="m637,1144c-4,-4 -7,-29 -7,-55l0,-48l-52,-3l-53,-3l0,-40l0,-40l52,-3l52,-3l3,-52l3,-52l45,0l45,0l3,53l3,52l50,0l49,0l0,45l0,45l-49,0l-50,0l-3,53l-3,52l-40,3c-23,2 -44,0 -48,-4z"
            />
          </g>
        </svg>
      </Controller>
    </SideNav>
  );
};

const Controller = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  left: -5%;
  bottom: -5%;
  scale: 0.35;
`;

const SideNav = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 30vw;
  background: rgba(0, 0, 0, 0.8);
  right: 0;
  z-index: 2;
`;

const Close = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 1.5em;
  right: 2%;
  top: 0;
  cursor: pointer;
  width: auto;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 25px;
  transition: 0.5s ease;
  user-select: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
  }
`;

const SleepMode = styled(motion.div)`
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  width: 90%;
  gap: 1rem;
  border-top: 1px solid white;
  height: 4rem;
  font-size: 1.3em;
  font-weight: 300;
  &:hover {
    border: 2px solid blue;
  }
`;

const BrightVol = styled(motion.div)`
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  font-size: 1.3em;
  font-weight: 300;
  width: 90%;
  border-top: 1px solid white;
  height: 4rem;
`;

const AutoPlane = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 1.3em;
  font-weight: 300;
  width: 90%;
  border-top: 1px solid white;
  height: 4rem;
  &:hover {
    border: 2px solid blue;
  }
`;

const AirplaneText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 1.1em;
  font-weight: 300;
  width: 90%;
  border-top: 1px solid white;
  height: 4rem;
`;

const Slider = styled.input`
  width: 75%;
`;
