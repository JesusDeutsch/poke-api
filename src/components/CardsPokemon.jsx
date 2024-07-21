import { Gamepad2, MapPinned, Swords, Zap } from 'lucide-react';
import React from 'react';


const CardsPokemon = ({ pokemon, gameList,moves, locationEncounter}) => {
    const type = pokemon.types.map((type, i) => <div key={i}>{type.type.name}</div> );
    const items = pokemon.held_items.map((item, i) => <div key={i}>{item.item.name}</div>);

    const spriteUrls1 = Object.values(pokemon.sprites).filter(url => typeof url === 'string' && url);

    const spriteUrlsOthers = Object.values(pokemon.sprites.other).flatMap(subObj => 
      Object.values(subObj).filter(url => typeof url === 'string' && url));
    
      console.log(pokemon);
  return (
    <div className='flex flex-col gap-4 text-xl font-bold mb-4 text-pokemon-yellow' style={{ backgroundImage: `url('https://wallpaper.forfun.com/fetch/f7/f7286fea789ee6f5bd139b2fb69fe92e.jpeg')` }}>

      <div className='flex items-center justify-center bg-[white] size-fit rounded-lg m-auto'  style={{ backgroundImage: `url('https://wallpaper.forfun.com/fetch/f7/f7286fea789ee6f5bd139b2fb69fe92e.jpeg')` }}>POKEDEX</div>


      <p className='w-auto h-auto rounded-lg p-4 bg-white border-[5px] border-red-600'>Nombre: {pokemon.name}</p>
      <p className='w-auto h-auto  rounded-lg p-4 bg-white border-[5px] border-red-600'>ID: {pokemon.id}</p>
      <p className='w-auto h-auto  rounded-lg p-4 bg-white border-[5px] border-red-600'>Experiencia Base: {pokemon.base_experience}</p>
      <p className='w-auto h-auto  rounded-lg p-4 bg-white border-[5px] border-red-600'>Altura: {pokemon.height}</p>
      <p className='w-auto h-auto  rounded-lg p-4 bg-white border-[5px] border-red-600'>Peso: {pokemon.weight}</p> 
      <p> Juegos en los que ha aparecido:</p> 
        <div className='
       w-auto h-auto  rounded-lg p-4 bg-white grid grid-cols-5 border-[5px] border-red-600'>{gameList.map((game, i) =>(<p key={i} className='flex items-center gap-4'><Gamepad2 />{game}</p>))}</div>
      
      <p>Tipo: </p>
      <p className='flex items-center w-auto h-auto rounded-lg p-4 bg-white border-[5px] border-red-600'><Zap />{type}</p>
      
      <p>Lista de sus movimientos: 
        <div className='
       w-auto h-auto  rounded-lg p-4 bg-white grid grid-cols-5 border-[5px] border-red-600'>{moves.map((move,i)=> (<p key={i} className='flex items-center gap-4'><Swords />{move}</p>))}</div>
      </p>
      
      <p>Item que usa:</p>
      <p className='w-auto h-auto rounded-lg p-4 bg-white border-[5px] border-red-600'>{items}</p>
      
      <p>Lista de las áreas de localización: </p>
      <p className=' w-auto h-auto  rounded-lg p-4 bg-white border-[5px] border-red-600'>{locationEncounter.map((area, i) => <div key={i} className='flex items-center gap-4'><MapPinned />{area.location_area.name}</div>)}</p>
      <div >
      <p>Galeria:</p>
      <div className='grid grid-cols-7 items-center h-[500px] w-[1100px] p-4 mb-10 rounded-lg border-[5px] bg-white border-red-600'>
        {spriteUrls1.map((img, i) => (
        <img key={i} src={img} alt={`${pokemon.name} sprite`} className='m-2'/>
      ))}
      
      {spriteUrlsOthers.map((img, i) => (
          <img key={i} src={img} alt={`${pokemon.name} sprite`} className='m-2'/>
        ))}
      </div>
  
      </div>


      <div class=" flex items-center justify-center h-[50vh]">
  <div class="bg-yellow-400 w-[300px] shadow-md rounded-lg overflow-hidden max-w-xs">
    <img class=" bg-white border-[24px] border-yellow-400 w-full" src={pokemon.sprites.front_default} alt={pokemon.name}/>
    <div class="p-4">
      <h2 class="text-2xl font-bold text-gray-800">{pokemon.name}</h2>
      <p class="text-sm text-gray-600">{type}</p>
      <div class="mt-4">
        <h3 class="text-lg font-semibold text-gray-700">Stats:</h3>
        <ul class="mt-2 text-gray-600">
          <li>HP: {pokemon.stats[0].base_stat}</li>
          <li>Attack: {pokemon.stats[1].base_stat}</li>
          <li>Defense: {pokemon.stats[2].base_stat}</li>
          <li>Speed: {pokemon.stats[5].base_stat}</li>
        </ul>
      </div>
    </div>
  </div>
</div>



    </div>
  );
};


export default CardsPokemon;