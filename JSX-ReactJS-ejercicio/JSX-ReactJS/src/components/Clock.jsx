import { useEffect, useState } from "react";

export const Clock = () => {
  const horaActual = new Date().getHours();
  const [saludo, setSaludo] = useState("");
  useEffect(() => {
    // se ejecuta cuando renderiza
    const saludar = (hora) => {
      if (hora >= 6 && hora < 12) {
        return "buenos dias";
      } else if (hora >= 12 && hora < 19) {
        return "buenas tardes";
      } else hora >= 19 && hora < 6;
      return "buenas noches";
    };
    setSaludo(saludar(horaActual));
  }, []); // array de dependencias

  return (
    <div>
      <h2>{saludo}</h2>
    </div>
  );
};
