import styles from "./Grid.module.css";
import posts from "./data";
import PostBuilder from "./PostBuilder";

export default function Grid() {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostBuilder key={post.postId} post={post} />
      ))}
    </div>
  );
}
