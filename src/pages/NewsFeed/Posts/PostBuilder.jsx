import styles from "./PostBuilder.module.css";
import PropTypes from "prop-types";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";

export default function PostBuilder({ post }) {
  return (
    <div className={styles.post}>
      <div className={styles.top}>
        <div className={styles.content}>
          <img
            src={`http://localhost:8080${post.userPostDTO.avatarSource}`}
            alt=""
          />
          <p>{post.userPostDTO.userName}</p>
          <button>Follow</button>
        </div>
        <div className={styles.optionButton}>
          <button>
            <BsThreeDots />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={`http://localhost:8080${post.imageSource}`} alt="" />
        </div>
        <div className={styles.likeCount}>
          {post.likeCount} like{post.likeCount !== 1 && "s"}
        </div>
        <div className={styles.caption}>
          <span>{post.userPostDTO.userName}</span>
          {post.caption}
        </div>
      </div>
      <div className={styles.bottom}>
        <button>
          <BiRepost className={styles.icon} />
        </button>
        <div>
          <button>
            <FaRegHeart className={styles.icon} />
          </button>
          <button>
            <FaRegComment className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

PostBuilder.propTypes = {
  post: PropTypes.shape({
    imageSource: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    userPostDTO: PropTypes.shape({
      userName: PropTypes.string.isRequired,
      avatarSource: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
