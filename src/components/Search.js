import React, { useState } from 'react';

const SearchBar = ({ pokemonList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonList);

  const handleSearch = () => {
    const filteredList = pokemonList.filter(pokemon => pokemon.name.includes(searchTerm));
    setFilteredPokemonList(filteredList);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <PokemonList pokemonList={filteredPokemonList} />
    </div>
  );
};

const PokemonList = ({ pokemonList }) => (
  <div>
    {pokemonList.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);

const PokemonCard = ({ pokemon }) => (
  <div>
    <h2>{pokemon.name}</h2>
    <img src={pokemon.imageUrl} alt={pokemon.name} />
  </div>
);

export default SearchBar