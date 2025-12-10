import db from "../config/db.js";

export const crearReto = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const imagen = req.file ? req.file.filename : null;

    if (!titulo || !descripcion) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const sql = `INSERT INTO retos (titulo, descripcion, imagen) VALUES (?, ?, ?)`;
    await db.query(sql, [titulo, descripcion, imagen]);

    res.json({
      message: "Reto creado correctamente",
      data: { titulo, descripcion, imagen },
    });
  } catch (error) {
    console.error("Error al crear reto:", error);
    res.status(500).json({ error: error.message });
  }
};

export const obtenerRetos = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM retos ORDER BY id DESC");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener retos:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};
