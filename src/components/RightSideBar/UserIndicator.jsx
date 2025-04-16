import styles from "./RightSideBar.module.css";
import PropTypes from "prop-types";

export default function UserIndicator({ post }) {
  return (
    <div className={styles.user}>
      <div className={styles.left}>
        <img src={post.user[0].avatarImageSource} alt="" />
        <div className={styles.infor}>
          <p>{post.user[0].name}</p>
          <p>{post.user[0].userName}</p>
        </div>
      </div>
      <div className={styles.right}>
        <button>follow</button>
      </div>
    </div>
  );
}

UserIndicator.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        avatarImageSource: PropTypes.string.isRequired,
      }),
    ).isRequired,
    postId: PropTypes.number.isRequired,
    imageSource: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    createTime: PropTypes.string.isRequired,
    updateTime: PropTypes.string.isRequired,
  }).isRequired,
};
