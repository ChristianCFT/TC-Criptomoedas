import { Request, Response } from "express";
import { UsuarioService } from "../services/usuario.service";

const usuarioService = new UsuarioService()

export class UsuarioController{
    
    async create(req :Request, res :Response){

        const dados = req.body;
        const usuario = await usuarioService.createUsuario(dados);
        
        res.status(201).json(usuario);

    }

    async findById(req: Request, res: Response){
        const id = Number(req.params.id)
        const usuario = await usuarioService.findUsuarioById(id);
        
        res.status(200).json(usuario);

    }        
}
