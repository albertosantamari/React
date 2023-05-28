import "./App.css";

function App() {
  const barrioSesamo = ["epi", "blas", "coco", "gustavo"];

  return (
    <ol>
      {barrioSesamo.map((personajes) => {
        return <li key={personajes}>{personajes}</li>;
      })}
    </ol>
  );
}

export default App;
