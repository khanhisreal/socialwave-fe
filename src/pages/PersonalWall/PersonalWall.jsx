import { useState } from "react";

import styles from "./PersonalWall.module.css";
import dummyAvatar from "../../assets/images/Pages/dummy_avatar.png";
import userData from "./data/data";
import Modal from "./Modal/Modal";

import { FaCameraRetro, FaImages } from "react-icons/fa";
import Grid from "./Posts/Grid";
import Footer from "../../components/Footer/Footer";

export default function PersonalWall() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  function openModal(src, alt) {
    setModalImageSrc(src);
    setModalCaption(alt);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.userAvatarAndCover}>
        {/* avatar */}
        <div className={styles.avatar}>
          {/* Trigger the Modal */}
          <img
            id={styles.myImg}
            src={dummyAvatar}
            alt="User Avatar"
            onClick={() => openModal(dummyAvatar, "User Avatar")}
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
            <p>{userData.followers}</p>
          </div>
          <div className={styles.child}>
            <h1>{userData.name}</h1>
            <p>{userData.username}</p>
          </div>
          <div className={styles.child}>
            <h1>Following</h1>
            <p>{userData.following}</p>
          </div>
        </div>
        <div className={styles.bio}>
          <p>{userData.bio}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <a href="#">Edit profile</a>
        <a href="#">View archive</a>
      </div>
      <div className={styles.posts}>
        <Grid />
      </div>
      <Footer />
    </div>
  );
}
