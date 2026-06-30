import { Router } from "express";
import { VisaoGeralController } from "../controller/visaoGeral.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

const visaoGeralController = new VisaoGeralController;

router.get("/dashboard", authMiddleware, visaoGeralController.getVisaoGeral);

