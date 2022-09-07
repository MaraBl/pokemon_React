import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { getPokemons } from "../services/pokemons";

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const [details, setDetails] = useState([]);

  function getPokemonDetails(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setDetails([data.name, data.height, data.weight, data.base_experience])
      );
  }

  return (
    <div className="bg-dark">
      <div className="bg-light row">
        <h1 className="text-center bg-dark text-white p-3 font-weight-bold spacing">
          Pokemons
        </h1>
          <div className="col-sm-12 col-md-12 col-lg-7 p-3 p-lg-5">
            <h2>All Pokemons</h2>
            <div className="overflow-auto" style={{ maxHeight: 400 }}>
              {Object.entries(pokemons)[3] &&
                Object.entries(pokemons)[3][1].map((pokemon, index) => {
                  return (
                    <div className="card border-secondary mb-5">
                      <PokemonCard key={index} {...pokemon} />
                      <button
                        className="btn-primary btn-lg btn-block"
                        onClick={() => getPokemonDetails(pokemon.url)}
                      >
                        See more about{" "}
                        <span className="text-capitalize"> {pokemon.name}</span>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 p-3 p-lg-5">
            <h2>Details about Pokemon</h2>
            <div className="card p-3">
              <p className="text-capitalize card-header">Name: {details[0]}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Height: {details[1]}</li>
                <li className="list-group-item">Weight: {details[2]}</li>
                <li className="list-group-item">
                  Base Experience: {details[3]}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AllPokemon;