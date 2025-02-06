import { useState } from "react";

import styles from "./PersonalWall.module.css";
import dummyAvatar from "../../assets/images/Pages/dummy_avatar.png";
import Modal from "./Modal";

import { FaCameraRetro, FaImages } from "react-icons/fa";

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
      <div className={styles.userInfor}>
        <div className={styles.avatar}>
          {/* Trigger the Modal */}
          <img
            id={styles.myImg}
            src={dummyAvatar}
            alt="User Avatar"
            onClick={() => openModal(dummyAvatar, "User Avatar")}
          />
          <a href="#">
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
        </div>
        <a href="#">
          <FaImages className={styles.coverLogo} />
          <p>Add cover photo</p>
        </a>
      </div>
    </div>
  );
}
