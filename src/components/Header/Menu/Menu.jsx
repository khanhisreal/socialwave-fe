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
    <div className="menu">
      <h3>Menu</h3>
      <div className="menu-container">
        <div className="menu-left">
          <div className="search-bar">
            <FaMagnifyingGlass />
            <input
              type="text"
              placeholder="Search menu"
              value={searchTerm}
              onChange={handleSearchTerm}
              // stop propagation to prevent the menu from closing when typing
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="social">
            <h3>Social</h3>
            {/* Show this if there are no results  */}
            {filteredIcons.length === 0 && noResults}
            {/* results */}
            {filteredIcons.map((icon, index) => (
              <Fragment key={index}>{icon}</Fragment>
            ))}
          </div>
        </div>
        <div className="menu-right">
          <h4>Create</h4>
          <div className="create">
            <a href="">
              <IoIosCreate />
              <div className="create-description">
                <h4>Post</h4>
              </div>
            </a>
            <a href="">
              <FaBookOpen />
              <div className="create-description">
                <h4>Story</h4>
              </div>
            </a>
            <a href="">
              <MdEmojiEvents />
              <div className="create-description">
                <h4>Life event</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
