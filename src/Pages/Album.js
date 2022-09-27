import React from "react";
import { motion } from "framer-motion";
import { AlbumBox } from "../components/Album/AlbumBox";
import { Circles } from "../components/Circles";

export const Album = () => {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Circles />
      <AlbumBox />
    </motion.div>
  );
};
