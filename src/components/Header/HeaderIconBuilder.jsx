import PropTypes from "prop-types";
import styles from "./Header.module.css";

export default function HeaderIconBuilder({
  children,
  buttonType,
  triggerClick,
  buttonClass,
}) {
  return (
    <div
      className={`${styles.child} ${styles[buttonClass]}`}
      href="#"
      // call the state that has been lifted up to the parent component
      onClick={() => {
        // assign button type to be shown
        triggerClick(buttonType);
      }}
    >
      {children}
    </div>
  );
}

HeaderIconBuilder.propTypes = {
  children: PropTypes.node.isRequired, // Ensures "children" is passed and is valid React node(s)
  buttonType: PropTypes.string.isRequired, // Ensures "buttonType" is passed and is a string
  triggerClick: PropTypes.func.isRequired, // Ensures "triggerClick" is passed and is a function
  buttonClass: PropTypes.string, // Ensures "buttonClass" is a string
};
