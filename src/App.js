import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import { useGlobalContext } from './context'

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className='loading'></div>;
  }
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
}

export default App
