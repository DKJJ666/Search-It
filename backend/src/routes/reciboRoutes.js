import { Router } from "express";
import reciboControllers from "../controllers/reciboControllers.js";

const router = Router();

router.post("/", reciboControllers.criarRecibo);
router.get("/", reciboControllers.listarRecibos);

export default router;
