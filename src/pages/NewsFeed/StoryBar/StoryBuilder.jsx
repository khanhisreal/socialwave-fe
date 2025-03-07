import styles from "./StoryBar.module.css";
import PropTypes from "prop-types";

export default function StoryBuilder({ imgSrc, userName, updateTime }) {
  return (
    <div className={styles.story}>
      <button
        className={`${styles.storyImage} ${updateTime !== null && styles.highlight}`}
      >
        <img src={imgSrc} alt="" />
      </button>
      <div className={styles.storyName}>{userName}</div>
    </div>
  );
}

StoryBuilder.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  updateTime: PropTypes.string,
};
