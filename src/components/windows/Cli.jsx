import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss"
const Cli = ({ windowName,setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal commands={{}}
        welcomeMessage={'Welcome to the React terminal!'}
        promptLabel={'daimkhan:~$'}
        promptLabelStyle={{color:"green"}}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
