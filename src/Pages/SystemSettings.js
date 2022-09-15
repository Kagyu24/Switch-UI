import React from "react";
import "./globalstyle.css";
import { motion } from "framer-motion";
import { SystemInfoMenu } from "../components/Menu/MenuSystemInfo";
import { LibraryTitle } from "../components/GamesLibrary/LibraryTitle";
import { Circles } from "../components/Circles";
import { SettingsBox } from "../components/SystemSettings.js/SettingsBox";

const SystemSettings = () => {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Circles />
      <SystemInfoMenu />
      <LibraryTitle />
      <SettingsBox />
    </motion.div>
  );
};

export default SystemSettings;
