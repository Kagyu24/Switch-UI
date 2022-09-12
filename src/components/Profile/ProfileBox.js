import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import LinkTP from "../../img/CoverArt/linkTP.webp";
import ProfilePic from "../../img/CoverArt/profilepic.webp";
import MK from "../../img/CoverArt/Library/MarioKart.webp";

export const ProfileBox = () => {
  return (
    <div>
      <div class="container">
        <div>
          <div class="circle"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5"></div>
          <div class="circle6"></div>
          <div class="circle7"></div>
          <div class="circle8"></div>
          <div class="circle9"></div>
        </div>
      </div>
      <Showcase>
        <ProfileBoxx>
          <ProfileTitle>
            <ProfileImageContainer>
              <ProfileImage src={LinkTP} alt="Link from Twilight Princess" />
            </ProfileImageContainer>
            <h1>Kagyu's Page</h1>
          </ProfileTitle>
          <Profile>
            <TabsContainer>
              <Tabs>
                <h1>Profile</h1>
              </Tabs>
              <Tabs>
                <h1>Play Activity</h1>
              </Tabs>
              <Tabs>
                <h1>Add Friend</h1>
              </Tabs>
            </TabsContainer>
            <ProfileContentContainer>
              <MeContainer>
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
                      Hi, my name is Justin Lemos. I've been learning about
                      front-end web development since late 2021. In that time,
                      I've learned a lot about myself and what I wanna do as a
                      career. I hope you'll continue through this site and get
                      in touch with me!
                      <br />I saw a set of images on Twitter about a year ago of
                      this concept on{" "}
                      <a
                        href="https://twitter.com/KirbyKid__/status/1493290175618764804"
                        target="_blank"
                        rel="noreferrer"
                      >
                        this post.
                      </a>{" "}
                      Turns out it was a real mod for the Switch on{" "}
                      <a href="https://themezer.net/packs/Lava-Lamp-Blue-373">
                        themezer.net
                      </a>{" "}
                      that was from a mock-up from Reddit. Anyway, I felt
                      inspired to try making this my first real big project, so
                      I hope you enjoy!
                    </p>
                  </AboutMe>
                  <AboutGame>
                    <div class="game-img-container">
                      <Images src={MK} alt="Mario Kart 8 Cover Art" />
                    </div>
                    <div class="online-container">
                      <div class="online">
                        <div class="green-square"></div>
                        <h1>Online</h1>
                      </div>
                      <div>
                        <h1 class="game-title">Mario Kart 8 Deluxe</h1>
                      </div>
                    </div>
                  </AboutGame>
                </AboutMeSection>
              </MeContainer>
              <div class="social-container">
                <h1>Follow me on social media!</h1>
                <div class="social-cards-container">
                  <a
                    href="https://twitter.com/Kagyu24"
                    target="_blank"
                    rel="noreferrer"
                    class="social-card"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/justinlemos24"
                    target="_blank"
                    rel="noreferrer"
                    class="social-card"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/justin.lemos.9"
                    target="_blank"
                    rel="noreferrer"
                    class="social-card"
                  >
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                  <a
                    href="https://www.justinlemos.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="social-card"
                  >
                    <i class="fa-solid fa-j"></i>
                  </a>
                  <a
                    href="https://github.com/Kagyu24"
                    target="_blank"
                    rel="noreferrer"
                    class="social-card"
                  >
                    <i class="fa-brands fa-square-github"></i>
                  </a>
                </div>
              </div>
            </ProfileContentContainer>
          </Profile>
        </ProfileBoxx>
      </Showcase>
    </div>
  );
};

const Showcase = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileBoxx = styled(motion.div)`
  width: 90vw;
  height: 90vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  border-radius: 40px;
  position: absolute;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ProfileTitle = styled.span`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding-left: 5rem;
  border-bottom: 1px solid white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, 0.75);
  padding-top: 10px;
  padding-bottom: 10px;
  h1 {
    font-weight: 400;
  }
`;

const ProfileImageContainer = styled.div`
  width: 4%;
  height: 100%;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: green;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Profile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TabsContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 10px 15px 25px rgba(0, 0, 0, 0.5);
`;

const Tabs = styled(motion.div)`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  h1 {
    width: 100%;
    font-weight: 300;
    padding: 25px;
    text-align: start;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      border: 3px solid lightblue;
      padding: 22px;
      color: turquoise;
    }
  }
`;

const ProfileContentContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const MeContainer = styled.div`
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

const AboutMe = styled.div`
  width: 100%;
  height: 33.33%;
`;

const AboutName = styled.div`
  width: 100%;
  height: 33.33%;
`;

const AboutGame = styled.div`
  width: 100%;
  height: 33.33%;
`;
