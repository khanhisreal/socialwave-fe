import "./App.css";
import Header from "./components/Header/Header";
import PersonalWallBody from "./components/PersonalWall/PersonalWallBody";

import { IconContext } from "react-icons/lib";

function App() {
  return (
    <>
      <IconContext.Provider value={{ color: "#000000", className: "icon" }}>
        <Header></Header>
        {/* create a margin-top of 60px please */}
        <PersonalWallBody></PersonalWallBody>
      </IconContext.Provider>
    </>
  );
}

export default App;
