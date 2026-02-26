import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.",
    },
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express
Databases: MongoDB
Tools: Git, Github, Vercel, Vite
Cloud: AWS`,
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. Task Management App - Vanilla JS
2. DesignStudio - Vanilla JS`,
    },
    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Email: daimahmadkhan@gmail.com
Phone: +918591353577
Location: Mumbai, India`,
    },
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/daimahmadkhan-sys", "_blank");
        return "Opening GitHub...";
      },
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
    
    Welcome to My Portfolio CLI!  

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • contact   - Get in touch
  • github    - Check out my github profile 

Happy exploring! 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"daimkhan:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
