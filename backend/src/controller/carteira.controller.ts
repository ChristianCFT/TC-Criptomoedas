import { Request, Response } from "express";
import { CarteiraService } from "../services/carteira.service";


const carteiraService = new CarteiraService;

export class CarteiraController{

    async create(req: Request, res: Response){

        const dados = req.body;
        const carteira = await carteiraService.createCarteira(dados);
        
        res.status(201).json(carteira)
    }

    async findAllByUsuarioId(req: Request, res: Response){

        const idUsuario = Number(req.params.id)
        const carteiras = await carteiraService.findAllByUsuarioId(idUsuario);

        res.status(200).json(carteiras);
    }

    async delete(req: Request, res: Response){

        const id = Number(req.params.id)
        await carteiraService.deleteCarteira(id);

        res.status(200).send()

    }
}