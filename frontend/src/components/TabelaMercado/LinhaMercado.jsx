// LinhaMercado.jsx
import '../TabelaAtivos/linhaAtivo.css'; // Você pode reaproveitar o mesmo CSS da linha da carteira!

export default function LinhaMercado({ moeda, sigla, preco }) {
    return (
        <tr className="linha-ativo">
            <td className="coluna-cripto">
                <div className="ativo-cripto">
                    {/* Mantemos a foto e os nomes */}
                    <img src="/logo-img/logo-2.jpeg" alt={moeda} />
                    <div className="info-cripto">
                        <p className="p-nome-moeda">{moeda}</p>
                        <p className="p-sigla-moeda">{sigla}</p>
                    </div>
                </div>
            </td>
            
            {/* Apenas mostramos o preço global da moeda */}
            <td className="coluna-preco">R$ {preco}</td>
        </tr>
    );
}