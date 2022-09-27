import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Screenshot from "../../img/Screenshots/screenshot1.webp";
import Screenshot1 from "../../img/Screenshots/screenshot2.webp";
import Screenshot2 from "../../img/Screenshots/screenshot3.webp";
import Screenshot3 from "../../img/Screenshots/screenshot4.webp";
import Screenshot4 from "../../img/Screenshots/screenshot5.webp";
import Screenshot5 from "../../img/Screenshots/screenshot6.webp";
import Screenshot6 from "../../img/Screenshots/screenshot7.webp";
import Screenshot7 from "../../img/Screenshots/screenshot8.webp";
import Screenshot8 from "../../img/Screenshots/screenshot9.webp";
import Screenshot9 from "../../img/Screenshots/screenshot10.webp";
import Screenshot10 from "../../img/Screenshots/screenshot11.webp";
import Screenshot11 from "../../img/Screenshots/screenshot12.webp";
import Screenshot12 from "../../img/Screenshots/screenshot13.webp";
import Screenshot13 from "../../img/Screenshots/screenshot14.webp";
import Screenshot14 from "../../img/Screenshots/screenshot15.webp";
import Screenshot15 from "../../img/Screenshots/screenshot16.webp";
import Screenshot16 from "../../img/Screenshots/screenshot17.webp";
import Screenshot17 from "../../img/Screenshots/screenshot18.webp";
import Screenshot18 from "../../img/Screenshots/screenshot19.webp";
import Screenshot19 from "../../img/Screenshots/screenshot20.webp";

import { LibraryControlButtons } from "../GamesLibrary/LibraryComponents/LibraryControlButtons";

export const AlbumBox = () => {
  return (
    <Showcase>
      <Albumbox
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.8, delay: 0.5 }}
      >
        <ViewAll>
          <Link to="/menu">
            <View>
              <ViewSVG
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
              </ViewSVG>
              <h1>Album</h1>
            </View>
          </Link>
          <TopText>All Screenshots and Videos (20)</TopText>
        </ViewAll>
        <GameIcons>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot}
                alt="Metroid Dread cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt src={Screenshot1} alt="/" draggable="false" />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot2}
                alt="Kirby and the Forgotten Lands cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot3}
                alt="Super Smash Bros Ultimate cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot4}
                alt="Mario Party Superstars cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot5}
                alt="Bayonetta cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot6}
                alt="Breath of the Wild cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot7}
                alt="Cozy Grove cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot8}
                alt="Fire Emblem Three Houses cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot9}
                alt="Hyrule Warriors: Age of Calamity cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot10}
                alt="Kirby's Dream Buffet cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot11}
                alt="Mario Golf: Super Rush cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot12}
                alt="Mario Kart 8 Deluxe cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot13}
                alt="Monster Hunter Rise cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot14}
                alt="Stardew Valley cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot15}
                alt="Staxel cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot16}
                alt="Super Mario 3D Allstars cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot17}
                alt="Xenoblade Chronicles 3 cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot18}
                alt="Xenoblade Chronicles 3 cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
          <GameCard
            whileHover={{
              borderColor: ["#078fde", "#8bdefc", "#078fde"],
              transition: {
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <CoverArtContain>
              <CoverArt
                src={Screenshot19}
                alt="Xenoblade Chronicles 3 cover art"
                draggable="false"
              />
            </CoverArtContain>
          </GameCard>
        </GameIcons>
        <LibraryControlButtons />
      </Albumbox>
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

const Albumbox = styled(motion.div)`
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

const TopText = styled.h1`
  color: #fff;
  margin-bottom: 6px;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
`;

const ViewSVG = styled.svg`
  scale: 0.8;
`;

const GameIcons = styled.div`
  width: 90%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 19%);
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  row-gap: 10px;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const GameCard = styled(motion.div)`
  width: 100%;
  height: 10rem;
  border-radius: 30px;
  &:hover {
    border: 4px solid #078fde;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`;

const CoverArtContain = styled.div`
  width: 100%;
  height: 100%;
`;

const CoverArt = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;
