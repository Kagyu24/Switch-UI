import React from "react";
import "./globalstyle.css";
import { motion } from "framer-motion";
import { ControllerIcon } from "../components/Menu/MenuComponents/ControllerIcon";
import { SystemInfoMenu } from "../components/Menu/MenuComponents/MenuSystemInfo";
import { LibraryTitle } from "../components/GamesLibrary/LibraryComponents/LibraryTitle";
import { LibraryBox } from "../components/GamesLibrary/LibraryBox";
import { Circles } from "../components/Circles";

const GamesLibrary = () => {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Circles />
      <ControllerIcon />
      <SystemInfoMenu />
      <LibraryTitle />
      <LibraryBox />
    </motion.div>
  );
};

export default GamesLibrary;
