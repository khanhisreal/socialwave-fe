import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./CreatingPost.module.css";
import FileUploader from "../../../components/FileUploader/FileUploader";
import api from "../../../api/api";

export default function CreatingPost({ handleLayout, layout }) {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await api.get("/api/users/1");
        setUserData({
          name: response.data.name,
          avatar: response.data.avatarSource,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchAvatar();
  }, []);

  const userAvatar =
    userData.avatar !== null
      ? userData.avatar
      : "./user_avatar_placeholder.jpg";

  return (
    <div className={styles.container}>
      <div className={styles.mainArea}>
        <div className={styles.left}>
          <div className={styles.top}>
            <span>
              <Link to={"/wall"}>
                <img
                  src={`http://localhost:8080${userAvatar}`}
                  alt="user avatar"
                />
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
            className={layout === "list" ? styles.active : ""}
          >
            <FaThList className={styles.icon} /> List view
          </button>
          <button
            onClick={() => handleLayout("grid")}
            className={layout === "grid" ? styles.active : ""}
          >
            <IoGrid className={styles.icon} /> Grid view
          </button>
        </div>
      </div>
      {showModal && <FileUploader handleShowModal={setShowModal} />}
    </div>
  );
}

CreatingPost.propTypes = {
  handleLayout: PropTypes.func.isRequired,
  layout: PropTypes.string.isRequired,
};
