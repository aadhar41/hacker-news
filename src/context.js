import React, { useContext, useEffect, useReducer } from 'react';

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

// https://hn.algolia.com/api
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: true,
  hits: [],
  query: 'react',
  page: 0,
  nbPages: 0,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch stories
  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem(url, JSON.stringify({ hits: data.hits, nbPages: data.nbPages }));
      dispatch({ type: SET_STORIES, payload: { hits: data.hits, nbPages: data.nbPages } });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  // remove story
  const removeStory = (objectID) => {
    dispatch({ type: REMOVE_STORY, payload: objectID });
  };

  // handle search
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  // handle page
  const handlePage = (page) => {
    dispatch({ type: HANDLE_PAGE, payload: page });
  };

  // fetch stories
  useEffect(() => {
    const cachedData = localStorage.getItem(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
    if (cachedData) {
      const { hits, nbPages } = JSON.parse(cachedData);
      dispatch({ type: SET_STORIES, payload: { hits, nbPages } });
    } else {
      fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
    }
  }, [state.query, state.page]);
  return <AppContext.Provider value={{ ...state, removeStory, handleSearch, handlePage }}>{children}</AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }
