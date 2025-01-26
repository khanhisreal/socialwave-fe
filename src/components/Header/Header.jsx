import { useState } from "react";
import "./Header.css";

import logo from "../../assets/images/Header/socialwave_logo.png";
import dummyProfilePic from "../../assets/images/Header/dummy_avatar.png";
import ButtonNavigation from "./ButtonNavigation";
import Menu from "./Menu/Menu";

// Importing icons from react-icons/md
import { MdApps, MdMessage } from "react-icons/md";

// Importing icons from react-icons/fa
import { FaBell } from "react-icons/fa";

// Importing icons from react-icons/fa6
import { FaMagnifyingGlass } from "react-icons/fa6";

const message = (
  <div className="message">
    <p>Message</p>
  </div>
);

const notification = (
  <div className="notification">
    <p>Notification</p>
  </div>
);

const account = (
  <div className="account">
    <p>Account</p>
  </div>
);

export default function Header() {
  const [data, setData] = useState("message");

  function assignData(value) {
    //if the value is the same as the current data, set data to null
    setData((prevData) => (prevData === value ? null : value));
  }

  return (
    <div className="container">
      <div className="left">
        <a href="">
          <img src={logo} alt="socialwave logo" />
        </a>
        <div className="search-bar">
          <FaMagnifyingGlass />
          <input type="text" placeholder="Search Socialwave" />
        </div>
      </div>
      <div className="right">
        {/* menu button  */}
        <ButtonNavigation
          buttonType={"menu"}
          triggerClick={assignData}
          buttonClass="menu-parent"
        >
          <MdApps />
          {data === "menu" && <Menu />}
        </ButtonNavigation>
        {/* message button  */}
        <ButtonNavigation
          buttonType={"message"}
          triggerClick={assignData}
          buttonClass={"message-parent"}
        >
          <MdMessage />
          {data === "message" && message}
        </ButtonNavigation>
        {/* notification button  */}
        <ButtonNavigation
          buttonType={"notification"}
          triggerClick={assignData}
          buttonClass={"notification-parent"}
        >
          <FaBell />
          {data === "notification" && notification}
        </ButtonNavigation>
        {/* account button  */}
        <ButtonNavigation
          buttonType={"account"}
          triggerClick={assignData}
          buttonClass={"account-parent"}
        >
          <img src={dummyProfilePic} alt="" />
          {data === "account" && account}
        </ButtonNavigation>
      </div>
    </div>
  );
}
