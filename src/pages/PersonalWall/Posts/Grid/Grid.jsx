import { useEffect, useState } from "react";
import styles from "./Grid.module.css";
import fetchPosts from "../data";
import Pagination from "./Pagination";
import Modal from "./Modal/Modal";

export default function Grid() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);
  // handle modal
  const [modalDisplay, setModalDisplay] = useState(false);
  const [post, setPost] = useState();

  function handleModalDisplay(post) {
    setModalDisplay((prevState) => !prevState);
    setPost(post);
  }

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
    <a
      onClick={() => handleModalDisplay(post)}
      className={styles.post}
      key={post.id}
    >
      <img src={post.image} alt="" />
    </a>
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
      {/* modal - this is hidden by default */}
      {modalDisplay && (
        <Modal toggleModal={handleModalDisplay} fetchPost={post} />
      )}
    </div>
  );
}
