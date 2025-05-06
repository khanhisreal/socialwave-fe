import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import Comment from "./Comment";
import Bottom from "./Bottom";
import api from "../../../../api/api";

export default function Modal({
  toggleModal,
  fetchPost,
  performActionIsHidden,
}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!fetchPost || !fetchPost.userId) return;

    const fetchUser = async () => {
      try {
        const response = await api.get(`/api/users/${fetchPost.userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [fetchPost]);

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
          <img src={`http://localhost:8080${fetchPost.imageSource}`} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.content}>
              <img
                src={`http://localhost:8080${user.avatarSource}`}
                alt=""
                className={styles.avatar}
              />
              <p className={styles.caption}>
                <span>{user.userName}</span> {fetchPost.caption}
              </p>
            </div>
            <div className={styles.commentSection}>
              <h3>Comments</h3>
              {fetchPost.comments && fetchPost.comments.length > 0 ? (
                fetchPost.comments.map((comment) => (
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
            <Bottom likeCount={fetchPost.likeCount} />
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
  getPostId: PropTypes.func,
  performActionIsHidden: PropTypes.func,
};
