import "./Image.css/";

const styles = {
  imageMontain: {
    width: "60vw",
    height: "50vh",
  },
};

const textAlterna = {
  alt: "Montain",
};

export const Image = ({ imagMontain }) => {
  return (
    <img src={imagMontain} style={styles.imageMontain} alt={textAlterna.alt} />
  );
};
