import React from "react";
import Titlescreen from "../Pages/Titlescreen";
import Menu from "../Pages/Menu";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GamesLibrary from "../Pages/GamesLibrary";
import SystemSettings from "../Pages/SystemSettings";
import { ProfilePage } from "../Pages/ProfilePage";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Titlescreen />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gamelibrary" element={<GamesLibrary />} />
        <Route path="/settings" element={<SystemSettings />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </AnimatePresence>
  );
};
