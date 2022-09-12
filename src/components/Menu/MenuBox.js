import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Metroid from "../../img/CoverArt/metroiddread.webp";
import Pokemon from "../../img/CoverArt/pokemonlegendsarceus.webp";
import Kirby from "../../img/CoverArt/kirby.webp";
import Smash from "../../img/CoverArt/smashbros.webp";
import MarioParty from "../../img/CoverArt/marioparty.webp";
import { MetroidModal } from "./../Modals/MetroidModal";
import { PokemonModal } from "./../Modals/PokemonModal";
import { KirbyModal } from "./../Modals/KirbyModal";
import { SmashModal } from "./../Modals/SmashModal";
import { MarioPartyModal } from "./../Modals/MarioPartyModal";

export const MenuBox = () => {
  const [openMetroid, setOpenMetroid] = useState(false);
  const [openPokemon, setOpenPokemon] = useState(false);
  const [openKirby, setOpenKirby] = useState(false);
  const [openSmash, setOpenSmash] = useState(false);
  const [openMarioParty, setOpenMarioParty] = useState(false);
  return (
    <Showcase>
      {openMetroid && <MetroidModal close={setOpenMetroid} />}
      {openPokemon && <PokemonModal close={setOpenPokemon} />}
      {openKirby && <KirbyModal close={setOpenKirby} />}
      {openSmash && <SmashModal close={setOpenSmash} />}
      {openMarioParty && <MarioPartyModal close={setOpenMarioParty} />}

      <Menubox
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.8, delay: 0.5 }}
      >
        <ViewAll>
          <Link to="/gamelibrary">
            <View href="#">
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
              <h1>View All Software</h1>
            </View>
          </Link>
        </ViewAll>
        <GameIcons>
          <GameCard
            onClick={() => {
              setOpenMetroid(true);
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
            <CoverArtContain>
              <CoverArt
                src={Metroid}
                alt="Metroid Dread cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Metroid Dread</GameTitleh1>
            </GameTitle>
          </GameCard>
          <GameCard
            onClick={() => {
              setOpenPokemon(true);
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
            <CoverArtContain>
              <CoverArt
                src={Pokemon}
                alt="Pokemon Legends Arceus cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Pokemon Legends Arceus</GameTitleh1>
            </GameTitle>
          </GameCard>
          <GameCard
            onClick={() => {
              setOpenKirby(true);
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
            <CoverArtContain>
              <CoverArt
                src={Kirby}
                alt="Kirby and the Forgotten Lands cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Kirby and the Forgotten Land</GameTitleh1>
            </GameTitle>
          </GameCard>
          <GameCard
            onClick={() => {
              setOpenSmash(true);
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
            <CoverArtContain>
              <CoverArt
                src={Smash}
                alt="Super Smash Bros Ultimate cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Super Smash Bros. Ultimate</GameTitleh1>
            </GameTitle>
          </GameCard>
          <GameCard
            onClick={() => {
              setOpenMarioParty(true);
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
            <CoverArtContain>
              <CoverArt
                src={MarioParty}
                alt="Mario Party Superstars cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Mario Party Superstars</GameTitleh1>
            </GameTitle>
          </GameCard>
        </GameIcons>
      </Menubox>
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
  overflow: hidden;
`;

const Menubox = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.3);
  width: 83%;
  height: 43%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 8%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  padding: 15px;
`;

const ViewAll = styled.span`
  width: 90%;
  height: auto;
  border-bottom: 3px solid #fff;
`;
const View = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: #fff;
  margin-bottom: 5px;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
  &:active {
    color: white;
  }
`;
const ViewSVG = styled.svg`
  scale: 0.8;
`;
const GameIcons = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const GameCard = styled(motion.div)`
  height: 83%;
  width: 17.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const GameTitle = styled.div`
  width: auto;
  text-align: center;
`;
const GameTitleh1 = styled(motion.h1)`
  color: #fff;
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 10px;
  white-space: nowrap;
  text-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
  visibility: hidden;
  ${GameCard}:hover & {
    visibility: visible;
  }
`;
