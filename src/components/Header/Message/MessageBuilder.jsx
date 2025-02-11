import styles from "../../Header/Header.module.css";
import PropTypes from "prop-types";

export default function MessageBuilder({
  avatar,
  name,
  message,
  timestamp,
  isActive,
  isRead,
}) {
  return (
    <a href="#" className={styles.singleMessage}>
      <div className={styles.userAvatar}>
        <img src={avatar} alt="" />
        {isActive === true && <div className={styles.green}></div>}
      </div>
      <div className={styles.conversation}>
        <h3>{name}</h3>
        <p className={isRead ? null : styles.isRead}>{message}</p>
        <p className={styles.timestamp}>Sent {timestamp}</p>
      </div>
    </a>
  );
}

MessageBuilder.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isRead: PropTypes.bool.isRequired,
};
