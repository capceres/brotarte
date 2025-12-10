import express from "express";
import cors from "cors";
import fs from "fs";
import db from './config/db.js';
import rutasReto from "./routes/retos.js";
console.log("Rutas cargadas:");
console.log(rutasReto);

const app = express();
app.use(cors({
  origin: true,
  methods: ["GET", "POST"],
  credentials: true
}));


app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/retos", rutasReto);

const PORT = 4000;



// leer el archivo JSON con los datos de retos
const data = JSON.parse(fs.readFileSync("./data/retos.json", "utf-8"));

// Verificar conexión a MySQL al iniciar
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("Conectado a MySQL correctamente");
    connection.release();
  } catch (err) {
    console.error("Error al conectar a MySQL:", err);
  }
})();


// se elige un elemento aleatorio de un array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// datos de Generar reto
app.get("/api/random", (req, res) => {
const tema = getRandomItem(data.temas);
const tecnica = getRandomItem(data.tecnicas);
const restriccion = getRandomItem(data.restricciones);

const reto = `Crea ${tema} con ${tecnica}, ${restriccion}.`;

res.json({ reto });
});


// Comprueba que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

