import { useEffect, useRef } from "react";
import styles from "./ActionButton.module.css";
import PropTypes from "prop-types";

export default function ActionButton({ performActionIsHidden, postId }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        performActionIsHidden(); // Close the modal when clicking outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [performActionIsHidden]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <a href="#" onClick={() => alert(postId.id)}>Delete</a>
        <a href="#">Edit</a>
        <a href="#">Cancel</a>
      </div>
    </div>
  );
}

ActionButton.propTypes = {
  performActionIsHidden: PropTypes.func.isRequired,
  postId: PropTypes.object.isRequired,
};
