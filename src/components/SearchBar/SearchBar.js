import React from 'react';
import "./style.css"

const SearchBar = ({filterText, inStockOnly, setFilterText, setInStockOnly}) => {
  return (
    <div className='form-div' >
      <form>
        <input 
          type="text" 
          value={filterText} 
          placeholder='Search...'
          onChange={(e) => setFilterText(e.target.value)}
        />
        <label className='show-products-checkbox'>
          <input 
            type="checkbox" 
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          {" "}
          Only show products in stock
        </label>
      </form>
    </div>
  );
};

export default SearchBar;