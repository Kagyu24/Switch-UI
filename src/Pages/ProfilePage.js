import React from "react";
import "./globalstyle.css";
import { motion } from "framer-motion";
import { Circles } from "../components/Circles";
import { ProfileBox } from "../components/Profile/ProfileBox";

export const ProfilePage = () => {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Circles />
      <ProfileBox />
    </motion.div>
  );
};
