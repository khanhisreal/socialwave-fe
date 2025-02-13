import styles from "./Bottom.module.css";
import PropTypes from "prop-types";

// regHeart: normal hear - faheart: liked post
// regBookmark: normal bookmark - fabookmark: saved post
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaShareAlt,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";

export default function Bottom({ likeCount }) {
  return (
    <div className={styles.container}>
      <div className={styles.functionalBar}>
        <div className={styles.left}>
          <button>
            <FaRegHeart />
          </button>
          <button>
            <FaRegComment />
          </button>
          <button>
            <FaShareAlt />
          </button>
        </div>
        <div className={styles.right}>
          <button>
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <div className={styles.reactions}>
        {likeCount > 1 ? `${likeCount} likes` : `${likeCount} like`}
      </div>
      <div className={styles.inputBar}>
        <button>a</button>
        <input type="text" placeholder="Add a comment..."/>
        <button>Post</button>
      </div>
    </div>
  );
}

Bottom.propTypes = {
  likeCount: PropTypes.number.isRequired,
};
