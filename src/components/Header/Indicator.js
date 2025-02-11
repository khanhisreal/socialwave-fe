import messages from "./Message/dummydata";
import notifications from "./Notification/dummydata";

const noUnreadMessage = messages.filter((message) => message.isRead === false);
const noUnreadNotification = notifications.filter(
  (notification) => notification.isRead === false,
);

const indicator = {
  message: noUnreadMessage.length,
  notification: noUnreadNotification.length,
};

export default indicator;
