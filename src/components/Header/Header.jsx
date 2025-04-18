import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdApps, MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import HeaderIconBuilder from "./HeaderIconBuilder";
import Menu from "./Menu/Menu";
import Message from "./Message/Message";
import Notification from "./Notification/Notification";
import Account from "./Account/Account";
import styles from "./Header.module.css";
import api from "../../api/api";
//indicator data for unread message/notification
import indicator from "./Indicator";

export default function Header() {
  const [data, setData] = useState("");
  const [headerInfor, setHeaderInfor] = useState({});

  function assignData(value) {
    //if the value is the same as the current data, set data to null
    setData((prevData) => (prevData === value ? null : value));
  }

  // fetch the avatar
  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await api.get("http://localhost:8080/api/users/1");
        const userAvatar =
          response.data.avatarSource !== null
            ? response.data.avatarSource
            : "./user_avatar_placeholder.jpg";

        setHeaderInfor({
          avatar: `http://localhost:8080${userAvatar}`,
          name: response.data.name,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="newsfeed">
          <img src="/socialwave-logo.png" alt="socialwave logo" />
        </Link>
        <div className={styles.searchBar}>
          <FaMagnifyingGlass className={styles.icon} />
          <input type="text" placeholder="Search SocialWave" />
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
          <img src={headerInfor.avatar} alt="" />
          {data === "account" && <Account headerInfor={headerInfor} />}
        </HeaderIconBuilder>
      </div>
    </div>
  );
}
