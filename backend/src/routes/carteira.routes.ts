import { Router } from "express";
import { CarteiraController } from "../controller/carteira.controller";

const router = Router()

const carteiraController = new CarteiraController

router.post("/",carteiraController.create);
router.get("/usuario/:id",carteiraController.findAllByUsuarioId);
router.delete("/:id",carteiraController.delete);

export {router as carteiraRoutes}