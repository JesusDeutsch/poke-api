import React from "react";
import DataPokemon from "./components/DataPokemon";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pokemon-blue text-pokemon-white">
      <DataPokemon />
    </div>
  );
};

export default App;
