import React, { useState } from "react";
import styled from "styled-components";
import LinkTP from "../../img/CoverArt/linkTP.webp";
import { motion } from "framer-motion";
import { SideMenu } from "../../components/Menu/SideMenu";
import { Link } from "react-router-dom";

export const OptionsBox = () => {
  const [openSideMenu, setSideMenu] = useState(false);
  return (
    <Showcase>
      {openSideMenu && <SideMenu close={setSideMenu} />}
      <OptionsContainer
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.8, delay: 0.5 }}
      >
        <OptionBubble
          to="/profile"
          whileHover={{
            borderColor: ["#078fde", "#8bdefc", "#078fde"],
            transition: {
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        >
          <ProfileImgContainer>
            <ProfileImg
              src={LinkTP}
              alt="Profile/ Link Legend of Zelda Twilight Princess"
              draggable="false"
            />
          </ProfileImgContainer>
          <div>
            <OptionTitle>&nbsp;&nbsp;Kagyu's Page</OptionTitle>
          </div>
        </OptionBubble>
        <OptionBubble
          to="/menu"
          whileHover={{
            borderColor: ["#078fde", "#8bdefc", "#078fde"],
            transition: {
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        >
          <NewsContainer style={{ background: "#f95455" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="White"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
              <line x1="8" y1="8" x2="12" y2="8"></line>
              <line x1="8" y1="12" x2="12" y2="12"></line>
              <line x1="8" y1="16" x2="12" y2="16"></line>
            </svg>
          </NewsContainer>
          <div>
            <OptionTitle>&nbsp;&nbsp;&nbsp;News Feed</OptionTitle>
          </div>
        </OptionBubble>
        <OptionBubble
          to="/menu"
          whileHover={{
            borderColor: ["#078fde", "#8bdefc", "#078fde"],
            transition: {
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        >
          <StoreContainer style={{ background: "#ddc154" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="White"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="7 10 12 4 17 10"></polyline>
              <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
              <circle cx="12" cy="15" r="2"></circle>
            </svg>
          </StoreContainer>
          <div>
            <OptionTitle>Nintendo eShop</OptionTitle>
          </div>
        </OptionBubble>
        <OptionBubble
          to="/menu"
          whileHover={{
            borderColor: ["#078fde", "#8bdefc", "#078fde"],
            transition: {
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        >
          <GalleryContainer style={{ background: "#5acdff" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="White"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <line x1="4" y1="16" x2="20" y2="16"></line>
              <path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4"></path>
              <path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2"></path>
              <line x1="14" y1="7" x2="14.01" y2="7"></line>
            </svg>
          </GalleryContainer>
          <div>
            <OptionTitle>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Album</OptionTitle>
          </div>
        </OptionBubble>
        <OptionBubble
          to="/menu"
          whileHover={{
            borderColor: ["#078fde", "#8bdefc", "#078fde"],
            transition: {
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        >
          <OptionContainer>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(-190,320) scale(0.140000,-0.140000) rotate(-40 50 500)"
                fill="#fff"
                stroke="White"
                strokeWidth="1.5"
              >
                <path
                  d="M1859 4162 c-23 -20 -24 -25 -27 -173 -3 -147 -4 -153 -28 -171 l-24
                       -19 0 -270 0 -270 25 -23 25 -23 0 -618 0 -618 -25 -23 -25 -23 0 -270 0 -270
                       25 -19 25 -20 0 -277 0 -277 428 5 c477 4 479 4 627 78 138 67 248 177 321
                       319 83 160 79 88 79 1295 0 1191 4 1117 -69 1270 -88 185 -242 317 -451 386
                       -68 23 -83 23 -476 27 -391 3 -406 3 -430 -16z m844 -158 c115 -29 221 -98
                       300 -194 47 -56 102 -168 116 -238 8 -36 11 -375 11 -1085 0 -892 -2 -1041
                       -15 -1092 -47 -183 -182 -334 -361 -403 l-69 -26 -347 -4 -348 -3 0 1530 0
                       1531 326 0 c264 0 338 -3 387 -16z"
                />
                <path
                  d="M2490 3818 c-48 -25 -90 -89 -90 -138 0 -14 10 -46 23 -70 24 -48 88
                       -90 137 -90 14 0 46 10 70 23 48 24 90 88 90 137 0 49 -42 113 -90 138 -24 12
                       -56 22 -70 22 -14 0 -46 -10 -70 -22z"
                />
                <path
                  d="M2170 3498 c-48 -25 -90 -89 -90 -138 0 -14 10 -46 23 -70 24 -48 88
                       -90 137 -90 49 0 113 42 138 90 12 24 22 56 22 70 0 14 -10 46 -22 70 -25 48
                       -89 90 -138 90 -14 0 -46 -10 -70 -22z"
                />
                <path
                  d="M2810 3498 c-48 -25 -90 -89 -90 -138 0 -14 10 -46 23 -70 24 -48 88
                       -90 137 -90 49 0 113 42 138 90 12 24 22 56 22 70 0 49 -42 113 -90 138 -24
                       12 -56 22 -70 22 -14 0 -46 -10 -70 -22z"
                />
                <path
                  d="M2490 3178 c-48 -25 -90 -89 -90 -138 0 -14 10 -46 23 -70 24 -48 88
                       -90 137 -90 14 0 46 10 70 23 48 24 90 88 90 137 0 49 -42 113 -90 138 -24 12
                       -56 22 -70 22 -14 0 -46 -10 -70 -22z"
                />
                <path
                  d="M2460 2384 c-153 -41 -262 -161 -292 -322 -48 -257 197 -502 454
                       -454 219 41 369 246 330 452 -30 166 -138 284 -297 325 -72 18 -123 18 -195
                       -1z m226 -180 c132 -81 153 -263 43 -373 -53 -53 -112 -75 -188 -69 -240 17
                       -305 343 -89 452 74 38 163 34 234 -10z"
                />
              </g>
            </svg>
          </OptionContainer>
          <div>
            <OptionTitle>&nbsp;&nbsp;&nbsp;Controllers</OptionTitle>
          </div>
        </OptionBubble>
        <OptionBubble
          to="/menu"
          whileHover={{
            borderColor: ["#078fde", "#8bdefc", "#078fde"],
            transition: {
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        >
          <OptionContainer>
            <Link to="/settings">
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
            </Link>
          </OptionContainer>
          <div>
            <OptionTitle>System Settings</OptionTitle>
          </div>
        </OptionBubble>{" "}
        <OptionBubble
          to="/menu"
          onClick={() => {
            setSideMenu(true);
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
          <OptionContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="White"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
              <line x1="12" y1="4" x2="12" y2="12"></line>
            </svg>
          </OptionContainer>
          <div>
            <OptionTitle>&nbsp;&nbsp;&nbsp;Sleep Mode</OptionTitle>
          </div>
        </OptionBubble>
      </OptionsContainer>
    </Showcase>
  );
};

const Showcase = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const OptionsContainer = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.3);
  width: 48%;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 10%;
  left: 27%;
  border-radius: 100px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding-left: 10px;
  padding-right: 10px;
`;

const OptionBubble = styled(Link)`
  width: 10%;
  height: 80%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  &:hover {
    border: 4px solid #078fde;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`;
const OptionTitle = styled.div`
  color: #fff;
  font-size: 1.25em;
  font-weight: 600;
  margin-top: 5px;
  margin-left: -35px;
  white-space: nowrap;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
  visibility: hidden;
  ${OptionBubble}:hover & {
    visibility: visible;
  }
`;

const ProfileImgContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100px;
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NewsContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StoreContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
