import React from "react";
import DataPokemon from "./components/DataPokemon";
import PokeList from "./components/reactPokeAPI/PokeList";

const App = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-pokemon-blue text-pokemon-white">
        <DataPokemon />
      </div>

      <div>
        <PokeList />
      </div>
    </div>
  );
};

export default App;
