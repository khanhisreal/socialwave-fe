import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./EditCaptionModal.module.css";
import api from "../../../../api/api";

export default function EditCaptionModal({
  currentPostId,
  currentCaption,
  onCancel,
  onCaptionUpdated,
  performActionIsHidden,
}) {
  const modalRef = useRef(null);
  const [caption, setCaption] = useState(currentCaption);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCancel();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onCancel]);

  const handleSave = async () => {
    try {
      await api.patch(`/api/posts/${currentPostId}`, {
        caption: caption,
      });

      console.log("Caption updated successfully!");
      onCaptionUpdated(currentPostId, caption);
      performActionIsHidden();
      onCancel();
    } catch (error) {
      console.error("Failed to update caption:", error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <h2>Edit Caption</h2>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Edit your caption here..."
        ></textarea>
        <div className={styles.actions}>
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel} className={styles.cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

EditCaptionModal.propTypes = {
  currentPostId: PropTypes.number.isRequired,
  currentCaption: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCaptionUpdated: PropTypes.func.isRequired,
  performActionIsHidden: PropTypes.func.isRequired,
};
