import "./App.css";
import { ImageHeader } from "./components/ImageHeader/ImageHeader";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { SubTitle } from "./components/SubTitle/SubTitle";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <div>
      <Title />
      <SubTitle />
      <ImageHeader />
      <Paragraph />
    </div>
  );
}

export default App;
