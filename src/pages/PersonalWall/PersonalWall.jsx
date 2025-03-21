import { useEffect, useState } from "react";
import { FaCameraRetro, FaImages } from "react-icons/fa";
import styles from "./PersonalWall.module.css";
import Modal from "./Modal/Modal";
import Grid from "./Posts/Grid";
import Footer from "../../components/Footer/Footer";
import api from "../../api/api";

export default function PersonalWall() {
  const [userData, setUserData] = useState({});
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

  // fetch data here, only happens at load time
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/users/1");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.userAvatarAndCover}>
        {/* avatar */}
        <div className={styles.avatar}>
          {/* Trigger the Modal */}
          <img
            id={styles.myImg}
            src={userData.avatarSource}
            alt="User Avatar"
            onClick={() => openModal(userData.avatarSource, `${userData.name}`)}
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
            <p>{userData.followerCount}</p>
          </div>
          <div className={styles.child}>
            <h1>{userData.name}</h1>
            <p>{userData.userName}</p>
          </div>
          <div className={styles.child}>
            <h1>Following</h1>
            <p>{userData.followingCount}</p>
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
