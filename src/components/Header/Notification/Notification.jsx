import styles from "./Notification.module.css";
import noResultImage from "../../../assets/images/Header/notification.png";
import notifications from "./dummydata";

import NotificationBuilder from "./NotificationBuilder";
import { useState } from "react";

const empty = (
  <div className={styles.empty}>
    <img src={noResultImage} alt="" />
    <h3>No notifications yet</h3>
    <p>When you get notifications, they’ll show up here.</p>
  </div>
);

export default function Notification() {
  const [highlightButton, setHighlightButton] = useState("All");

  function handleHighlightButton(value) {
    setHighlightButton(value);
  }

  const allNotifications = notifications.map((notification) => notification);

  const unreadNotifications = notifications.filter(
    (notification) => !notification.isRead,
  );

  return (
    <div className={styles.notification}>
      <h3>Notifications</h3>
      <div className={styles.notificationButtons}>
        {/* e.stopPropagation() prevents the click event from bubbling up to the parent components. */}
        <button
          className={highlightButton === "All" ? styles.highlight : ""}
          onClick={(e) => {
            e.stopPropagation();
            handleHighlightButton("All");
          }}
        >
          All
        </button>
        <button
          className={highlightButton === "Unread" ? styles.highlight : ""}
          onClick={(e) => {
            e.stopPropagation();
            handleHighlightButton("Unread");
          }}
        >
          Unread
        </button>
      </div>
      <div className={styles.notificationContainer}>
        <div className={styles.listOfNotifications}>
          {notifications.length === 0
            ? empty
            : highlightButton === "All"
              ? allNotifications.map((notification) => (
                  <NotificationBuilder
                    {...notification}
                    key={notification.id}
                  />
                ))
              : unreadNotifications.map((notification) => (
                  <NotificationBuilder
                    {...notification}
                    key={notification.id}
                  />
                ))}
        </div>
      </div>
    </div>
  );
}
