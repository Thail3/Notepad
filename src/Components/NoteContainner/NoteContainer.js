import React from "react";
import Note from "../Notes/Note";
import "./NoteContainer.css";

function NoteContainer() {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        <Note note={{ text: "Hello", time: "4.32PM", color: "cyan" }} />
      </div>
    </div>
  );
}

export default NoteContainer;
