import { motion } from "framer-motion";
import { chatVariants } from "../framer-motion/variants.jsx";
import Typography from "./Typography";

const Chat = ({ type, children, user }) => {
  console.log(type, children, user);
  switch (type) {
    case "sent": {
      return (
        <div style={{ maxWidth: "80%" }} className="flex justify-end ml-auto ">
          <motion.div
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            className="inline-block px-3 py-1 bg-blue-500 rounded-lg"
          >
            <Typography type="caption" className="text-white font-base">
              {children}
            </Typography>
          </motion.div>
        </div>
      );
    }
    case "recieved": {
      return (
        <div
          style={{ maxWidth: "80%" }}
          className="relative flex justify-start "
        >
          <motion.div
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            className="inline-block bg-gray-500 py-1 px-3 rounded-lg space-y-0.5 "
          >
            <Typography className="text-xs text-gray-200">{user}</Typography>
            <Typography type="caption" className="text-white font-base">
              {children}
            </Typography>
          </motion.div>
        </div>
      );
    }
    case "notice": {
      return (
        <motion.div variants={chatVariants} initial="hidden" animate="visible">
          <Typography className="text-sm text-center text-gray-200 font-base">
            {children}
          </Typography>
        </motion.div>
      );
    }
    default: {
      return <Typography>{children}</Typography>;
    }
  }
};

export default Chat;
