import "./ButtonNavigation.css";
import PropTypes from "prop-types";

export default function ButtonNavigation({ children }) {
  return (
    <a className="child" href="">
      {children}
    </a>
  );
}

ButtonNavigation.propTypes = {
  children: PropTypes.node.isRequired, // Ensures "children" is passed and is valid React node(s)
};
