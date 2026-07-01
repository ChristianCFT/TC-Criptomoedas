import React from 'react';
import './cardCarteira.css';
import CarteiraImg from "../../../src/assets/images/carteira.jpg";

function CardCarteira({ titulo, saldo}){
    return (
        <div className="card-carteira">
            <div className="card-header">
                <img src={CarteiraImg.src} alt='Carteira'/>
                <h3 className="titulo-carteira">{titulo}</h3>
            </div>
            <div className="info-saldo">
                <p className="titulo-saldo">Saldo total</p>
                <p className="saldo">R$ <span className="valor-saldo">{saldo}</span></p>
            </div>
            <button className="btn-ver-carteira" >Ver carteira</button>
        </div>
    );
};

export default CardCarteira;