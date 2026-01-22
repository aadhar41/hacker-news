import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, nbPages, page, handlePage } = useGlobalContext();
  return (
    <>
      <div className="btn-container">
        <button type="button" className="btn prev-btn" onClick={() => handlePage("prev")} disabled={isLoading}>prev</button>
        <p className="page">{page + 1} of {nbPages}</p>
        <button type="button" className="btn next-btn" onClick={() => handlePage("next")} disabled={isLoading}>next</button>
      </div>
    </>
  );
}

export default Buttons
