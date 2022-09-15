import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProfilePic from "../../img/CoverArt/profilepic.webp";
import MK from "../../img/CoverArt/Library/MarioKart.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJ } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faFacebookSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const ProfileContainer = () => {
  return (
    <ProfileContentContainerr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <MeContainerr>
        <MeImageContainer>
          <Images src={ProfilePic} alt="Myself" />
        </MeImageContainer>
        <AboutMeSection>
          <AboutName>
            <h1>Justin Lemos</h1>
          </AboutName>
          <AboutMe
            style={{
              borderTop: "1px solid rgba(255,255,255,.3)",
              borderBottom: "1px solid rgba(255,255,255,.3)",
            }}
          >
            <h1>About Me:</h1>
            <p>
              Hi, my name is Justin Lemos. I've been learning about front-end
              web development since late 2021. In that time, I've learned a lot
              about myself and what I wanna do as a career. I hope you'll
              continue through this site and get in touch with me!
              <br />I saw a set of images on Twitter about a year ago of this
              concept on{" "}
              <Links
                href="https://twitter.com/KirbyKid__/status/1493290175618764804"
                target="_blank"
                rel="noreferrer"
              >
                this post.
              </Links>{" "}
              Turns out it was a real mod for the Switch on{" "}
              <Links href="https://themezer.net/packs/Lava-Lamp-Blue-373">
                themezer.net
              </Links>{" "}
              that was from a mock-up from Reddit. Anyway, I felt inspired to
              try making this my first real big project, so I hope you enjoy!
            </p>
          </AboutMe>
          <AboutGame>
            <GameImageContainer>
              <Images src={MK} alt="Mario Kart 8 Cover Art" />
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
        </AboutMeSection>
      </MeContainerr>
      <SocialContainer>
        <h1>Follow me on social media!</h1>
        <SocialCardContainer>
          <SocialCard
            href="https://twitter.com/Kagyu24"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </SocialCard>
          <SocialCard
            href="https://www.linkedin.com/in/justinlemos24"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
          </SocialCard>
          <SocialCard
            href="https://www.facebook.com/justin.lemos.9"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} className="facebook" />
          </SocialCard>
          <SocialCard
            href="https://www.justinlemos.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faJ} className="icons" />
          </SocialCard>
          <SocialCard
            href="https://github.com/Kagyu24"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} className="icons" />
          </SocialCard>
        </SocialCardContainer>
      </SocialContainer>
    </ProfileContentContainerr>
  );
};
export default ProfileContainer;

const ProfileContentContainerr = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2.5%;
  overflow: hidden;
  padding: 1.5rem;
`;

const MeContainerr = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  padding-top: 50px;
`;

const MeImageContainer = styled.div`
  width: 40%;
  height: 80%;
  padding-left: 50px;
  display: block;
`;
const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
`;

const AboutMeSection = styled.div`
  width: 75%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 30px;
  padding-right: 30px;
`;

const Links = styled.a`
  color: #67c4d8;
  &:visited {
    color: #6657bc;
  }
`;

const AboutMe = styled.div`
  width: 100%;
  height: 33.33%;
  display: flex;
  height: 55%;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 5px;
  h1 {
    font-weight: 400;
    font-size: 1.5rem;
  }
  p {
    font-weight: 400;
  }
`;

const AboutName = styled.div`
  width: 100%;
  height: 15%;
  h1 {
    font-weight: 400;
  }
`;

const AboutGame = styled.div`
  width: 100%;
  height: 33.33%;
  padding-top: 5px;
  margin-top: 0.5rem;
  display: flex;
  gap: 10px;
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

const SocialContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: -8%;
  gap: 2rem;
`;

const SocialCardContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const SocialCard = styled(motion.a)`
  width: 15%;
  height: 115%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.9);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
`;
