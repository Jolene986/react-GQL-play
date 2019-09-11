import React from "react";
import { useQuery } from "graphql-hooks";

import { allPokemonQuery } from "../../Query/allPokemonQuery";
import PokemonList from "../PokemonList/PokemonList";

export default function AllPokemons() {
  const { loading, data, error } = useQuery(allPokemonQuery);
  console.log(useQuery(allPokemonQuery));
  return <PokemonList loading={loading} error={error} data={data} />;
}
