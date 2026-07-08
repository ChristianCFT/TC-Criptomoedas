export interface CreateCarteiraDTO {
    nome: string;
}

export interface CarteiraDTO {
    id: number;
    nome: string;
    saldo: number;
    usuarioId: number;
}

export interface DashboardDTO {
    nome: string;
    patrimonioTotal: number;
    quantidadeCarteiras: number;
    carteiras: CarteiraDTO[];
}