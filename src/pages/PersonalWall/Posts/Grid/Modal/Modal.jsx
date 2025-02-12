import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import fetchPosts from "../../data";
import temp from "../../../../../assets/images/Pages/dummy_avatar.png";
import { useEffect, useState } from "react";

export default function Modal({ toggleModal, fetchPost }) {
  //hold the relavent post data
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    fetchPosts().then((data) => {
      setModalData(data.find((item) => item.id === fetchPost.id));
    });
  }, [fetchPost?.id]);

  const button = (
    <button className={styles.close} onClick={() => toggleModal()}>
      X
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
            <div className={styles.avatar}>
              <img src={temp} alt="" />
            </div>
            <div className={styles.content}>
              {/* Got some length restrictions here  */}
              <div className={styles.postText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium eius nobis magni, facilis animi nemo culpa maiores
                debitis libero assumenda?
              </div>
              {/* no limit  */}
              <div className={styles.commentSection}>
                <div className={styles.comment}>lorem</div>
                <div className={styles.comment}>lorem</div>
                <div className={styles.comment}>lorem</div>
                <div className={styles.comment}>lorem</div>
                <div className={styles.comment}>lorem</div>
                <div className={styles.comment}>lorem</div>
                <div className={styles.comment}>lorem</div>
                <div className={styles.comment}>lorem</div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>place holder</div>
        </div>
        {button}
      </div>
    </div>
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  fetchPost: PropTypes.object,
};
