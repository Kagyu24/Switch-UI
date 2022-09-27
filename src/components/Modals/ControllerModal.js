import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ControllerModal = ({ close }) => {
  return (
    <ModalBg>
      <Modal
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -50 }}
      >
        {" "}
        <SettingBox>
          <Profile>
            <Container>
              <SvgContainer>
                <SwitchIcon>
                  <h1>Console</h1>
                  <SwitchSvg
                    width="400"
                    height="400"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.5 43C24.5 41.6193 23.3807 40.5 22 40.5H16C11.3056 40.5 7.5 44.3056 7.5 49V79C7.5 83.6944 11.3056 87.5 16 87.5H22C23.3807 87.5 24.5 86.3807 24.5 85V43ZM22 41.5C22.8284 41.5 23.5 42.1716 23.5 43V85C23.5 85.8284 22.8284 86.5 22 86.5H16C11.8579 86.5 8.5 83.1421 8.5 79V49C8.5 44.8579 11.8579 41.5 16 41.5H22Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M103.5 43C103.5 41.6193 104.619 40.5 106 40.5H112C116.694 40.5 120.5 44.3056 120.5 49V79C120.5 83.6944 116.694 87.5 112 87.5H106C104.619 87.5 103.5 86.3807 103.5 85V43ZM106 41.5C105.172 41.5 104.5 42.1716 104.5 43V85C104.5 85.8284 105.172 86.5 106 86.5H112C116.142 86.5 119.5 83.1421 119.5 79V49C119.5 44.8579 116.142 41.5 112 41.5H106Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.5 43C23.5 41.6193 24.6193 40.5 26 40.5H102C103.381 40.5 104.5 41.6193 104.5 43V85C104.5 86.3807 103.381 87.5 102 87.5H26C24.6193 87.5 23.5 86.3807 23.5 85V43ZM26 41.5C25.1716 41.5 24.5 42.1716 24.5 43V85C24.5 85.8284 25.1716 86.5 26 86.5H102C102.828 86.5 103.5 85.8284 103.5 85V43C103.5 42.1716 102.828 41.5 102 41.5H26Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.5 45C25.5 43.6193 26.6193 42.5 28 42.5H100C101.381 42.5 102.5 43.6193 102.5 45V83C102.5 84.3807 101.381 85.5 100 85.5H28C26.6193 85.5 25.5 84.3807 25.5 83V45ZM28 43.5C27.1716 43.5 26.5 44.1716 26.5 45V83C26.5 83.8284 27.1716 84.5 28 84.5H100C100.828 84.5 101.5 83.8284 101.5 83V45C101.5 44.1716 100.828 43.5 100 43.5H28Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 49.5C14.8431 49.5 13.5 50.8431 13.5 52.5C13.5 54.1569 14.8431 55.5 16.5 55.5C18.1569 55.5 19.5 54.1569 19.5 52.5C19.5 50.8431 18.1569 49.5 16.5 49.5ZM12.5 52.5C12.5 50.2909 14.2909 48.5 16.5 48.5C18.7091 48.5 20.5 50.2909 20.5 52.5C20.5 54.7091 18.7091 56.5 16.5 56.5C14.2909 56.5 12.5 54.7091 12.5 52.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M111.5 62.5C109.843 62.5 108.5 63.8431 108.5 65.5C108.5 67.1569 109.843 68.5 111.5 68.5C113.157 68.5 114.5 67.1569 114.5 65.5C114.5 63.8431 113.157 62.5 111.5 62.5ZM107.5 65.5C107.5 63.2909 109.291 61.5 111.5 61.5C113.709 61.5 115.5 63.2909 115.5 65.5C115.5 67.7091 113.709 69.5 111.5 69.5C109.291 69.5 107.5 67.7091 107.5 65.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M109.5 73.5C108.948 73.5 108.5 73.9477 108.5 74.5C108.5 75.0523 108.948 75.5 109.5 75.5C110.052 75.5 110.5 75.0523 110.5 74.5C110.5 73.9477 110.052 73.5 109.5 73.5ZM107.5 74.5C107.5 73.3954 108.395 72.5 109.5 72.5C110.605 72.5 111.5 73.3954 111.5 74.5C111.5 75.6046 110.605 76.5 109.5 76.5C108.395 76.5 107.5 75.6046 107.5 74.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M108 43.5L108 46.5L107 46.5L107 43.5L108 43.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 45.5H19V44.5H22V45.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M109 45.5H106V44.5H109V45.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 60.5C15.9477 60.5 15.5 60.9477 15.5 61.5C15.5 62.0523 15.9477 62.5 16.5 62.5C17.0523 62.5 17.5 62.0523 17.5 61.5C17.5 60.9477 17.0523 60.5 16.5 60.5ZM14.5 61.5C14.5 60.3954 15.3954 59.5 16.5 59.5C17.6046 59.5 18.5 60.3954 18.5 61.5C18.5 62.6046 17.6046 63.5 16.5 63.5C15.3954 63.5 14.5 62.6046 14.5 61.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.5 64.5C11.9477 64.5 11.5 64.9477 11.5 65.5C11.5 66.0523 11.9477 66.5 12.5 66.5C13.0523 66.5 13.5 66.0523 13.5 65.5C13.5 64.9477 13.0523 64.5 12.5 64.5ZM10.5 65.5C10.5 64.3954 11.3954 63.5 12.5 63.5C13.6046 63.5 14.5 64.3954 14.5 65.5C14.5 66.6046 13.6046 67.5 12.5 67.5C11.3954 67.5 10.5 66.6046 10.5 65.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 68.5C15.9477 68.5 15.5 68.9477 15.5 69.5C15.5 70.0523 15.9477 70.5 16.5 70.5C17.0523 70.5 17.5 70.0523 17.5 69.5C17.5 68.9477 17.0523 68.5 16.5 68.5ZM14.5 69.5C14.5 68.3954 15.3954 67.5 16.5 67.5C17.6046 67.5 18.5 68.3954 18.5 69.5C18.5 70.6046 17.6046 71.5 16.5 71.5C15.3954 71.5 14.5 70.6046 14.5 69.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.5 64.5C19.9477 64.5 19.5 64.9477 19.5 65.5C19.5 66.0523 19.9477 66.5 20.5 66.5C21.0523 66.5 21.5 66.0523 21.5 65.5C21.5 64.9477 21.0523 64.5 20.5 64.5ZM18.5 65.5C18.5 64.3954 19.3954 63.5 20.5 63.5C21.6046 63.5 22.5 64.3954 22.5 65.5C22.5 66.6046 21.6046 67.5 20.5 67.5C19.3954 67.5 18.5 66.6046 18.5 65.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M111.5 47.5C110.948 47.5 110.5 47.9477 110.5 48.5C110.5 49.0523 110.948 49.5 111.5 49.5C112.052 49.5 112.5 49.0523 112.5 48.5C112.5 47.9477 112.052 47.5 111.5 47.5ZM109.5 48.5C109.5 47.3954 110.395 46.5 111.5 46.5C112.605 46.5 113.5 47.3954 113.5 48.5C113.5 49.6046 112.605 50.5 111.5 50.5C110.395 50.5 109.5 49.6046 109.5 48.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M107.5 51.5C106.948 51.5 106.5 51.9477 106.5 52.5C106.5 53.0523 106.948 53.5 107.5 53.5C108.052 53.5 108.5 53.0523 108.5 52.5C108.5 51.9477 108.052 51.5 107.5 51.5ZM105.5 52.5C105.5 51.3954 106.395 50.5 107.5 50.5C108.605 50.5 109.5 51.3954 109.5 52.5C109.5 53.6046 108.605 54.5 107.5 54.5C106.395 54.5 105.5 53.6046 105.5 52.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M111.5 55.5C110.948 55.5 110.5 55.9477 110.5 56.5C110.5 57.0523 110.948 57.5 111.5 57.5C112.052 57.5 112.5 57.0523 112.5 56.5C112.5 55.9477 112.052 55.5 111.5 55.5ZM109.5 56.5C109.5 55.3954 110.395 54.5 111.5 54.5C112.605 54.5 113.5 55.3954 113.5 56.5C113.5 57.6046 112.605 58.5 111.5 58.5C110.395 58.5 109.5 57.6046 109.5 56.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M115.5 51.5C114.948 51.5 114.5 51.9477 114.5 52.5C114.5 53.0523 114.948 53.5 115.5 53.5C116.052 53.5 116.5 53.0523 116.5 52.5C116.5 51.9477 116.052 51.5 115.5 51.5ZM113.5 52.5C113.5 51.3954 114.395 50.5 115.5 50.5C116.605 50.5 117.5 51.3954 117.5 52.5C117.5 53.6046 116.605 54.5 115.5 54.5C114.395 54.5 113.5 53.6046 113.5 52.5Z"
                      fill="turquoise"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5 74C17.5 73.7239 17.7239 73.5 18 73.5H20C20.2761 73.5 20.5 73.7239 20.5 74V76C20.5 76.2761 20.2761 76.5 20 76.5H18C17.7239 76.5 17.5 76.2761 17.5 76V74ZM18.5 74.5V75.5H19.5V74.5H18.5Z"
                      fill="turquoise"
                    />
                  </SwitchSvg>
                </SwitchIcon>
                <BatteryIcons>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-battery-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2"></path>
                    <line x1="7" y1="10" x2="7" y2="14"></line>
                    <line x1="10" y1="10" x2="10" y2="14"></line>
                    <line x1="13" y1="10" x2="13" y2="14"></line>
                    <line x1="16" y1="10" x2="16" y2="14"></line>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-battery-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2"></path>
                    <line x1="7" y1="10" x2="7" y2="14"></line>
                    <line x1="10" y1="10" x2="10" y2="14"></line>
                    <line x1="13" y1="10" x2="13" y2="14"></line>
                    <line x1="16" y1="10" x2="16" y2="14"></line>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-battery-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2"></path>
                    <line x1="7" y1="10" x2="7" y2="14"></line>
                    <line x1="10" y1="10" x2="10" y2="14"></line>
                    <line x1="13" y1="10" x2="13" y2="14"></line>
                    <line x1="16" y1="10" x2="16" y2="14"></line>
                  </svg>
                </BatteryIcons>
              </SvgContainer>
              <ControllerContainer>
                <div>
                  <h1>Controllers</h1>
                </div>
                <ControllerIcons>
                  <Controller>
                    <ControllerSvg
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
                      <rect
                        id="svg_16"
                        height="20"
                        width="20"
                        y="-1"
                        x="72"
                        fill="#babcbf"
                      />
                      <rect
                        id="svg_17"
                        height="20"
                        width="20"
                        y="-1"
                        x="112"
                        fill="#babcbf"
                      />
                      <rect
                        id="svg_18"
                        height="20"
                        width="20"
                        y="-1"
                        x="30"
                        fill="#A5F70F"
                      />
                      <rect
                        id="svg_19"
                        height="20"
                        width="20"
                        y="-1"
                        x="150"
                        fill="#babcbf"
                      />
                    </ControllerSvg>
                    <ControllerBattery
                     xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-battery-4" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2"></path>
                     <line x1={7} y1={10} x2={7} y2={14}></line>
                     <line x1={10} y1={10} x2={10} y2={14}></line>
                     <line x1={13} y1={10} x2={13} y2={14}></line>
                     <line x1={16} y1={10} x2={16} y2={14}></line>
                    </ControllerBattery>
                  </Controller>
                </ControllerIcons>
              </ControllerContainer>
            </Container>
            <TabsContainer>
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
                <h1>Change Grip/Order</h1>
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
              >
                <h1>Find Controllers</h1>
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
              >
                <h1>Pairing New Controllers</h1>
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
                <Linkstyle
                  to="/menu"
                  onClick={() => {
                    close(false);
                  }}
                >
                  <h1>Close</h1>
                </Linkstyle>
              </Tabs>
            </TabsContainer>
          </Profile>
        </SettingBox>
      </Modal>
    </ModalBg>
  );
};

const ModalBg = styled(motion.div)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;
const Modal = styled(motion.div)`
  background-color: rgba(15, 15, 15, 0.95);
  z-index: 3;
  width: 90%;
  height: 90%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 40px;
`;

const SvgContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #babcbf;
`;

const SwitchIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SwitchSvg = styled.svg`
  width: 80%;
  height: auto;
  scale: 1.8;
`;

const BatteryIcons = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  scale: 1.5;
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
  justify-content: space-evenly;
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
  justify-content: center;
  h1 {
    width: 100%;
    height: 100%;
    font-size: 1.8rem;
    font-weight: 300;
    padding: 1.1rem;
    text-align: start;
    color: turquoise;
    &:hover {
      border: 3px solid lightblue;
      padding: 1rem;
      cursor: pointer;
    }
  }
`;

const Linkstyle = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1.8rem;
    font-weight: 300;
    text-align: start;
    color: turquoise;
  }
`;

const Container = styled.div`
  width: 75%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControllerContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const ControllerIcons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
const Controller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControllerSvg = styled.svg`
  scale: 0.8;
`;

const ControllerBattery = styled.svg`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scale: 1.5;
`;
