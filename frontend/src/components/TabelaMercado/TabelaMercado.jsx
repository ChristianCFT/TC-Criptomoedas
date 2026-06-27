// TabelaMercado.jsx
import '../TabelaAtivos/tabelaAtivos.css'; // Novamente, reaproveitando o CSS da estrutura da tabela
import LinhaMercado from './LinhaMercado';

export default function TabelaMercado(mercadoGlobal) {
    return (
        <section id="secao-tabela-ativos">
            <table id="tabela-ativos">
                
                {/* Cabeçalho simplificado */}
                <thead>
                    <tr>
                        <th>Criptomoeda</th>
                        <th>Preço Atual</th>
                    </tr>
                </thead>

                {/* Corpo da tabela usando o .map() para desenhar as linhas do mercado */}
                <tbody>
                    {mercadoGlobal?.map((cripto) => (
                        <LinhaMercado 
                            key={cripto.id}
                            moeda={cripto.moeda}
                            sigla={cripto.sigla}
                            preco={cripto.preco}
                        />
                    ))}
                </tbody>
                
            </table>
        </section>
    );
}