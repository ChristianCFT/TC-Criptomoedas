import { CarteiraDTO, CreateCarteiraDTO } from "../tipos/carteira";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function create(dados: CreateCarteiraDTO): Promise<void> {

    const response = await fetch(`${API_URL}/carteiras`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(dados),
    });

    if (!response.ok) {
        throw new Error("Erro ao criar carteira.");
    }
}

export async function getCarteiras(cookie?: string): Promise<CarteiraDTO[]> {

    const response = await fetch(`${API_URL}/carteiras`, {
        method: "GET",
        headers: {
         "Cookie": cookie ?? "",
        }
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar carteiras.");
    }

    const dados = await response.json();
    return dados;
}


export async function getCarteira(id: number, cookie?: string): Promise<CarteiraDTO> {

    const response = await fetch(`${API_URL}/carteiras/${id}`, {
        method: "GET",
        headers: {
            "Cookie": cookie ?? "",
        }
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar carteira.");
    }

    const dados = await response.json();
    return dados;
}

export async function remove(id: number): Promise<void> {

    const response = await fetch(`${API_URL}/carteiras/${id}`, {
        method: "DELETE",
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Erro ao excluir carteira.");
    }
}