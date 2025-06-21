import "./PokemonCard.css";

const PokemonCard = ({ PokemonData }) => {
  return (
    <div className="flex flex-col p-2 items-center justify-center gap-1 rounded bg-white div1">
      <figure>
        <img
          src={PokemonData.sprites.front_default}
          alt={PokemonData.name}
        />
      </figure>
      <h1 className="text-center text-sm font-bold ">{PokemonData.name}</h1>

      <div className="bg-green-400 p-1 rounded text-center text-sm ">
        <p>{PokemonData.types.map((t) => t.type.name).join(", ")}</p>
      </div>

      <div className="continer text-sm text-center mt-3">
        <div>
            <span>{PokemonData.weight}</span>
             <p className="font-bold text-sky-400">Weight</p>
        </div>

       <div>
            <span>{PokemonData.height}</span>
             <p className="font-bold text-sky-400">Height</p>
        </div>

        <div>
            <span>{PokemonData.stats[5].base_stat}</span>
             <p className="font-bold text-sky-400">Speed</p>
        </div>
      </div>



      <div className="continer text-sm  text-center mt-2 ">
        <div>
            <span>{PokemonData.base_experience}</span>
             <p className="font-bold text-sky-400">Experience</p>
        </div>

       <div>
            <span>{PokemonData.stats[1].base_stat}</span>
             <p className="font-bold text-sky-400">Attack</p>
        </div>

        <div>
            <span>{PokemonData.abilities.map((abilityInfo)=>abilityInfo.ability.name).slice(0,1).join(", ")}</span>
             <p className="font-bold text-sky-400">Speed</p>
        </div>
      </div>


    </div>
  );
};

export default PokemonCard;
