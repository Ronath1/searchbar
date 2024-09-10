import React, { useState } from 'react';
import '../App.css'; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [distance, setDistance] = useState('5 Miles');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch({ searchTerm, zipCode, distance, category });
  };

  return (
    <div className="form-container">

    
    
    <form className="search-bar" >
    <div className="spaced-checkbox">
      <label htmlFor="searchTerm">Search For Items:</label>
      <input
        id="searchTerm"
         type="text"
        placeholder="Search For Items"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>

      
      
      
      <div className="spaced-checkbox">
      <label htmlFor="ZipCode">Zipcode</label>

      <input
      id="ZipCode"
        type="text"
        placeholder="Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      </div>

      
      
      <div className="spaced-checkbox">
      <label htmlFor="Distance">Distance</label>

      <select 
     id="Distance"
       value={distance} 
      onChange={(e) => setDistance(e.target.value)}>
      
      <option value="5 Miles">5 Miles</option>
      <option value="10 Miles">10 Miles</option>
      <option value="25 Miles">25 Miles</option>
     <option value="50 Miles">50 Miles</option>
    <option value="100 Miles">100 Miles</option>
    <option value="250 Miles">250 Miles</option>
    <option value="500 Miles">500 Miles</option>

      </select>
      <button onClick={handleSearch}>Go</button>

      </div>


      <div className="spaced-checkbox">

      <label htmlFor="Vehicle type">Vehicle type</label>

      <select 
      id="VehicleType"
      value={category} 
      onChange={(e) => setCategory(e.target.value)}>
        <option value="">No Category Selected</option>
        <option value="Car">Car</option>
        <option value="Truck">Truck</option>
        <option value="Hatchback">Hatchback</option>
        <option value="coupe">coupe</option>
        <option value="van">van</option>
        <option value="suv">suv</option>

      </select>
      <button onClick={handleSearch}>Go</button>

      </div>
     <button onClick={handleSearch}>Show All Items</button>
    </form>
    </div>
  );
};

export default SearchBar;
