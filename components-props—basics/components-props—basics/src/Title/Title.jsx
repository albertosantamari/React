import PropTypes from "prop-types";
import "./Title.css/";

export const Title = (props) => {
  return <h1>{props.title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string,
};
