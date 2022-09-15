import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import LinkTP from "../../img/CoverArt/linkTP.webp";
import MK from "../../img/CoverArt/Library/MarioKart.webp";
import ACNH from "../../img/CoverArt/AnimalCrossing.webp";
import PM from "../../img/CoverArt/PaperMario.webp";
import MH from "../../img/CoverArt/Library/MonsterHunterRise.webp";
import BotW from "../../img/CoverArt/Library/Botw.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faPencil } from "@fortawesome/free-solid-svg-icons";

export const PlayActivity = () => {
  return (
    <ProfileContentContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <MeContainer>
        <ProfileImageContainer>
          <Images src={LinkTP} alt="Link from Twilight Princess" />
        </ProfileImageContainer>
        <AboutMeSection>
          <AboutName>
            <h1>Kagyu</h1>
            <FontAwesomeIcon icon={faPencil} />
          </AboutName>
          <AboutGame>
            <GameImageContainer>
              <Images src={MK} alt="Mario Kart 8 cover art" />
            </GameImageContainer>
            <OnlineContainer>
              <Online>
                <GreenSquare></GreenSquare>
                <h1>Online</h1>
              </Online>
              <div>
                <h1>Mario Kart 8 Deluxe</h1>
              </div>
            </OnlineContainer>
          </AboutGame>
          <FriendCodeContainer>
            Friend Code: SW-1830-8931-4706
          </FriendCodeContainer>
        </AboutMeSection>
      </MeContainer>
      <ActivityContainer>
        <PlayText>
          <h1>Play Activity</h1>
          <div>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
        </PlayText>
        <ActivityInfoContainer>
          <ActivityInfo>
            <ActivityImageContainer>
              <ActivityImage
                src={ACNH}
                alt="Animal Crossing New Horizons cover art"
              />
            </ActivityImageContainer>
            <ActivityInfoText>
              <h2>Animal Crossing: New Horizons</h2>
              <p>Played for 5 hours</p>
            </ActivityInfoText>
          </ActivityInfo>
          <ActivityInfo>
            <ActivityImageContainer>
              <ActivityImage
                src={PM}
                alt="Paper Mario the Origami King cover art"
              />
            </ActivityImageContainer>
            <ActivityInfoText>
              <h2>Paper Mario: The Origami King</h2>
              <BlueText>First played 2 days ago</BlueText>
            </ActivityInfoText>
          </ActivityInfo>
          <ActivityInfo>
            <ActivityImageContainer>
              <ActivityImage src={MK} alt="Mario Kart 8 Deluxe cover art" />
            </ActivityImageContainer>
            <ActivityInfoText>
              <h2>Mario Kart 8 Deluxe</h2>
              <BlueText>Played for 65 hours or more</BlueText>
            </ActivityInfoText>
          </ActivityInfo>
          <ActivityInfo>
            <ActivityImageContainer>
              <ActivityImage src={MH} alt="Monster Hunter Rise cover art" />
            </ActivityImageContainer>
            <ActivityInfoText>
              <h2>Monster Hunter Rise</h2>
              <BlueText>Played for 55 hours or more</BlueText>
            </ActivityInfoText>
          </ActivityInfo>
          <ActivityInfo>
            <ActivityImageContainer>
              <ActivityImage src={BotW} alt="Breath of the Wild cover art" />
            </ActivityImageContainer>
            <ActivityInfoText>
              <h2>The Legend of Zelda: Breath of the Wild</h2>
              <p>Played for 30 hours or more</p>
            </ActivityInfoText>
          </ActivityInfo>
        </ActivityInfoContainer>
      </ActivityContainer>
    </ProfileContentContainer>
  );
};

const ProfileContentContainer = styled(motion.div)`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: scroll;
`;

const MeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImageContainer = styled.div`
  width: 30%;
  height: 90%;
  margin-left: 5%;
  border-radius: 10px;
  background-color: #011d78;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
`;

const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const AboutMeSection = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
`;

const AboutName = styled.div`
  width: 100%;
  padding: 5px;
  height: 20%;
  border-top: 1px solid #babcbf;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 300;
  }
`;

const AboutGame = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  gap: 10px;
  border-top: 1px solid #babcbf;
  border-bottom: 1px solid #babcbf;
`;

const GameImageContainer = styled.div`
  width: 15%;
  height: 100%;
`;

const OnlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const Online = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #a5f70f;
`;

const GreenSquare = styled.div`
  width: 15px;
  height: 15px;
  background: #a5f70f;
  border-radius: 3px;
`;

const FriendCodeContainer = styled.div`
  font-size: 1.25rem;
  letter-spacing: 2px;
  font-weight: 300;
`;

const ActivityContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const PlayText = styled.span`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  h1 {
    font-size: 1.7rem;
    font-weight: 400;
  }
`;

const ActivityInfoContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ActivityInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;
  border-bottom: 1px solid #babcbf;
  padding: 10px;
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    font-weight: 300;
  }
`;

const ActivityInfoText = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    font-weight: 300;
  }
`;

const ActivityImageContainer = styled.div`
  width: 10%;
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlueText = styled.p`
  color: #40e0d0;
  font-size: 1rem;
  font-weight: 300;
`;
