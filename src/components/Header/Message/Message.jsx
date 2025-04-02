import { useState } from "react";

import data from "./dummydata";
import styles from "./Message.module.css";
import MessageBuilder from "./MessageBuilder";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";

const noResults = (
  <div className={styles.empty}>
    <img src="/message.png" alt="" />
    <h3>No chats available</h3>
    <p>No chats found. Start chatting.</p>
  </div>
);

export default function Message() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  const filteredData = data.filter((filteredDatum) =>
    filteredDatum.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={styles.message}>
      <div className={styles.headingContainer}>
        <h3>Chats</h3>
        <a href="#">
          <FaExpandArrowsAlt className={styles.icon} />
        </a>
      </div>
      <div className={styles.messageContainer}>
        <div className={styles.searchBar}>
          <FaMagnifyingGlass className={styles.icon} />
          <input
            type="text"
            placeholder="Search username"
            value={searchTerm}
            onChange={(e) => handleSearchTerm(e)}
            // stop propagation to prevent the menu from closing when typing
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <div className={styles.listMessages}>
          {filteredData.length === 0
            ? noResults
            : filteredData.map((datum) => (
                <MessageBuilder
                  avatar={datum.avatar}
                  name={datum.name}
                  message={
                    datum.message.length > 50
                      ? datum.message.slice(0, 50) + "..."
                      : datum.message
                  }
                  timestamp={datum.timestamp}
                  isActive={datum.isActive}
                  isRead={datum.isRead}
                  key={datum.id}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
