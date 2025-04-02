import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import fetchPosts from "../data";
import Comment from "./Comment";
import Bottom from "./Bottom";

export default function Modal({
  toggleModal,
  fetchPost,
  getPostId,
  performActionIsHidden,
}) {
  //hold the relavent post data
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    fetchPosts().then((data) => {
      const selectedPost = data.find((item) => item.id === fetchPost.id);
      setModalData(selectedPost);
      if (selectedPost) {
        getPostId(selectedPost);
      }
    });
  }, [fetchPost?.id, getPostId]);

  const button = (
    <button className={styles.close} onClick={() => toggleModal()}>
      X
    </button>
  );

  const actionButton = (
    <button className={styles.togglePost} onClick={performActionIsHidden}>
      ...
    </button>
  );

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={modalData.image} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.content}>
              <img src="/dummy_avatar.png" alt="" className={styles.avatar} />
              <p className={styles.caption}>
                <span>{modalData.username}</span> {modalData.caption}
              </p>
            </div>
            <div className={styles.commentSection}>
              <h3>Comments</h3>
              {modalData.comments && modalData.comments.length > 0 ? (
                modalData.comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    commentAvatar={comment.avatar}
                    commentName={comment.name}
                    commentText={comment.text}
                    commentTimeStamp={comment.timestamp}
                  />
                ))
              ) : (
                <p>No comments available.</p>
              )}
            </div>
          </div>
          <div className={styles.bottom}>
            <Bottom likeCount={modalData.likes} />
          </div>
        </div>
        {button}
        {actionButton}
      </div>
    </div>
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  fetchPost: PropTypes.object,
  getPostId: PropTypes.func.isRequired,
  performActionIsHidden: PropTypes.func,
};
