import "./App.css";
import { Title } from "./Title/Title";
import { Image } from "./ImageHeader/Image";
import { Paragraph } from "./Paragraph/Paragraph";
import { SubTitle } from "./SubTitle/SubTitle";

function App() {
  const title = "holoaaa";
  const subtitle = "h2 recibido";
  const dataImag = {
    src: "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
    alt: "Montain",
  };
  const parrafo = "P recibido";

  return (
    <div className="contenedor">
      <Title title={title} />
      <SubTitle subtitle={subtitle} />
      <Image source={dataImag.src} description={dataImag.alt} />
      <Paragraph parrafo={parrafo} />
    </div>
  );
}

export default App;
