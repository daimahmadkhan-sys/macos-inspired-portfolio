import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowState,setTopZ }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} setTopZ={setTopZ}>
      <div className="resume-window">
        <embed src="/resume.pdf" frameboarder="0"></embed>
      </div>
    </MacWindow>
  );
};

export default Resume;
