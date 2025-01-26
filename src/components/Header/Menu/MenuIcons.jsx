// Importing icons from react-icons/tb
import { TbBrandMessengerFilled } from "react-icons/tb";

// Importing icons from react-icons/fa
import { FaUserFriends, FaBookmark } from "react-icons/fa";

// Importing icons from react-icons/io
import { IoMdPersonAdd } from "react-icons/io";

// Importing icons from react-icons/fa6
import { FaNewspaper } from "react-icons/fa6";

import MenuIconsBuilder from "./MenuIconsBuilder";

const friends = (
  <MenuIconsBuilder
    icon={<FaUserFriends />}
    title="Friends"
    description="Find your friends on Socialwave"
  />
);

const newsFeed = (
  <MenuIconsBuilder
    icon={<FaNewspaper />}
    title="News feed"
    description="See what's happening on Socialwave"
  />
);

const saved = (
  <MenuIconsBuilder
    icon={<FaBookmark />}
    title="Saved"
    description="View your saved posts on your news feed"
  />
);

const messenger = (
  <MenuIconsBuilder
    icon={<TbBrandMessengerFilled />}
    title="Messenger"
    description="Connect with your friends"
  />
);

const friendRequests = (
  <MenuIconsBuilder
    icon={<IoMdPersonAdd />}
    title="Friend requests"
    description="View your friend requests"
  />
);

// this function stores the icons for the menu
const menuIcons = [friends, newsFeed, saved, messenger, friendRequests];

export default menuIcons;
