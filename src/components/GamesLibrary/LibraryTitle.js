import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const LibraryTitle = () => {
  return (
    <Logo
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <Svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="200pt"
        height="200pt"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        {" "}
        <g
          transform="translate(0,200) scale(0.05,-0.05)"
          fill="#ffffff"
          stroke="none"
        >
          {" "}
          <path d="M920 3732 c-343 -97 -605 -383 -660 -724 -28 -169 -26 -1899 2 -2032 57 -271 241 -506 494 -631 l152 -75 516 -6 516 -6 -5 1746 -5 1746 -460 3 c-319 3 -488 -4 -550 -21z m720 -1724 l0 -1471 -335 7 c-388 8 -470 35 -621 207 -148 167 -148 165 -147 1269 l0 979 48 106 c133 289 300 368 790 372 l265 3 0 -1472z" />{" "}
          <path d="M990 3010 c-247 -134 -262 -428 -30 -586 193 -131 480 36 480 280 0 239 -254 412 -450 306z" />{" "}
          <path d="M2292 2885 c-8 -484 -8 -1272 0 -1753 l14 -875 392 7 c584 9 841 161 1002 591 65 173 63 2105 -2 2300 -139 419 -429 589 -1020 601 l-372 7 -14 -878z m834 -737 c347 -176 214 -700 -169 -663 -434 42 -416 690 19 694 47 1 115 -14 150 -31z" />{" "}
        </g>{" "}
      </Svg>
      <Nintendo>Game Library</Nintendo>
    </Logo>
  );
};

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
  margin-top: -5rem;
`;

const Svg = styled.svg`
  scale: 0.3;
  margin-left: -5rem;
  margin-right: -5rem;
`;

const Nintendo = styled.h1`
  font-size: 4rem;
  font-weight: 800;
`;
