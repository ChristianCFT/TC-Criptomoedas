import { prisma } from "../prisma/client";

export class UsuarioService {

  async createUsuario(dados: {nome: string; email: string; senha: string;}) {

    const usuario = await prisma.usuario.create({
      data: dados
    });
    
    return usuario;
  }

  async findUsuarioById(id: number) {

    return await prisma.usuario.findUnique({where: {id}});

  }
}