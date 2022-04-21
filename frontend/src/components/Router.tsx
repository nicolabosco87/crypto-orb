import { AnimatePresence, motion } from "framer-motion";

import { About } from "./About";
import Form from "./Form";
import Orb from "./Orb/Orb";
import React from "react";
import { store } from "../store/store";
import { useSnapshot } from "valtio";

export const Router = () => {
  const { currentPage } = useSnapshot(store);
  return (
    <AnimatePresence exitBeforeEnter>
      {currentPage === "ponder" && (
        <>
          <motion.div
            key="ponder"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.15 }}
          >
            <Form />
          </motion.div>
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
        <motion.div
          key="about"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.15 }}
        >
          <About />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
