import { createPortal } from "react-dom";
import Typography from "./Typography";
import { motion } from "framer-motion";

import { modalVariants } from "../framer-motion/variants";

export default function Modal({ children, title }) {
  return (
    <>
      <motion.div
        variants={modalVariants}
        initial="hiddenOverlay"
        animate="visibleOverlay"
        exit="exitOverlay"
        className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-sm"
      >
        <motion.div
          variants={modalVariants}
          initial="hiddenCard"
          animate="visibleCard"
          exit="exitCard"
          className="w-10/12 p-2 pb-6 bg-white rounded lg:w-6/12 md:w-8/12 "
        >
          <div className="pb-3">
            <Typography
              type="section-heading"
              className="font-bold capitalize lg:text-lg md:text-base sm:text-base"
            >
              {title}
            </Typography>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </>
  );
}
