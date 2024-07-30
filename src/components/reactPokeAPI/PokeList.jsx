import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';

const PokeList = () => {

    const [listPokemon, setListPokemon] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getPokemon = async () => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`
          );
          const data = await response.json();
          setListPokemon(data);   
        
    
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };
      useEffect(() => {
        getPokemon();
      }, []);





  return (
    <div>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <PokeCard listPokemon = {listPokemon}
         
          />
        )}






    </div>
  )
}

export default PokeList