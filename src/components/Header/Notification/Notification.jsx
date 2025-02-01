import styles from "../../Header/Header.module.css";
import noResultImage from "../../../assets/images/Header/notification.png";
import notifications from "./dummydata";

import NotificationBuilder from "./NotificationBuilder";

const empty = (
  <div className={styles.empty}>
    <img src={noResultImage} alt="" />
    <h3>No notifications yet</h3>
    <p>When you get notifications, they’ll show up here.</p>
  </div>
);

export default function Notification() {
  return (
    <div className={styles.notification}>
      <h3>Notifications</h3>
      <div className={styles.notificationButtons}>
        {/* e.stopPropagation() prevents the click event from bubbling up to the parent components. */}
        <button onClick={(e) => e.stopPropagation()}>All</button>
        <button onClick={(e) => e.stopPropagation()}>Unread</button>
      </div>
      <div className={styles.notificationContainer}>
        <div className={styles.listOfNotifications}>
          {notifications.length === 0
            ? empty
            : notifications.map((notification) => (
                <NotificationBuilder
                  avatar={notification.avatar}
                  name={notification.name}
                  message={notification.message}
                  timestamp={notification.timestamp}
                  typeOf={notification.typeOf}
                  key={notification.id}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
