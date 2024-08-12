import React from 'react';
import Menu from './components/Menu';
import PokemonList from './components/PokemonList';
import SearchProvider from './providers/SearchProvider';
import "./styles/css/index.css";
import Pagination from './components/Pagination';
import PaginationProvider from './providers/PaginationProvider';
function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Menu/>
        <PokemonList/>
        <PaginationProvider>
          <Pagination/>
        </PaginationProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
