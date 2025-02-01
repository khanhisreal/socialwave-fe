import data from "./Message/dummydata";

const noUnreadMessage = data.filter((message) => message.isRead === false);

const messageIndicator = noUnreadMessage.length;

export default messageIndicator;
