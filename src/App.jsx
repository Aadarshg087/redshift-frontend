import React, { useState } from "react";
import "./styles/global.css";
import "./App.css";
import LandingPage from "./components/LandingPage";
import MainExplorer from "./components/MainExplorer";

function App() {
  const [isLanding, setIsLanding] = useState(true);

  const enterSpace = () => {
    setIsLanding(false);
  };

  return (
    <div className="app">
      {isLanding ? <LandingPage onEnterSpace={enterSpace} /> : <MainExplorer />}
    </div>
  );
}

export default App;
