import React from "react";
import "./globalstyle.css";
import { Circles } from "../components/Circles";
import { MenuTitle } from "../components/Menu/MenuComponents/MenuTitle";
import { SystemInfoMenu } from "../components/Menu/MenuComponents/MenuSystemInfo";
import { motion } from "framer-motion";
import { MenuBox } from "../components/Menu/MenuBox";
import { OptionsBox } from "../components/Menu/OptionsBox";
import { ControllerIcon } from "../components/Menu/MenuComponents/ControllerIcon";
import { ControlButtons } from "../components/Menu/MenuComponents/ControlButtons";

const Menu = () => {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ControllerIcon />
      <Circles />
      <SystemInfoMenu />
      <MenuTitle />
      <MenuBox />
      <OptionsBox />
      <ControlButtons />
    </motion.div>
  );
};

export default Menu;
