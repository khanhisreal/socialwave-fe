import styles from "./Grid.module.css";
import PostBuilder from "./PostBuilder";
import PropTypes from "prop-types";

export default function Grid({ posts }) {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostBuilder key={post.postId} post={post} />
      ))}
    </div>
  );
}

Grid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
};
