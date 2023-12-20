import { useState } from "react";
import JoinSecretRoom from "../rooms/JoinSecretRoom.jsx";
import CreateRoom from "../rooms/CreateRoom.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { GiSpy } from "react-icons/gi";
import { dashboardVariants } from "../framer-motion/variants";

import { AiOutlinePlus } from "react-icons/ai";

const RoomGateBox = () => {
  const [openSecretModal, setOpenSecretModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const IconWrapper = ({ Component, ...props }) => {
    return (
      <motion.div
        {...props}
        variants={dashboardVariants}
        whileTap="whileTap"
        className="flex items-center justify-center w-12 h-12 p-3 bg-blue-500 rounded-full cursor-pointer"
      >
        <Component className="inline-block text-2xl text-white " />
      </motion.div>
    );
  };
  return (
    <>
      <AnimatePresence>
        {openSecretModal && <JoinSecretRoom setvalue={setOpenSecretModal} />}
      </AnimatePresence>
      <AnimatePresence>
        {openCreateModal && <CreateRoom setvalue={setOpenCreateModal} />}
      </AnimatePresence>

      <motion.div
        variants={dashboardVariants}
        initial="hidden"
        animate="visible"
        className="absolute space-y-1 right-2 bottom-12"
      >
        <IconWrapper
          onClick={() => setOpenSecretModal(true)}
          Component={GiSpy}
        />
        <IconWrapper
          onClick={() => setOpenCreateModal(true)}
          Component={AiOutlinePlus}
        />
      </motion.div>
    </>
  );
};

export default RoomGateBox;
