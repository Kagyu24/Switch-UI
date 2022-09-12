import React from "react";
import styled from "styled-components";
import { motion, } from "framer-motion";

export const Circles = () =>
{
  return (
    <div>
      <Circle variants={float4} animate="bubble" initial={{ opacity: 0 }} />
      <Circle2 variants={float5} animate="bubble" initial={{ opacity: 0 }} />
      <Circle3 variants={float6} animate="bubble" initial={{ opacity: 0 }} />
      <Circle4 variants={float7} animate="bubble" initial={{ opacity: 0 }} />
      <Circle5 variants={float4} animate="bubble" initial={{ opacity: 0 }} />
      <Circle6 variants={float4} animate="bubble" initial={{ opacity: 0 }} />
      <Circle7 variants={float5} animate="bubble" initial={{ opacity: 0 }} />
      <Circle8 variants={float6} animate="bubble" initial={{ opacity: 0 }} />
      <Circle9 variants={float7} animate="bubble" initial={{ opacity: 0 }} />
    </div>
  );
};

const float7 = {
  bubble: {
    y: [ 0, -30, 0 ],
    opacity: 1,
    transition: {
      type: "easeInOut",
      duration: 8,
      yoyo: Infinity
    }
  }
}

const float6 = {
  bubble: {
    y: [ 0, -40, 0 ],
    opacity: 1,
    transition: {
      type: "easeInOut",
      duration: 6,
      yoyo: Infinity
    }
  }
}

const float5 = {
  bubble: {
    y: [ 0, -25, 0 ],
    opacity: 1,
    transition: {
      type: "easeInOut",
      duration: 5,
      yoyo: Infinity
    }
  }
}

const float4 = {
  bubble: {
    y: [ 0, -20, 0 ],
    opacity: 1,
    transition: {
      type: "easeInOut",
      duration: 4,
      yoyo: Infinity
    }
  }
}

const Circle = styled(motion.div)`
  position: absolute;
  width: 25%;
  height: 50%;
  top: -150px;
  right: -150px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    230deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
  opacity: 0;
  overflow: hidden;
`;

const Circle2 = styled(motion.div)`
   position: absolute;
  width: 25%;
  height: 50%;
  bottom: 300px;
  left: 1100px;
  border-radius: 50%;
  background: linear-gradient(
    30deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.03) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
  opacity: 0;
  overflow: hidden;
`;

const Circle3 = styled(motion.div)`
 position: absolute;
  width: 25%;
  height: 50%;
  bottom: 100px;
  right: -20px;
  border-radius: 50%;
  background: linear-gradient(
    230deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.03) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
  opacity: 0;
  overflow: hidden;
`;

const Circle4 = styled(motion.div)`
 position: absolute;
  width: 25%;
  height: 50%;
  top: -150px;
  right: 100px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.01) 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  opacity: 0;
  overflow: hidden;
`;

const Circle5 = styled(motion.div)`
 position: absolute;
  width: 25%;
  height: 50%;
  top: 100px;
  right: -250px;
  border-radius: 50%;
  background: linear-gradient(
    330deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.01) 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  opacity: 0;
  overflow: hidden;`;

const Circle6 = styled(motion.div)`
  position: absolute;
  width: 25%;
  height: 50%;
  left: -90px;
  bottom: -90px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    30deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.01) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
  opacity: 0;
  overflow: hidden;`;

const Circle7 = styled(motion.div)`
 position: absolute;
  width: 25%;
  height: 50%;
  left: 90px;
  bottom: 90px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    330deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.01) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
  opacity: 0;
  overflow: hidden;`;

const Circle8 = styled(motion.div)`
position: absolute;
  width: 25%;
  height: 50%;
  left: -150px;
  bottom: 150px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
  opacity: 0;
  overflow: hidden;`;

const Circle9 = styled(motion.div)`
 position: absolute;
  width: 25%;
  height: 50%;
  left: 200px;
  bottom: -130px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    250deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.3) 100%
  );
  opacity: 0;
  overflow: hidden;
  `;





