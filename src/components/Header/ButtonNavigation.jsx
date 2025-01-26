import PropTypes from "prop-types";

export default function ButtonNavigation({
  children,
  buttonType,
  triggerClick,
  buttonClass,
}) {
  return (
    <div
      className={`child ${buttonClass}`}
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

ButtonNavigation.propTypes = {
  children: PropTypes.node.isRequired, // Ensures "children" is passed and is valid React node(s)
  buttonType: PropTypes.string.isRequired, // Ensures "buttonType" is passed and is a string
  triggerClick: PropTypes.func.isRequired, // Ensures "triggerClick" is passed and is a function
  buttonClass: PropTypes.string, // Ensures "buttonClass" is a string
};
