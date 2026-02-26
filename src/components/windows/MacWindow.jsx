import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
import { motion } from "framer-motion";

let globalZ = 100;

const MacWindow = ({
  children,
  width = "46vw",
  height = "60vh",
  windowName,
  setWindowState,
}) => {
  const [zIndex, setZIndex] = useState(globalZ++);

  const bringToFront = () => {
    globalZ += 1;
    setZIndex(globalZ);
  };
  return (
    <Rnd
      dragHandleClassName="nav"
      style={{ zIndex }}
      onMouseDown={bringToFront}
      default={{
        width,
        height,
        x: 200,
        y: 150,
      }}
    >
      <motion.div
        className="window"
        initial={{
          scale: 0.4,
          opacity: 0,
          y: 100,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        exit={{
          scale: 0.4,
          opacity: 0,
          y: 100,
        }}
        transition={{
          type: "spring",
          damping: 18,
          stiffness: 180,
          mass: 0.8,
        }}
      >
        <div className="nav">
          <div className="dots">
            <div
              onClick={() =>
                setWindowState((state) => ({ ...state, [windowName]: false }))
              }
              className="dot red"
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>daimkhan - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </motion.div>
    </Rnd>
  );
};

export default MacWindow;
