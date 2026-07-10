import { prisma } from "../prisma/client";

export class CompraService {
  async comprarCripto(usuarioId: number, carteiraId: number, criptoId: number, valorCompraBrl: number) {
    // Busca o usuário e a moeda para verificar saldos e preços
    const usuario = await prisma.usuario.findUnique({ where: { id: usuarioId } });
    const cripto = await prisma.criptomoeda.findUnique({ where: { id: criptoId } });

    if (!usuario) throw new Error("Usuário não encontrado.");
    if (!cripto) throw new Error("Criptomoeda não encontrada.");

    // Verifica se tem saldo suficiente
    if (usuario.saldoBrl < valorCompraBrl) {
      throw new Error("Saldo insuficiente para esta compra.");
    }

    // Calcula quantas moedas ele vai receber
    const quantidadeComprada = valorCompraBrl / cripto.precoAtual;

    // O $transaction garante que o dinheiro e a moeda andem juntos
    const resultado = await prisma.$transaction(async (tx) => {
      
      //A. Desconta o saldo do usuário
      await tx.usuario.update({
        where: { id: usuarioId },
        data: { saldoBrl: { decrement: valorCompraBrl } }
      });

      // Verifica se a moeda já existe nessa carteira
      const ativoExistente = await tx.carteiraCripto.findUnique({
        where: {
          carteiraId_criptoId: { carteiraId, criptoId }
        }
      });

      if (ativoExistente) {
        //Se já tem, usamos o increment
        return await tx.carteiraCripto.update({
          where: { id: ativoExistente.id },
          data: { 
            quantidade: { increment: quantidadeComprada }
          }
        });
      } else {
        // Se não tem, cria o registro inicial
        return await tx.carteiraCripto.create({
          data: {
            carteiraId,
            criptoId,
            quantidade: quantidadeComprada,
          }
        });
      }
    });

    return resultado;
  }
}