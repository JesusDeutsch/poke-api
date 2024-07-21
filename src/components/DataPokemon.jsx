import React, { useEffect, useState } from "react";
import CardsPokemon from "./CardsPokemon";

const idPokemon = 125;

const DataPokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [gameList, setGameList] = useState([]);
  const [moves, setMoves] = useState([]);
  const [locationEncounter, setLocationEncounter] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getCharacter = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
      );
      const data = await response.json();
      setPokemon(data);

      const games = data.game_indices.map((i) => i.version.name);
      setGameList(games);

      const abilities = data.moves.map((i) => i.move.name);
      setMoves(abilities);

      const responseArea = await fetch(data.location_area_encounters);
      const dataArea = await responseArea.json();
      setLocationEncounter(dataArea);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center mt-11">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <CardsPokemon
            pokemon={pokemon}
            gameList={gameList}
            moves={moves}
            locationEncounter={locationEncounter}
          />
        )}
      </div>
    </div>
  );
};

export default DataPokemon;
