import React from "react";
import "./globalstyle.css";
import { motion } from "framer-motion";

import { Circles } from "../components/Circles";
import { SettingsBox } from "../components/SystemSettings/SettingsBox";

const SystemSettings = () => {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Circles />
      <SettingsBox />
    </motion.div>
  );
};

export default SystemSettings;
