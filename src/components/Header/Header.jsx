import { useState } from "react";

import styles from "./Header.module.css";
import logo from "../../assets/images/Header/socialwave_logo.png";
import dummyProfilePic from "../../assets/images/Header/dummy_avatar.png";

import HeaderIconBuilder from "./HeaderIconBuilder";
import Menu from "./Menu/Menu";
import Message from "./Message/Message";
import Notification from "./Notification/Notification";
import Account from "./Account/Account";

// Importing icons from react-icons/md
import { MdApps, MdMessage } from "react-icons/md";

// Importing icons from react-icons/fa
import { FaBell } from "react-icons/fa";

// Importing icons from react-icons/fa6
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  const [data, setData] = useState("message");

  function assignData(value) {
    //if the value is the same as the current data, set data to null
    setData((prevData) => (prevData === value ? null : value));
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <a href="">
          <img src={logo} alt="socialwave logo" />
        </a>
        <div className={styles.searchBar}>
          <FaMagnifyingGlass className={styles.icon} />
          <input type="text" placeholder="Search Socialwave" />
        </div>
      </div>
      <div className={styles.right}>
        {/* menu button  */}
        <HeaderIconBuilder
          buttonType={"menu"}
          triggerClick={assignData}
          // This shit is a prop, don't try to change it to module css!
          buttonClass={"menuParent"}
        >
          <MdApps />
          {data === "menu" && <Menu />}
        </HeaderIconBuilder>
        {/* message button  */}
        <HeaderIconBuilder
          buttonType={"message"}
          triggerClick={assignData}
          // This shit is a prop, don't try to change it to module css!
          buttonClass={"messageParent"}
        >
          <MdMessage />
          {data === "message" && <Message />}
        </HeaderIconBuilder>
        {/* notification button  */}
        <HeaderIconBuilder
          buttonType={"notification"}
          triggerClick={assignData}
          // This shit is a prop, don't try to change it to module css!
          buttonClass={"notificationParent"}
        >
          <FaBell />
          {data === "notification" && <Notification />}
        </HeaderIconBuilder>
        {/* account button  */}
        <HeaderIconBuilder
          buttonType={"account"}
          triggerClick={assignData}
          // This shit is a prop, don't try to change it to module css!
          buttonClass={"accountParent"}
        >
          <img src={dummyProfilePic} alt="" />
          {data === "account" && <Account />}
        </HeaderIconBuilder>
      </div>
    </div>
  );
}
