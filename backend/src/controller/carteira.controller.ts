import { Request, Response } from "express";
import { CarteiraService } from "../services/carteira.service";
import { AuthPayload } from "../tipos/auth.payload";


const carteiraService = new CarteiraService;

export class CarteiraController{

    async create(req: Request, res: Response){

        const dados = req.body;
        const user = res.locals.user as AuthPayload;
        const carteira = await carteiraService.createCarteira(dados, user.id);
        
        res.status(201).json(carteira)
    }

    async findAllByUsuarioId(req: Request, res: Response){

        const user = res.locals.user as AuthPayload;
        const carteiras = await carteiraService.findAllByUsuarioId(user.id);

        res.status(200).json(carteiras);
    }

    async delete(req: Request, res: Response){

        const id = Number(req.params.id)
        const user = res.locals.user as AuthPayload;
        await carteiraService.deleteCarteira(id, user.id);

        res.status(200).send()

    }
}