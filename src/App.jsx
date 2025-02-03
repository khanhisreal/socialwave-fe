import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import { IconContext } from "react-icons/lib";

function App() {
  return (
    <>
      <IconContext.Provider value={{ color: "#000000", className: "icon" }}>
        <Header></Header>
        {/* create a margin-top of 60px please */}
        <Body></Body>
      </IconContext.Provider>
    </>
  );
}

export default App;
