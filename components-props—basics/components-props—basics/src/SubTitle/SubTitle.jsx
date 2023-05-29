import PropTypes from "prop-types";
import "./SubTitle.css/";

export const SubTitle = (props) => {
  return <h2>{props.subtitle}</h2>;
};

SubTitle.propTypes = {
  subtitle: PropTypes.string,
};
