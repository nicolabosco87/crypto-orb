import React from "react";
import { motion } from "framer-motion";

interface IPageTransitionProps {
  key: string;
  children?: React.ReactNode;
}

export const PageTransition = ({ key, children }: IPageTransitionProps) => (
  <motion.div
    key={key}
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -20 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.15 }}
  >
    {children}
  </motion.div>
);
