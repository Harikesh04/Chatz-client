import Typography from "./Typography";
import { useMemo } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { nanoid } from "nanoid";
import { buttonVariants } from "../framer-motion/variants";
import { motion } from "framer-motion";
export default function TextInput({
  type,
  label,
  placeholder,
  value,
  setValue,
  inputClassName,
  className,
  sendMessage,
}) {
  const id = useMemo(() => nanoid(), []);
  switch (type) {
    case "primary": {
      return (
        <div className="space-y-1">
          {label && (
            <label htmlFor={id}>
              <Typography className="text-base text-gray-800 ">
                {label}
              </Typography>
            </label>
          )}
          <input
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className={`rounded border-2 border-gray-300 w-full p-2 outline-none text-gray-800 font-medium ${inputClassName}`}
          />
        </div>
      );
    }
    case "message": {
      return (
        <div className={`relative space-y-1 ${className}`}>
          {label && (
            <label htmlFor={id}>
              <Typography className="text-base text-gray-800 ">
                {label}
              </Typography>
            </label>
          )}
          <input
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            onKeyDown={sendMessage}
            className={`w-full border-2 border-hray-100 outline-none p-1 py-2 text-lg font-base text-gray-700 ${inputClassName}`}
          />
          <motion.span
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileTap="whileTap"
            onClick={sendMessage}
            className="absolute top-0 flex items-center justify-center inline-block bg-blue-500 rounded-full cursor-pointer right-2 h-9 w-9 "
          >
            <RiSendPlaneFill className="text-xl text-white" />
          </motion.span>
        </div>
      );
    }
    default: {
      return (
        <div className="space-y-1">
          <label htmlFor={id}>
            <Typography type="secondary-heading">{label}</Typography>
          </label>
          <input
            className={`${inputClassName}`}
            id={id}
            value={value}
            setValue={setValue}
            placeholder={placeholder}
          />
        </div>
      );
    }
  }
}
