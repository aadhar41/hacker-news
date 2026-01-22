import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <>
      <section className="form">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <h2>search hacker news</h2>
          <input type="text" name="query" className='form-input' value={query} onChange={(e) => handleSearch(e.target.value)} placeholder="search" />
        </form>
      </section>
    </>
  );
}

export default SearchForm
