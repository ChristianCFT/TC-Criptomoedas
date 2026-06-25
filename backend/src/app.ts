import express from "express";
import cors from "cors";
import { usuarioRoutes } from "./routes/usuario.routes";
import { carteiraRoutes } from "./routes/carteira.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios",usuarioRoutes);
app.use("/carteiras",carteiraRoutes)

export { app };