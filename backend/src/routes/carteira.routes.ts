import { Router } from "express";
import { CarteiraController } from "../controller/carteira.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

const carteiraController = new CarteiraController

router.use(authMiddleware)
router.post("/",carteiraController.create);
router.get("/",carteiraController.findAllByUsuarioId);
router.delete("/:id",carteiraController.delete);

export {router as carteiraRoutes}