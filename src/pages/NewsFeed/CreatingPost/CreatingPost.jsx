import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CreatingPost.module.css";
import FileUploader from "../../../components/FileUploader/FileUploader";
import dummyAvatar from "../../../assets/images/Pages/dummy_avatar.png";

import userData from "./data";
import { IoGrid } from "react-icons/io5";
import { FaThList  } from "react-icons/fa";

export default function CreatingPost({ handleLayout, layout }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.mainArea}>
        <div className={styles.left}>
          <div className={styles.top}>
            <span>
              <Link to={"/wall"}>
                <img src={dummyAvatar} alt="" />
              </Link>
            </span>
            <button onClick={() => setShowModal(true)}>
              What&apos;s on your mind, {userData.name}?
            </button>
          </div>
          <div className={styles.bottom}>
            <span>Post from</span>
            <button>My draft</button>
          </div>
        </div>
        <div className={styles.right}>
          <span>Layout</span>
          <button
            onClick={() => handleLayout("list")}
            className={layout === "list" && styles.active}
          >
            <FaThList  className={styles.icon} /> List view
          </button>
          <button
            onClick={() => handleLayout("grid")}
            className={layout === "grid" && styles.active}
          >
            <IoGrid className={styles.icon} /> Grid view
          </button>
        </div>
      </div>
      {showModal && <FileUploader />}
    </div>
  );
}

CreatingPost.propTypes = {
  handleLayout: PropTypes.func.isRequired,
  layout: PropTypes.string.isRequired,
};
