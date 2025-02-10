import { useState } from "react";
import styles from "./Posts.module.css";
import Grid from "./Grid/Grid";
import List from "./List/List";

import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

export default function Posts() {
  const [viewType, setViewType] = useState("grid");

  function handleViewType(type) {
    setViewType(type);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.toggle}>
          <button
            onClick={() => handleViewType("grid")}
            className={viewType === "grid" ? styles.highlight : undefined}
          >
            <IoGrid className={styles.icon} /> Grid view
          </button>
          <button
            onClick={() => handleViewType("list")}
            className={viewType === "list" ? styles.highlight : undefined}
          >
            <FaThList className={styles.icon} /> List view
          </button>
        </div>
      </div>
      <div className={styles.posts}>
        {viewType === "grid" ? <Grid /> : <List />}
      </div>
    </>
  );
}
