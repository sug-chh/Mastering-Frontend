import React from "react";
import { motion } from "framer-motion";
const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleChange = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleChange}
    >
      <motion.img
        src={selectedImg}
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
        alt="enlarged pic"
      />
    </motion.div>
  );
};
export default Modal;
