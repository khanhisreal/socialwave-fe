import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  handleCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => handleCurrentPage(page)}
              className={page == currentPage ? styles.active : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  handleCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
