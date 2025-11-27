import express from "express";
import cors from "cors";
import fs from "fs";
import db from './config/db.js';
import retoRoutes from "./routes/retos.js";
console.log("Rutas cargadas:");
console.log(retoRoutes);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/retos", retoRoutes);

const PORT = 4000;



// Leer el archivo JSON
const data = JSON.parse(fs.readFileSync("./data/retos.json", "utf-8"));

// Verificar conexión a MySQL al iniciar
db.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Error al conectar a MySQL:", err);
    } else {
        console.log("✅ Conectado a MySQL correctamente");
        connection.release(); // Liberar conexión
    }
});

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


// Comprueba que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor funcionando 👌');
});

app.listen(PORT, () => console.log(`🎨 Servidor corriendo en puerto ${PORT}`));

