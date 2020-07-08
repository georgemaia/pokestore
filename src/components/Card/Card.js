import React from 'react';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                <h2>{pokemon.name}</h2>
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Peso: {pokemon.weight} Libras</p>
                    <p></p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Altura: {pokemon.height} Pés</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Habilidade: {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;