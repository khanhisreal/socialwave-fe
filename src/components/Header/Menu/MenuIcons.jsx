import { TbBrandMessengerFilled } from "react-icons/tb";
import { FaUserFriends, FaBookmark } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa6";
import MenuIconsBuilder from "./MenuIconsBuilder";
import styles from "./Menu.module.css";

const friends = (
  <MenuIconsBuilder
    icon={<FaUserFriends className={styles.icon} />}
    title="Friends"
    description="Find your friends on SocialWave"
  />
);

const newsFeed = (
  <MenuIconsBuilder
    icon={<FaNewspaper className={styles.icon} />}
    title="News feed"
    description="See what's happening on SocialWave"
  />
);

const saved = (
  <MenuIconsBuilder
    icon={<FaBookmark className={styles.icon} />}
    title="Saved"
    description="View your saved posts on your news feed"
  />
);

const messenger = (
  <MenuIconsBuilder
    icon={<TbBrandMessengerFilled className={styles.icon} />}
    title="Messenger"
    description="Connect with your friends"
  />
);

const friendRequests = (
  <MenuIconsBuilder
    icon={<IoMdPersonAdd className={styles.icon} />}
    title="Friend requests"
    description="View your friend requests"
  />
);

// this function stores the icons for the menu
const menuIcons = [friends, newsFeed, saved, messenger, friendRequests];

export default menuIcons;
