import { useState, useEffect } from "react";
import { FaCameraRetro, FaImages } from "react-icons/fa";
import styles from "./PersonalWall.module.css";
import Modal from "./Modal/Modal";
import Grid from "./Posts/Grid";
import Footer from "../../components/Footer/Footer";
import { useUser } from "../../store/UserContext";
import { useLoaderData } from "react-router-dom";

export default function PersonalWall() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalCaption, setModalCaption] = useState("");
  const { user } = useUser();
  const loaderUser = useLoaderData();
  const { setUser } = useUser();

  useEffect(() => {
    setUser(loaderUser);
  }, [loaderUser, setUser]);

  function openModal(src, alt) {
    setModalImageSrc(src);
    setModalCaption(alt);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const userAvatar =
    user.avatarSource !== null
      ? `http://localhost:8080${user.avatarSource}`
      : "./user_avatar_placeholder.jpg";

  return (
    <div className={styles.container}>
      <div className={styles.userAvatarAndCover}>
        {/* avatar */}
        <div className={styles.avatar}>
          {/* Trigger the Modal */}
          <img
            id={styles.myImg}
            src={userAvatar}
            alt="User Avatar"
            onClick={() => openModal(userAvatar, `${user.name}`)}
          />
          <a href="#" className={styles.addAvatar}>
            <FaCameraRetro className={styles.avatarLogo} />
          </a>
          {/* The modal */}
          {isModalOpen && (
            <Modal
              image={modalImageSrc}
              caption={modalCaption}
              handleModal={closeModal}
            />
          )}
          {/* add cover button */}
          <a href="#" className={styles.addCover}>
            <FaImages className={styles.coverLogo} />
            <p>Add Cover</p>
          </a>
        </div>
      </div>
      {/* This is for creating gap only */}
      <div className={styles.spaceHolder}></div>
      <div className={styles.userInfor}>
        <div className={styles.children}>
          <div className={styles.child}>
            <h1>Followers</h1>
            <p>{user.followerCount}</p>
          </div>
          <div className={styles.child}>
            <h1>{user.name}</h1>
            <p>{user.userName}</p>
          </div>
          <div className={styles.child}>
            <h1>Following</h1>
            <p>{user.followingCount}</p>
          </div>
        </div>
        <div className={styles.bio}>
          <p>{user.bio}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <a href="#">Edit profile</a>
        <a href="#">View archive</a>
      </div>
      <div className={styles.posts}>
        {user.userId ? <Grid user={user} /> : <p>Loading profile data...</p>}
      </div>
      <Footer />
    </div>
  );
}
