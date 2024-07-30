import React, { useEffect, useState } from "react";

const PokeCard = ({ listPokemon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(10);
  const [deletedPokemonIds, setDeletedPokemonIds] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      setIsLoading(true);
      const pokemonsPromises = listPokemon.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        return response.json();
      });

      try {
        const response = await Promise.all(pokemonsPromises);
        setPokemons(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getPokemonData();
  }, [listPokemon]);

  const fetchMorePokemon = async () => {
    const nextOffset = offset + 10;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${nextOffset}&limit=10`
    );
    const data = await response.json();
    const pokemonsPromises = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      return response.json();
    });

    try {
      const newPokemons = await Promise.all(pokemonsPromises);
      const uniqueNewPokemons = newPokemons.filter(
        (newPokemon) =>
          !pokemons.some((existingPokemon) => existingPokemon.id === newPokemon.id) &&
          !deletedPokemonIds.includes(newPokemon.id)
      );
      setPokemons((prevPokemons) => [...prevPokemons, ...uniqueNewPokemons]);
      setOffset(nextOffset);
    } catch (error) {
      console.log(error);
    }
  };

  const removePokemon = (id) => {
    setPokemons((prevPokemons) => {
      const index = prevPokemons.findIndex((pokemon) => pokemon.id === id);
      if (index !== -1) {
        const updatedPokemons = [...prevPokemons];
        updatedPokemons.splice(index, 1);
        return updatedPokemons;
      }
      return prevPokemons;
    });
    setDeletedPokemonIds((prevDeletedIds) => [...prevDeletedIds, id]);
  };

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className='flex flex-wrap w-auto bg-[url("https://wallpaper.forfun.com/fetch/da/daa821fd8d004bbd399391b8e452e542.jpeg")] bg-center bg-no-repeat bg-cover bg-fixed'>
          {pokemons.map((pokemon, id) => {
            let cardStyle = "";
            if (pokemon.id % 2 === 0) {
              cardStyle =
                "w-[500px] mx-auto min-h-[100px] bg-[#497a29] bg-opacity-80 border border-gray-300 rounded-lg shadow-md mt-10 mb-44";
            } else {
              cardStyle =
                "w-[500px] mx-auto min-h-[100px] bg-[#267597] bg-opacity-80 border border-gray-300 rounded-lg shadow-md mt-10 mb-44";
            }

            return (
              <div className={cardStyle} key={pokemon.id}>
                <div>
                  <div className="bg-orange-200 p-4 rounded-t-lg">
                    <div className="flex">
                      <span className="flex text-left font-bold text-xl">
                        {pokemon.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center"></div>
                  </div>
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                    className="m-auto w-[200px] h-[400px] min-h-10 p-1"
                  />
                  <div className="flex flex-col p-4 gap-4">
                    <button
                      className="ml-auto bg-red-500 text-white p-2 rounded"
                      onClick={() => removePokemon(pokemon.id)}
                    >
                      Eliminar
                    </button>
                    <div className="bg-red-200 p-2 rounded-lg">
                      <h2 className="font-bold">ID: {pokemon.id}</h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
         <div className="flex items-center justify-center w-full text-center my-4">
            <button
              className="w-[300px] h-[300px] bg-white border-[10px] border-black rounded-full relative flex items-center justify-center"
              onClick={fetchMorePokemon}
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500 rounded-t-full"></div>
              <div className="absolute inset-0 m-auto w-20 h-20 bg-white border-[10px] border-black rounded-full"></div>
              <div className="absolute inset-0 m-auto w-10 h-10 bg-black rounded-full"></div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokeCard;
