import { Router } from "express";
import { UsuarioController } from "../controller/usuario.controller";

const router = Router()

const usuarioController = new UsuarioController;

router.post("/",usuarioController.create);
router.get("/:id",usuarioController.findById);

export {router as usuarioRoutes}