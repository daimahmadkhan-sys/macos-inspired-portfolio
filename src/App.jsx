import { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli.jsx";

function App() {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });
  const [topZ, setTopZ] = useState(10);
  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && (
        <Github
          windowName="github"
          setWindowState={setWindowState}
          setTopZ={setTopZ}
        />
      )}
      {windowState.note && (
        <Note
          windowName="note"
          setWindowState={setWindowState}
          setTopZ={setTopZ}
        />
      )}
      {windowState.resume && (
        <Resume
          windowName="resume"
          setWindowState={setWindowState}
          setTopZ={setTopZ}
        />
      )}
      {windowState.spotify && (
        <Spotify
          windowName="spotify"
          setWindowState={setWindowState}
          setTopZ={setTopZ}
        />
      )}
      {windowState.cli && (
        <Cli
          windowName="cli"
          setWindowState={setWindowState}
          setTopZ={setTopZ}
        />
      )}
    </main>
  );
}

export default App;
