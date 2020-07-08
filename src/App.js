import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import Card from './components/Card';
import Header from './components/ui/Header';
import './App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nestUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }));

    setPokemonData(_pokemonData)
  }

  return (
    <div className="container">
      <Header />
      { loading ? <h1>Loading...</h1> : (
        <>
          <div className="cards">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon}/>
            })}
          </div>
        </>
      )
      }
    </div>
  );
}

export default App;
