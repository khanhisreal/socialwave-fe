import styles from "./Account.module.css";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import AccountBuilder from "./AccountBuilder";
import PropTypes from "prop-types";
import { handleLogout } from "../../../util/auth";
import { useUser } from "../../../store/UserContext";

const getYear = () => {
  const currentData = new Date();
  return currentData.getFullYear();
};

export default function Account({ headerInfor }) {
  const { user } = useUser();

  const userAvatar =
    user.avatarSource !== null
      ? `http://localhost:8080${user.avatarSource}`
      : "./user_avatar_placeholder.jpg";

  return (
    <div className={styles.account}>
      <h3>Account</h3>
      <div className={styles.accountContainer}>
        <div className={styles.inspect}>
          <Link to={"/wall"} className={styles.infor}>
            <img src={userAvatar} alt="" />
            <p>{headerInfor.name}</p>
          </Link>
          <hr />
          <Link onClick={handleLogout}>
            <MdLogout className={styles.icon} /> Log out
          </Link>
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
          SocialWave © {getYear()}. All rights reserved
        </p>
      </div>
    </div>
  );
}

Account.propTypes = {
  headerInfor: PropTypes.object.isRequired,
};
