import React from "react";
import { motion } from "framer-motion";

const GridWrapper = ({ children }) => {
  return (
    <motion.div
      className="grid-items"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default GridWrapper;
