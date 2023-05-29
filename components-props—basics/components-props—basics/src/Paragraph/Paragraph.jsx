import PropTypes from "prop-types";
import "./Paragraph.css/";

export const Paragraph = (props) => {
  return <p>{props.parrafo}</p>;
};

Paragraph.propTypes = {
  parrafo: PropTypes.string,
};
