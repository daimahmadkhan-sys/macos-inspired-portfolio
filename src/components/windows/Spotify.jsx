import React from "react";
import "./spotify.scss";
import MacWindow from "./MacWindow";
const Spotify = ({ windowName,setWindowState}) => {
  return (
    <MacWindow width="30vw" height="70vh" windowName={windowName} setWindowState={setWindowState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/1S5FWtaDXYrcpQwz1SVaxR?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
