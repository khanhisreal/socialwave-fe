import { useState } from "react";
import { Link } from "react-router-dom";

//for css module
import styles from "./Header.module.css";
//logo socialwave for the platform
import logo from "../../assets/images/Header/socialwave_logo.png";
//logo of the user
import dummyProfilePic from "../../assets/images/Header/dummy_avatar.png";
//indicator data for unread message/notification
import indicator from "./Indicator";

import HeaderIconBuilder from "./HeaderIconBuilder";
import Menu from "./Menu/Menu";
import Message from "./Message/Message";
import Notification from "./Notification/Notification";
import Account from "./Account/Account";

import { MdApps, MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  const [data, setData] = useState("");

  function assignData(value) {
    //if the value is the same as the current data, set data to null
    setData((prevData) => (prevData === value ? null : value));
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <img src={logo} alt="socialwave logo" />
        </Link>
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
          buttonClass={"messageParent"}
        >
          <MdMessage />
          {data === "message" && <Message />}
          {data !== "message" && ( // Show only if "message" is NOT selected
            <div className={styles.messageIndicator}>
              {indicator.message > 99 ? "99+" : indicator.message}
            </div>
          )}
        </HeaderIconBuilder>
        {/* notification button  */}
        <HeaderIconBuilder
          buttonType={"notification"}
          triggerClick={assignData}
          buttonClass={"notificationParent"}
        >
          <FaBell />
          {data === "notification" && <Notification />}
          {data !== "notification" && ( // Show only if "notification" is NOT selected
            <div className={styles.notificationIndicator}>
              {indicator.notification > 99 ? "99+" : indicator.notification}
            </div>
          )}
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
