import React from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainner/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <NoteContainer />
    </div>
  );
}

export default App;
