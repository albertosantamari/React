import "./App.css";
import { Title } from "./Title/Title";
import { SubTitle } from "./SubTitle/SubTitle";
import { Paragraph } from "./Paragraph/Paragraph";
import { Image } from "./ImageHeader/Image";

function App() {
  const textOne = "H1 recibido por props";
  const textTwo = "H2 recibido por props";
  const imagMontain =
    "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA";
  const textParraf = "P recibido por props";

  return (
    <div className="contenedor">
      <Title textOne={textOne} />
      <SubTitle textTwo={textTwo} />
      <Image imagMontain={imagMontain} />
      <Paragraph textThree={textParraf} />
    </div>
  );
}

export default App;
