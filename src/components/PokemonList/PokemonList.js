import React, { useState } from "react";

import PokemonInfo from "../PokemonInfo";
import Loader from "../Loader/Loader";
import "./PokemonList.module.css";
let ppp = 5;

const PokemonList = ({ loading, error, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <Loader />;
  if (error) return "There was an error loading the posts :(";

  const indexOfLastPokemon = currentPage * ppp;
  const indexOfFirstPokemon = indexOfLastPokemon - ppp;

  const currentPokemons = data.pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.pokemons.length / ppp); i++) {
    pageNumbers.push(i);
  }
  pageNumbers = pageNumbers.map(number => {
    return (
      <span
        key={number}
        id={number}
        onClick={e => setCurrentPage(Number(e.target.id))}
      >
        {number}
      </span>
    );
  });
  console.log(currentPokemons);
  return (
    <div>
      {currentPokemons.map(pokemon => {
        return (
          <PokemonInfo
            img={pokemon.image}
            name={pokemon.name}
            special={pokemon.attacks.special}
            type={pokemon.types}
            weight={pokemon.weight}
            height={pokemon.height}
            key={pokemon.id}
          />
        );
      })}

      <button
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentpage => currentPage - 1)}
      >
        previous
      </button>
      {pageNumbers}
      <button
        disabled={currentPage >= 10}
        onClick={() => setCurrentPage(currentPage => currentPage + 1)}
      >
        next
      </button>
    </div>
  );
};

export default PokemonList;
