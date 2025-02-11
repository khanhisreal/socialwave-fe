import styles from "../../Header/Header.module.css";
import PropTypes from "prop-types";

import { IoIosSettings } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const settingPrivacy = <IoIosSettings className={styles.icon} />;
const displayAccessibility = <FaMoon className={styles.icon} />;
const contactUs = <MdAlternateEmail className={styles.icon} />;

export default function AccountBuilder({ buttonType, title }) {
  return (
    <a
      href="#"
      onClick={(e) => e.stopPropagation()}
      className={styles.accountButton}
    >
      {buttonType === "settingPrivacy"
        ? settingPrivacy
        : buttonType === "displayAccessibility"
          ? displayAccessibility
          : contactUs}
      {title}
    </a>
  );
}

AccountBuilder.propTypes = {
  buttonType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
