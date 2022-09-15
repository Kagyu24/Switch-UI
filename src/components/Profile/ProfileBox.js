import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./icons.css";
import LinkTP from "../../img/CoverArt/linkTP.webp";
import ProfileContainer from "./ProfileContainer";
import { PlayActivity } from "./PlayActivity";
import { Link } from "react-router-dom";
import { ContactUs } from "./AddFriend";

export const ProfileBox = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openPlayActive, setOpenPlayActive] = useState(false);
  const [openAddFriend, setOpenAddFriend] = useState(false);
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
        <ProfileBoxx
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.8, delay: 0.5 }}
        >
          <ProfileTitle>
            <ProfileImageContainer>
              <ProfileImage src={LinkTP} alt="Link from Twilight Princess" />
            </ProfileImageContainer>
            <h1>Kagyu's Page</h1>
          </ProfileTitle>
          <Profile>
            <TabsContainer>
              <Tabs
                onClick={() => {
                  setOpenProfile(true);
                  setOpenAddFriend(false);
                  setOpenPlayActive(false);
                }}
              >
                <TabTextBorder>Profile</TabTextBorder>
              </Tabs>
              <Tabs
                onClick={() => {
                  setOpenPlayActive(true);
                  setOpenProfile(false);
                  setOpenAddFriend(false);
                }}
              >
                <TabTextBorder>Play Activity</TabTextBorder>
              </Tabs>
              <Tabs
                onClick={() => {
                  setOpenAddFriend(true);
                  setOpenPlayActive(false);
                  setOpenProfile(false);
                }}
              >
                <TabTextBorder>Add Friend</TabTextBorder>
              </Tabs>
              <Tabs>
                <TabTextBorder>
                  <Linkstyle to="/menu">Back to Main Menu</Linkstyle>
                </TabTextBorder>
              </Tabs>
            </TabsContainer>
            <Container>
              {openProfile && <ProfileContainer />}
              {openPlayActive && <PlayActivity />}
              {openAddFriend && <ContactUs />}
            </Container>
          </Profile>
        </ProfileBoxx>
      </Showcase>
    </div>
  );
};

const Linkstyle = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
`;

const Showcase = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
`;

const ProfileBoxx = styled(motion.div)`
  width: 90vw;
  height: 90vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  border-radius: 40px;
  position: absolute;
  top: 5%;
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

const TabTextBorder = styled.h1`
  &:hover {
    &:before {
      content: "";
      border-left: 3px solid turquoise;
      margin-left: -3%;
      margin-right: 3%;
    }
  }
`;

const Container = styled.div`
  width: 75%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
