import { useEffect, useState } from "react";
import styles from "./Grid.module.css";
import fetchPosts from "../data";
import Pagination from "./Pagination";

export default function Grid() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  //simulate an API call
  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data.map(({ id, image }) => ({ id, image })));
      setIsLoading(false);
    });
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  const list = currentPosts.map((post) => (
    <div className={styles.post} key={post.id}>
      <img src={post.image} alt="" />
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        {/* this takes some time to finish  */}
        {isLoading && <p>Loading posts...</p>}
        {!isLoading && list}
      </div>
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postPerPage}
        handleCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
