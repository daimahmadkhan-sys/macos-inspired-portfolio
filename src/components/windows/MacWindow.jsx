import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
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
    const newZ = topZ + 1;
    globalZ += 1;
    setZIndex(globalZ);
  };
  return (
    <Rnd
      style={{ zIndex }}
      onMouseDown={bringToFront}
      default={{
        width: width,
        height: height,
        x: 200,
        y: 150,
      }}
    >
      <div className="window">
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
      </div>
    </Rnd>
  );
};

export default MacWindow;
