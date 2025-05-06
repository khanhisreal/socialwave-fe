import styles from "./List.module.css";
import PostBuilder from "./PostBuilder";
import PropTypes from "prop-types";

export default function List({ posts }) {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostBuilder key={post.postId} post={post} />
      ))}
    </div>
  );
}

List.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
};
