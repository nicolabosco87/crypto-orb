import { AnimatePresence, motion } from "framer-motion";

import { About } from "../pages/About";
import Orb from "./Orb/Orb";
import { PageTransition } from "./PageTransition";
import { PonderOrb } from "../pages/PonderOrb";
import { Privacy } from "../pages/Privacy";
import React from "react";
import { store } from "../store/store";
import { useSnapshot } from "valtio";

/**
 * Simple routing component
 * @returns
 */
export const Router = () => {
  const { currentPage } = useSnapshot(store);
  return (
    <AnimatePresence exitBeforeEnter>
      {currentPage === "ponder" && (
        <>
          <PageTransition key="ponder">
            <PonderOrb />
          </PageTransition>
          <motion.div
            key="orb"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Orb />
          </motion.div>
        </>
      )}
      {currentPage === "about" && (
        <PageTransition key="about">
          <About />
        </PageTransition>
      )}
      {currentPage === "privacy" && (
        <PageTransition key="privacy">
          <Privacy />
        </PageTransition>
      )}
    </AnimatePresence>
  );
};
