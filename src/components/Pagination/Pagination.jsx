import styles from "./Pagination.module.css";
import PropTypes from "prop-types";

export default function Pagination({
  totalPosts,
  postsPerPage,
  currentPage,
  handleCurrentPage,
}) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pages = [];

  // Determine the start and end page numbers
  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, currentPage + 1);

  // Ensure at most 3 pages are shown in the middle
  if (currentPage === 1) {
    end = Math.min(totalPages, 3);
  } else if (currentPage === totalPages) {
    start = Math.max(1, totalPages - 2);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {currentPage > 2 && (
          <>
            <button onClick={() => handleCurrentPage(1)}>1</button>
            {currentPage > 3 && <span>...</span>}
          </>
        )}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handleCurrentPage(page)}
            className={page === currentPage ? styles.active : ""}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages - 1 && (
          <>
            {currentPage < totalPages - 2 && <span>...</span>}
            <button onClick={() => handleCurrentPage(totalPages)}>
              {totalPages}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleCurrentPage: PropTypes.func.isRequired,
};
