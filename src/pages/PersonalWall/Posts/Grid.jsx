import { useEffect, useState } from "react";
import styles from "./Grid.module.css";
import Pagination from "../../../components/Pagination/Pagination";
import Modal from "./Modal/Modal";
import ActionButton from "./Modal/ActionButton";
import api from "../../../api/api";
import PropTypes from "prop-types";

export default function Grid({ user }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);
  // handle modal
  const [modalDisplay, setModalDisplay] = useState(false);
  const [post, setPost] = useState();
  const [actionIsHidden, setActionIsHidden] = useState(true);

  function handleModalDisplay(post) {
    setModalDisplay((prevState) => !prevState);
    setPost(post);
  }

  function handleActionIsHidden() {
    setActionIsHidden((prevState) => !prevState);
  }

  //filter out the deleted posts
  function handlePostDeleted(deleteId) {
    setPosts((prevPosts) =>
      prevPosts.filter((post) => post.postId !== deleteId),
    );
    setModalDisplay(false);
  }

  function handleCaptionUpdated(postId, newCaption) {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postId === postId ? { ...post, caption: newCaption } : post,
      ),
    );

    setPost((prevPost) =>
      prevPost && prevPost.postId === postId
        ? { ...prevPost, caption: newCaption }
        : prevPost,
    );
  }

  //fetch posts from db
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get(`/api/posts/${user.userId}`);
      setIsLoading(false);
      setPosts(response.data);
    };

    fetchPosts();
  }, [user]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  const list = currentPosts.map((post) => (
    <a
      onClick={() => handleModalDisplay(post)}
      className={styles.post}
      key={post.postId}
    >
      <img
        src={`http://localhost:8080${post.imageSource}`}
        alt={`Post by ${user.name}`}
      />
    </a>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        {isLoading && <p>Loading posts...</p>}
        {!isLoading && posts.length === 0 && (
          <div className={styles.noPosts}>
            <p>You don&apos;t have any photos</p>
            <p>Please add some photos to your account</p>
          </div>
        )}

        {!isLoading && posts.length > 0 && list}
      </div>
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postPerPage}
        handleCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {/* modal - this is hidden by default */}
      {modalDisplay && (
        <Modal
          toggleModal={handleModalDisplay}
          fetchPost={post}
          performActionIsHidden={handleActionIsHidden}
        />
      )}
      {!actionIsHidden && post && (
        <ActionButton
          performActionIsHidden={handleActionIsHidden}
          actionId={post.postId}
          post={post}
          onPostDeleted={handlePostDeleted}
          setModalDisplay={setModalDisplay}
          onCaptionUpdated={handleCaptionUpdated}
        />
      )}
    </div>
  );
}

Grid.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
