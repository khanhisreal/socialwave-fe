import { useEffect, useState } from "react";
import styles from "./Grid.module.css";
import fetchPosts from "../data";

export default function Grid() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //simulate an API call
  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data.map(({ id, image }) => ({ id, image })));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      {/* this takes some time to finish  */}
      {isLoading && <p>Loading posts...</p>}
      {!isLoading &&
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <img src={post.image} alt="" />
          </div>
        ))}
    </div>
  );
}
