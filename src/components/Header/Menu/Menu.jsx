import { Fragment, useState } from "react";

// Importing icons from react-icons/fa6
import { FaMagnifyingGlass } from "react-icons/fa6";

// Importing icons from react-icons/io
import { IoIosCreate } from "react-icons/io";

// Importing icons from react-icons/fa
import { FaBookOpen } from "react-icons/fa";

// Importing icons from react-icons/md
import { MdEmojiEvents } from "react-icons/md";

import menuIcons from "./MenuIcons";
import styles from "../../Header/Header.module.css";
import noResultImage from "../../../assets/images/Header/menu.webp";

const noResults = (
  <div>
    <img src={noResultImage} alt="" />
    <h3>We didn&apos;t find anything</h3>
    <p>
      Try different keywords or make sure that everything is spelt correctly.
    </p>
  </div>
);

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const filteredIcons = menuIcons.filter((icon) =>
    icon.props.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <div className={styles.menuContainer}>
        <div className={styles.menuLeft}>
          <div className={styles.searchBar}>
            <FaMagnifyingGlass className={styles.icon} />
            <input
              type="text"
              placeholder="Search menu"
              value={searchTerm}
              onChange={handleSearchTerm}
              // stop propagation to prevent the menu from closing when typing
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className={styles.social}>
            <h3>Social</h3>
            {/* Show this if there are no results  */}
            {filteredIcons.length === 0 && noResults}
            {/* results */}
            {filteredIcons.map((icon, index) => (
              <Fragment key={index}>{icon}</Fragment>
            ))}
          </div>
        </div>
        <div className={styles.menuRight}>
          <h4>Create</h4>
          <div className={styles.create}>
            <a href="#">
              <IoIosCreate className={styles.icon} />
              <div className="createDescription">
                <h4>Post</h4>
                <p>Create a new post</p>
              </div>
            </a>
            <a href="#">
              <FaBookOpen className={styles.icon} />
              <div className="createDescription">
                <h4>Story</h4>
                <p>Share a new story</p>
              </div>
            </a>
            <a href="#">
              <MdEmojiEvents className={styles.icon} />
              <div className="createDescription">
                <h4>Life event</h4>
                <p>Share an achievement</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
