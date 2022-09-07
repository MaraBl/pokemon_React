import React from "react";

const PokemonCard = (props) => {
  console.log(props.id);
  return (
    <div className="mb-3 text-center">
      <h3 className="card-header text-center text-capitalize">{props.name}</h3>
      <img
        className="m-3"
        src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
        height="200px"
        alt="pokemoncard"
      />
    </div>
  );
};

export default PokemonCard;
