import { motion } from "framer-motion";
import { buttonVariants } from "../framer-motion/variants.jsx";

export default function Button({
  btnType,
  loading = false,
  className,
  children,
  ...props
}) {
  switch (btnType) {
    case "primary": {
      return (
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileTap="whileTap"
          disabled={loading}
          {...props}
          className={`py-2 px-6 bg-blue-500 text-white text-base font-medium rounded-md ${className}`}
        >
          {loading ? "Loading..." : children}
        </motion.button>
      );
    }
    case "secondary": {
      return (
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileTap="whileTap"
          disabled={loading}
          {...props}
          className={`py-2 px-6 bg-blue-800 text-white text-base font-medium rounded-md ${className}`}
        >
          {loading ? "Loading..." : children}
        </motion.button>
      );
    }
    case "danger": {
      return (
        <motion.button
          {...props}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileTap="whileTap"
          disabled={loading}
          className={`py-2 px-6 bg-red-500 text-white text-base font-medium rounded-md ${className}`}
        >
          {loading ? "Loading..." : children}
        </motion.button>
      );
    }
    default: {
      return (
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileTap="whileTap"
          disabled={loading}
          {...props}
          className={`${className}`}
        >
          {loading ? "Loading..." : children}
        </motion.button>
      );
    }
  }
}
