


function LinhaAtivo({ moeda, sigla, quantidade, preco, total }) {
    return (
        <tr className="linha-ativo">
            <td className="coluna-cripto">
                <div className="ativo-cripto">
                    <img src="/logo-img/logo-2.jpeg" alt={moeda} />
                    <div className="info-cripto">
                        <p className="p-nome-moeda">{moeda}</p>
                        <p className="p-sigla-moeda">{sigla}</p>
                    </div>
                </div>
            </td>
            <td className="coluna-quantidade">{quantidade} {sigla}</td>
            <td className="coluna-preco">R$ {preco}</td>
            <td className="coluna-valor-total">R$ {total}</td>
            <td className="coluna-acoes">
                <div className="acoes-ativo">
                    <button className="btn-comprar">Comprar</button>
                    <button className="btn-vender">Vender</button>
                </div>
            </td>
        </tr>
    );
}

export default LinhaAtivo