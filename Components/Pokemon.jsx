import { useEffect, useState } from "react";
import "./Pokemon.css";
import PokemonCard from "./PokemonCard";
const Pokemon = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonError, setError] = useState("");
  const [Search,setInput]=useState(" ")
  const[Name,setName]=useState([]);
  const API = "https://pokeapi.co/api/v2/pokemon?limit=50";

  

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setApiData(data);
        const detailedData = data.results.map(async (curPokemon) => {
          const res = await fetch(curPokemon.url);
          const data = await res.json();
          return data;
        });
        const SearchingData =data.results.map((currSearch)=>{
            console.log(currSearch.name);
        })
        const PokemonDatas = await Promise.all(detailedData);
        setApiData(PokemonDatas);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Pikachu:", error);
        setLoading(true)
        setError(error);
      }
    };
    fetchPokemon();
  }, []);


  
  // const handleSearch=apiData.filter((currPokemon)=>currPokemon.name.toLowerCase().includes(Search.toLowerCase()))
  
  useEffect(() => {
    if (pokemonError && loading)
      return (
        <div className="flex items-center justify-center w-screen h-screen text-4xl font-bold">
          <p>Error in Catchiing Pokemons{pokemonError}</p>
        </div>
      );
  }, [pokemonError]);

  if (loading)
    return (
      <div className="flex items-center justify-center w-screen h-screen text-4xl font-bold">
        <p>Loading.....</p>
      </div>
    );

  return (
    <div className="flex flex-col overflow-hidden justify-start h-screen-full p-6 w-screen bg-gray-200 items-center">
      <h1 className="m-4 text-3xl font-bold ">Lets Catch Pokemon</h1>
        <div>
          <input
          className="p-2 rounded bg-white mr-3"
          type="text"
          placeholder="Search Pokmeons"
          value={Search}
          onChange={
            (e)=>{setInput(e.target.value)}
          }
        />
        </div>
      <ul className="mt-5 parent">
        {apiData.map((currPokmeon) => {
          return (<PokemonCard key={currPokmeon.id} PokemonData={currPokmeon} />);
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
