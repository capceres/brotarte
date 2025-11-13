import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

const PORT = 4000;

// Leer el archivo JSON
const data = JSON.parse(fs.readFileSync("./data/retos.json", "utf-8"));

// Función que elige un elemento aleatorio de un array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Endpoint principal
app.get("/api/random", (req, res) => {
  const tema = getRandomItem(data.temas);
  const tecnica = getRandomItem(data.tecnicas);
  const restriccion = getRandomItem(data.restricciones);

  const reto = `Crea ${tema} con ${tecnica}, ${restriccion}.`;

  res.json({ reto });
});

app.listen(PORT, () => console.log(`🎨 Servidor corriendo en puerto ${PORT}`));
