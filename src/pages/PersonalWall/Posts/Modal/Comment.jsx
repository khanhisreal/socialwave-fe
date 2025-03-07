import styles from "./Comment.module.css";
import PropTypes from "prop-types";

export default function Comment({
  commentAvatar,
  commentName,
  commentText,
  commentTimeStamp,
}) {
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <img src={commentAvatar} alt="Comment Avatar" />
      </div>
      <div className={styles.caption}>
        <div className={styles.top}>
          <span>{commentName}</span> {commentText}
        </div>
        <div className={styles.bottom}>
          <span>{commentTimeStamp}</span>
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  commentAvatar: PropTypes.string.isRequired,
  commentName: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  commentTimeStamp: PropTypes.string.isRequired,
};
