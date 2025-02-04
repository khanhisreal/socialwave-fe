import { useState } from "react";
import styles from "./PersonalWall.module.css";
import dummyAvatar from "../../../assets/images/Body/dummy_avatar.png";

import { FaCameraRetro, FaImages } from "react-icons/fa";

export default function PersonalWall() {
  return (
    <div className={styles.container}>
      <div className={styles.userInfor}>
        <div className={styles.avatar}>
          <img src={dummyAvatar} alt="" />
          <a href="#">
            <FaCameraRetro className={styles.avatarLogo} />
          </a>
        </div>
        <a href="#">
          <FaImages className={styles.coverLogo} />
          <p>Add cover photo</p>
        </a>
      </div>
    </div>
  );
}
