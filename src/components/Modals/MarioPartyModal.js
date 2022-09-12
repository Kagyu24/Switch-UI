import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MP from "../../img/MarioParty/CoverArt.avif";
import MP1 from "../../img/MarioParty/MP1.avif";
import MP2 from "../../img/MarioParty/MP2.avif";
import MP3 from "../../img/MarioParty/MP3.avif";
import MP4 from "../../img/MarioParty/MP4.avif";
import MP5 from "../../img/MarioParty/MP5.avif";
import { ReactComponent as Everyone } from "../../img/Ratings/Everyone.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import SimpleImageSlider from "react-simple-image-slider";

export const MarioPartyModal = ({ close }) => {
  const images = [
    { url: MP },
    { url: MP1 },
    { url: MP2 },
    { url: MP3 },
    { url: MP4 },
    { url: MP5 },
  ];
  return (
    <div>
      <ModalBg>
        <Modal
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -50 }}
        >
          <Slideshow>
            <Close onClick={() => close(false)}>
              <FontAwesomeIcon icon={faX} />
            </Close>
            <SimpleImageSlider
              style={{ margin: "0 auto" }}
              width={900}
              height={500}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlayDelay={10}
              navSize={60}
              navStyle={2}
              autoPlay={true}
            />
          </Slideshow>
          <GameContent>
            <GameInfo>
              <Rating>
                <Everyone />
                <p>Mild Cartoon Violence</p>
              </Rating>
              <Release>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  color="currentColor"
                  datatestid="CalendarIcon"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M21.8 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm1.6-20.3h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9h-1.5c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm-16.3 0h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9H7.1c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm6.1 20.3h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M29.5 4.3H27v2.2c0 1.2-.9 2.1-2.1 2.1h-1.5c-1.2 0-2.1-1-2.1-2.1V4.3H10.7v2.2c0 1.2-.9 2.1-2.1 2.1H7.1C5.9 8.6 5 7.6 5 6.5V4.3H2.5C1.1 4.3 0 5.4 0 6.7V29c0 1.4 1.1 2.5 2.5 2.5h27c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.3-1.1-2.4-2.5-2.4zm0 24.7h-27V10.4h27V29z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M13.2 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm-8.6 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0-8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"
                  ></path>
                </svg>
                <strong>Release Date:</strong>
                <br />
                <p>October 29, 2021</p>
              </Release>
              <PlayerNmb>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  color="currentColor"
                  datatestid="GroupIcon"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M9 13c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9C12.1 6.1 9 9.2 9 13z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M24.3 13c0 .7-.1 1.4-.3 2h.3c3.2 0 5.8-2.6 5.8-5.9 0-3.3-2.6-5.9-5.8-5.9-1.8 0-3.5.9-4.5 2.3 2.7 1.4 4.5 4.2 4.5 7.5zM7.4 15h.3c-.2-.6-.3-1.3-.3-2 0-3.3 1.8-6.1 4.5-7.5-1.1-1.4-2.7-2.3-4.5-2.3-3.2 0-5.8 2.6-5.8 5.9 0 3.3 2.6 5.9 5.8 5.9zm5.1 5.7c-1.8-.8-3.2-2.2-4.1-3.9-.3 0-.6-.1-1-.1C3.3 16.8 0 19.6 0 23h8.2c1.2-1 2.6-1.8 4.3-2.3zm11.8-3.9c-.3 0-.7 0-1 .1-.9 1.7-2.3 3.1-4.1 3.9 1.6.5 3.1 1.3 4.2 2.3h8.2c.2-3.5-3.2-6.3-7.3-6.3zm-8.4 5.1c-4.8 0-8.7 3-9 6.7h18c-.4-3.8-4.3-6.7-9-6.7z"
                  ></path>
                </svg>
                <strong>No. of players:</strong>
                <br />
                <p>Single Player, Local Co-op, Online</p>
              </PlayerNmb>
              <GameSize>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  color="currentColor"
                  datatestid="StorageIcon"
                  viewBox="0 0 32 32"
                >
                  <ellipse
                    cx="16"
                    cy="4.234"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    rx="13"
                    ry="4.234"
                  ></ellipse>
                  <path
                    fill="currentColor"
                    d="M3 15.71v5.293c0 .408.239.781.616.935C7.085 23.35 11.362 24.192 16 24.192s8.915-.84 12.384-2.254c.377-.154.616-.527.616-.935V15.71c-3.573 1.57-8.084 2.515-13 2.515S6.573 17.28 3 15.71z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M3 7.852v5.292c0 .408.239.782.616.935 3.469 1.414 7.746 2.254 12.384 2.254s8.915-.84 12.384-2.254c.377-.153.616-.527.616-.935V7.852c-3.573 1.57-8.084 2.514-13 2.514S6.573 9.422 3 7.852zm26 15.767c-3.573 1.57-8.084 2.514-13 2.514S6.573 25.19 3 23.62v4.147C3 30.104 8.82 32 16 32s13-1.896 13-4.234"
                  ></path>
                </svg>
                <strong>Game File size:</strong>
                <p>2.9 GB</p>
              </GameSize>
            </GameInfo>
            <Description>
              <DescriptP>
                Calling all superstars! The Mario Party™ series is back with 5
                classic boards from the Nintendo 64 Mario Party games. Race to
                get the most stars (and sabotage your opponents) on boards like
                the stellar Space Land or the spooky Horror Land! Party at your
                own pace by suspending a game and picking up right where you
                left off! The tides can turn quickly in Mario Party, so stay
                vigilant, partygoers. All modes can be played online*, too!
                <br />
                <br />
              </DescriptP>
              <strong>
                Play 100 classic minigames from the Nintendo 64 and Nintendo
                GameCube™ games and more in Mt. Minigames!
              </strong>
              <br />
              <DescriptP>
                {" "}
                Try your hand at a superstar collection of minigames from
                throughout the Mario Party series. Whether you are saving up
                coins for stars in board game mode or enjoy one of the 7 modes
                included in Mt. Minigames, there is nothing quite like being the
                last one standing in Bumper Balls or the first team making it
                out of the darkness in Dungeon Duos. All minigames are played
                with button controls, so you can stick to the Joy-Con™
                controller or bust out the Nintendo Switch™ Pro Controller or a
                Nintendo Switch Lite system.
              </DescriptP>
              <br />
              <br />
              <strong>Party with superstars near or far</strong>
              <br />
              <DescriptP>
                Bring the party anytime, anywhere with same-system**, local
                wireless**, or online* play. Use stickers to praise or pester
                fellow players as you race across the board collecting stars.
                All modes support online multiplayer, so you can hop in with
                friends for a few minigames or a marathon 30-turn match. Victory
                is just as sweet (and stealing stars is just as satisfying) from
                anywhere across the globe.
              </DescriptP>

              <div>
                <StoreBtn>
                  <span>Go to the Nintendo E-Shop!</span>
                </StoreBtn>
              </div>
            </Description>
          </GameContent>
        </Modal>
      </ModalBg>
    </div>
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
  width: 75%;
  height: 95%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 40px;
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

const Slideshow = styled.div`
  width: 100%;
  height: 55%;
  position: relative;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
`;

const GameContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  scroll-behavior: smooth;
  background: rgba(0, 0, 0, 0.5);
`;

const GameInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 40%;
  height: 75%;
  border-right: 1px solid white;
  padding-left: 10px;
  padding-right: 0;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;
  flex-direction: row;
  gap: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Release = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;
  flex-direction: row;
  gap: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const PlayerNmb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;
  flex-direction: row;
  gap: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const GameSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;
  flex-direction: row;
  gap: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 1rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptP = styled.p`
  font-weight: 100;
  margin: 5px 5px;
  padding: 5px;
`;

const StoreBtn = styled.button`
  color: white;
  font-family: "Mulish", sans-serif;
  font-size: 1em;
  font-weight: 600;
  display: block;
  border: 1px solid rgb(210, 0, 18);
  background-color: rgb(210, 0, 18);
  width: 15rem;
  height: 3rem;
  padding: 0;
  margin: 15px;
  border-radius: 0.25rem;
`;
