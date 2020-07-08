import React, { useState, useEffect } from 'react';
import { getAllPokemon } from './services/pokemon';
import Header from './components/ui/Header';
import './App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nestUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setLoading(false);
    }
    fetchData();
  }, [])

  return (
    <div className="container">
      <Header />
      { loading ? <h1>Loading...</h1> : (
        <h1>Data is fetched</h1>
      )}
    </div>
  );
}

export default App;
