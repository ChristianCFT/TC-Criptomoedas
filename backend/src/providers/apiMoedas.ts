const IDS = [
    "bitcoin",
    "ethereum",
    "tether",
    "ripple",
    "binancecoin",
    "solana",
    "usd-coin",
    "dogecoin",
    "cardano",
    "tron",
    "avalanche-2",
    "chainlink",
    "stellar",
    "hedera-hashgraph",
    "sui",
    "shiba-inu",
    "bitcoin-cash",
    "litecoin",
    "polkadot",
    "uniswap",
    "near",
    "aptos",
    "internet-computer",
    "ethereum-classic",
    "vechain",
    "filecoin",
    "algorand",
    "cosmos",
    "monero",
    "arbitrum"
];

const URL =
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=${IDS.join(",")}&sparkline=false`;

export interface CoinGeckoCoin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
}

export async function buscarCriptomoedas(): Promise<CoinGeckoCoin[]> {

    try {

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const moedas: CoinGeckoCoin[] = await response.json();

        return moedas;

    } catch (error) {

        console.error("Erro ao consultar CoinGecko:", error);

        throw error;

    }

}