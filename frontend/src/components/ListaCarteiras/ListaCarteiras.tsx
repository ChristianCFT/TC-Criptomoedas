import React from 'react';
import './listaCarteiras.css';
import CardCarteira from '../CardCarteira/CardCarteira';

function ListaCarteiras({ carteiras }) {
    return (
        <div className="area-carteiras-grid">
            {carteiras?.map((carteira) => (
                <CardCarteira 
                    key={carteira.id} 
                    titulo={carteira.titulo} 
                    saldo={carteira.saldo} 
                />
            ))}
        </div>
    );
}

export default ListaCarteiras;