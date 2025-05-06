import { useEffect, useRef, useState } from "react";
import styles from "./ActionButton.module.css";
import PropTypes from "prop-types";
import api from "../../../../api/api";
import EditCaptionModal from "./EditCaptionModal";

export default function ActionButton({
  performActionIsHidden,
  actionId,
  post,
  onPostDeleted,
  setModalDisplay,
  onCaptionUpdated,
}) {
  const modalRef = useRef(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (showEditModal) return;

    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        performActionIsHidden();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [performActionIsHidden, showEditModal]);

  const deletePost = async (deleteId) => {
    const userDecision = confirm(
      "Are you sure you want to delete this post? This action cannot be undone.",
    );
    if (!userDecision) return;

    try {
      const response = await api.delete(`/api/posts/${deleteId}`);
      console.log(response.data);
      onPostDeleted(deleteId);
      performActionIsHidden();
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const cancelPost = () => {
    setModalDisplay(false);
    performActionIsHidden();
  };

  const editPost = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <a onClick={() => deletePost(actionId)}>Delete</a>
        <a onClick={editPost}>Edit</a>
        <a onClick={cancelPost}>Cancel</a>
      </div>

      {showEditModal && (
        <EditCaptionModal
          currentPostId={post.postId}
          currentCaption={post.caption}
          onCancel={closeEditModal}
          onCaptionUpdated={onCaptionUpdated}
          onSetShowEditModal={setShowEditModal}
          performActionIsHidden={performActionIsHidden}
        />
      )}
    </div>
  );
}

ActionButton.propTypes = {
  performActionIsHidden: PropTypes.func.isRequired,
  actionId: PropTypes.number.isRequired,
  onPostDeleted: PropTypes.func.isRequired,
  setModalDisplay: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  onCaptionUpdated: PropTypes.func.isRequired,
};
