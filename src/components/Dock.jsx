import React from "react";
import "./dock.scss";


const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="/doc-icon/github.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, note: true }));
        }}
        className="icon note"
      >
        <img src="/doc-icon/note.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src="/doc-icon/pdf.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com/","_blank")
        }}
        className="icon calender"
      >
        <img src="/doc-icon/calender.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src="/doc-icon/spotify.svg" alt="" />
      </div>
      <div
        onClick={() => {
         window.open("mailto:daimahmadkhan@gmail.com","_blank")
        }}
        className="icon mail"
      >
        <img src="/doc-icon/mail.svg" alt="" />
      </div>
      <div
        onClick={() => {window.open("https://www.linkedin.com/in/daim-khan-73b564328?utm_source=share_via&utm_content=profile&utm_medium=member_android","_blank")
         
        }}
        className="icon link"
      >
        <img src="/doc-icon/link.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, cli: true }));
        }}
        className="icon cli"
      >
        <img src="/doc-icon/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
