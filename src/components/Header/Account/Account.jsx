import styles from "../../Header/Header.module.css";
import dummyAvatar from "../../../assets/images/Header/dummy_avatar.png";

import { MdLogout } from "react-icons/md";

import AccountBuilder from "./AccountBuilder";

const getYear = () => {
  const currentData = new Date();
  return currentData.getFullYear();
};

export default function Account() {
  return (
    <div className={styles.account}>
      <h3>Account</h3>
      <div className={styles.accountContainer}>
        <div className={styles.inspect}>
          <a
            href="#"
            onClick={(e) => e.stopPropagation()}
            className={styles.infor}
          >
            <img src={dummyAvatar} alt="" />
            <p>Kevin Brown</p>
          </a>
          <hr />
          <a href="#" onClick={(e) => e.stopPropagation()}>
            <MdLogout className={styles.icon} /> Log out
          </a>
        </div>
        <div className={styles.accountButtons}>
          <AccountBuilder
            buttonType={"settingPrivacy"}
            title={"Settings & privacy"}
          />
          <AccountBuilder
            buttonType={"displayAccessibility"}
            title={"Display & accessibility"}
          />
          <AccountBuilder buttonType={"contactUs"} title={"Contact us"} />
        </div>
        <p className={styles.mark}>
          Socialwave © {getYear()}. All rights reserved
        </p>
      </div>
    </div>
  );
}
