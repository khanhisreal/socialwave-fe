import styles from "../../Header/Header.module.css";
import PropTypes from "prop-types";

export default function MessageBuilder({
  avatar,
  name,
  message,
  status,
  isActive,
}) {
  return (
    <a href="#" className={styles.singleMessage}>
      <div className={styles.userAvatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.conversation}>
        <h3>{name}</h3>
        <p>{message}</p>
        <h3 className={styles.status}>Sent {status} ago</h3>
        <div className={styles.activeStatus}>
          {isActive === true ? (
            <div className={styles.green}></div>
          ) : (
            <div className={styles.red}></div>
          )}
        </div>
      </div>
    </a>
  );
}

MessageBuilder.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
