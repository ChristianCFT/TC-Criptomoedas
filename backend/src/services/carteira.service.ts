import { prisma } from "../prisma/client";

export class CarteiraService {

    async createCarteira(dados: {nome: string; usuarioId: number;}) {

        const carteira = await prisma.carteira.create({
            data: dados
        });
        return carteira;

    }

    async findAllByUsuarioId(usuarioId: number) {

        const carteiras = await prisma.carteira.findMany({
            where: {
                usuarioId
            }
        });

        return carteiras;
    }

    async deleteCarteira(id: number){
        
        await prisma.carteira.delete({
            where: {id}
        });
    }

}