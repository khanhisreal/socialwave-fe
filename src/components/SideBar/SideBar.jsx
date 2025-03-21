import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import { FaUserFriends, FaBookmark, FaPenAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaUserClock } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "../../api/api";

export default function SideBar() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await api.get("http://localhost:8080/api/users/1");
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/wall">
          <div className={styles.illustration}>
            <img src={userData.avatarSource} alt="" />
          </div>
          <p>{userData.name}</p>
        </Link>
        <Link>
          <div className={styles.illustration}>
            <FaUserFriends className={styles.icon} />
          </div>
          <p>Friends</p>
        </Link>
        <Link>
          <div className={styles.illustration}>
            <MdMessage className={styles.icon} />
          </div>
          <p>Messenger</p>
        </Link>
        <Link>
          <div className={styles.illustration}>
            <FaBookmark className={styles.icon} />
          </div>
          <p>Saved</p>
        </Link>
        <Link>
          <div className={styles.illustration}>
            <FaUserClock className={styles.icon} />
          </div>
          <p>Memory</p>
        </Link>
      </div>
      <div className={styles.buttons}>
        <button>
          <IoDiamondOutline />
          <span>Go Premium</span>
        </button>
        <button>
          <FaPenAlt />
          <span>Create Post</span>
        </button>
      </div>
    </div>
  );
}
