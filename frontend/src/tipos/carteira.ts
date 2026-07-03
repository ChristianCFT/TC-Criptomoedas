export interface CreateCarteiraDTO {
    nome: string;
    saldo: number;
}

export interface CarteiraDTO {
    id: number;
    nome: string;
    saldo: number;
    usuarioId: number;
}