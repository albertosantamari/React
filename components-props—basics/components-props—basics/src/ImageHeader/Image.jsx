import PropTypes from "prop-types";
import "./Image.css/";

const styles = {
  imageMontain: {
    width: "60vw",
    height: "50vh",
  },
};

export const Image = ({ source, description }) => {
  return <img src={source} style={styles} alt={description} />;
};

Image.propTypes = {
  dataImag: PropTypes.string,
};
