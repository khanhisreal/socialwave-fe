import styles from "./List.module.css";
import posts from "./data";
import PostBuilder from "./PostBuilder";

export default function List() {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostBuilder key={post.postId} post={post} />
      ))}
    </div>
  );
}
