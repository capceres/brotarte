import express from "express";
import multer from "multer";
import { crearReto } from "../controllers/retosController.js";

const router = express.Router();


const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


router.post("/", upload.single("imagen"), crearReto);

export default router;
