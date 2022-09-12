import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Metroid from "../../img/CoverArt/metroiddread.webp";
import Pokemon from "../../img/CoverArt/pokemonlegendsarceus.webp";
import Kirby from "../../img/CoverArt/kirby.webp";
import Smash from "../../img/CoverArt/smashbros.webp";
import MarioParty from "../../img/CoverArt/marioparty.webp";
import Bayonetta from "../../img/CoverArt/Library/Bayonetta.avif";
import BotW from "../../img/CoverArt/Library/Botw.webp";
import Cozy from "../../img/CoverArt/Library/CozyGrove.webp";
import FireEmb from "../../img/CoverArt/Library/FE3Houses.webp";
import Hyrule from "../../img/CoverArt/Library/HyruleWarriorsAoC.webp";
import KirbyBuffet from "../../img/CoverArt/Library/KirbyDreamBuffet.webp";
import MarioGolf from "../../img/CoverArt/Library/MarioGolf.webp";
import MarioKart from "../../img/CoverArt/Library/MarioKart.webp";
import MHRise from "../../img/CoverArt/Library/MonsterHunterRise.webp";
import Stardew from "../../img/CoverArt/Library/StardewValley.webp";
import Staxel from "../../img/CoverArt/Library/Staxel.webp";
import Mario3D from "../../img/CoverArt/Library/SuperMario3DAllStars.webp";
import Xenoblade from "../../img/CoverArt/Library/Xenoblade.avif";
import { MetroidModal } from "../Modals/MetroidModal";
import { PokemonModal } from "../Modals/PokemonModal";
import { KirbyModal } from "../Modals/KirbyModal";
import { SmashModal } from "../Modals/SmashModal";
import { MarioPartyModal } from "../Modals/MarioPartyModal";
import { LibraryControlButtons } from "./LibraryControlButtons";
import { LibraryControlButtonsTop } from "./LibraryControlButtonsTop";

export const LibraryBox = () => {
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

      <Librarybox
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
          <LibraryControlButtonsTop />
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
                src={Bayonetta}
                alt="Bayonetta cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Bayonetta</GameTitleh1>
            </GameTitle>
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
                src={BotW}
                alt="Breath of the Wild cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>The Legend of Zelda: Breath of the Wild</GameTitleh1>
            </GameTitle>
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
                src={Cozy}
                alt="Cozy Grove cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Cozy Grove</GameTitleh1>
            </GameTitle>
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
                src={FireEmb}
                alt="Fire Emblem Three Houses cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Fire Emblem: Three Houses</GameTitleh1>
            </GameTitle>
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
                src={Hyrule}
                alt="Hyrule Warriors: Age of Calamity cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Hyrule Warriors: Age of Calamity</GameTitleh1>
            </GameTitle>
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
                src={KirbyBuffet}
                alt="Kirby's Dream Buffet cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Kirby's Dream Buffet</GameTitleh1>
            </GameTitle>
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
                src={MarioGolf}
                alt="Mario Golf: Super Rush cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Mario Golf: Super Rush</GameTitleh1>
            </GameTitle>
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
                src={MarioKart}
                alt="Mario Kart 8 Deluxe cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Mario Kart 8 Deluxe</GameTitleh1>
            </GameTitle>
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
                src={MHRise}
                alt="Monster Hunter Rise cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Monster Hunter Rise</GameTitleh1>
            </GameTitle>
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
                src={Stardew}
                alt="Stardew Valley cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Stardew Valley</GameTitleh1>
            </GameTitle>
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
              <CoverArt src={Staxel} alt="Staxel cover art" draggable="false" />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Staxel</GameTitleh1>
            </GameTitle>
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
                src={Mario3D}
                alt="Super Mario 3D Allstars cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Super Mario 3D Allstars</GameTitleh1>
            </GameTitle>
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
                src={Xenoblade}
                alt="Xenoblade Chronicles 3 cover art"
                draggable="false"
              />
            </CoverArtContain>
            <GameTitle>
              <GameTitleh1>Xenoblade Chronicles 3</GameTitleh1>
            </GameTitle>
          </GameCard>
        </GameIcons>
        <LibraryControlButtons />
      </Librarybox>
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

const Librarybox = styled(motion.div)`
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
const GameIcons = styled.div`
  width: 90%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(6, 15.8%);
  column-gap: 20px;
  row-gap: 10px;
  margin-top: 1rem;
`;

const GameCard = styled(motion.div)`
  height: 85%;
  width: 90%;
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
