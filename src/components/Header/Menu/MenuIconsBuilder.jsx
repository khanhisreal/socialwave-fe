import PropTypes from "prop-types";
import styles from "../../Header/Header.module.css";

export default function MenuIconsBuilder({ icon, title, description }) {
  return (
    <a href="#">
      {icon}
      <div className={styles.socialDescription}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </a>
  );
}

MenuIconsBuilder.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
