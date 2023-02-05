import React from "react";
import { Topbar, Sidebar } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          Other pages
        </div>
        
      </div>
    </div>
  );
}

export default App;
