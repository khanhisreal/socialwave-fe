import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import userData from "../data";
import dummyAvatar from "../../assets/images/Pages/dummy_avatar.png";
import { FaUserFriends, FaBookmark, FaPenAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaUserClock } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";

export default function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/wall">
          <div className={styles.illustration}>
            <img src={dummyAvatar} alt="" />
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
