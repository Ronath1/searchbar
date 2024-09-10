import logo from './logo.svg';
import './App.css';
import React from 'react'
import SearchBar from './components/Searchbar';

function App() {
  const handleSearch = (searchParams) => {
    console.log('Search parameters:', searchParams);
    // You can add any logic here to handle the search
  };
  return (
    <div className="App">
      <h1>search bar</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
