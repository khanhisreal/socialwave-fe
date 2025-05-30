import styles from "./Notification.module.css";
import PropTypes from "prop-types";

import { IoMdPersonAdd } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots, FaBirthdayCake } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { BsPersonCheckFill } from "react-icons/bs";

export default function NotificationBuilder({
  avatar,
  name,
  message,
  timestamp,
  typeOf,
  isRead,
}) {
  const icon =
    (typeOf === "friendRequest" && <IoMdPersonAdd />) ||
    (typeOf === "newPost" && <FaRegNewspaper />) ||
    (typeOf === "like" && <AiFillLike />) ||
    (typeOf === "comment" && <FaCommentDots />) ||
    (typeOf === "repost" && <BiRepost />) ||
    (typeOf === "birthdayReminder" && <FaBirthdayCake />) ||
    (typeOf === "friendRequestAccepted" && <BsPersonCheckFill />);

  return (
    <a
      href="#"
      className={`${styles.singleNotification} ${isRead && styles.isRead}`}
    >
      <div className={styles.left}>
        <img src={avatar} alt="avatar" />
        <div className={styles.avatar}>{icon}</div>
      </div>
      <div className={styles.right}>
        <p>
          <span>{name}</span> {message}
        </p>
        <p>{timestamp}</p>
      </div>
    </a>
  );
}

NotificationBuilder.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  typeOf: PropTypes.string.isRequired,
  isRead: PropTypes.bool.isRequired,
};
