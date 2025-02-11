import styles from "../PersonalWall.module.css";
import PropTypes from "prop-types";

export default function Modal({ image, caption, handleModal }) {
  return (
    <div id={styles.myModal} className={styles.modal}>
      <span className={styles.close} onClick={handleModal}>
        x
      </span>
      <img src={image} className={styles.modalContent} id={styles.img01} />
      <div id={styles.caption}>{caption}</div>
    </div>
  );
}

Modal.propTypes = {
  image: PropTypes.node.isRequired,
  caption: PropTypes.string.isRequired,
  handleModal: PropTypes.func.isRequired,
};
