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
    console.error("❌ Error al crear reto:", error);
    res.status(500).json({ error: error.message });
  }
};
