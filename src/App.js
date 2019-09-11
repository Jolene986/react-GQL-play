import React from "react";

import "./App.css";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import AllPokemons from "./components/AllPokemons/AllPokemons";

const client = new GraphQLClient({
  url: "https://graphql-pokemon.now.sh/"
});

function App() {
  return (
    <ClientContext.Provider value={client}>
      {/* children */}
      <AllPokemons />
    </ClientContext.Provider>
  );
}

export default App;
