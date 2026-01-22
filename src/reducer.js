import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return {
      ...state,
      isLoading: action.payload
    };
  } else if (action.type === SET_STORIES) {
    return {
      ...state,
      isLoading: false,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages
    };
  } else if (action.type === REMOVE_STORY) {
    return {
      ...state,
      hits: state.hits.filter((hit) => hit.objectID !== action.payload)
    };
  } else if (action.type === HANDLE_PAGE) {
    if (action.payload === "prev") {
      let prevPage = state.page - 1;
      if (prevPage < 0) {
        prevPage = state.nbPages - 1;
      }
      return {
        ...state,
        page: prevPage
      };
    } else if (action.payload === "next") {
      let nextPage = state.page + 1;
      if (nextPage > state.nbPages - 1) {
        nextPage = 0;
      }
      return {
        ...state,
        page: nextPage
      };
    }
  } else if (action.type === HANDLE_SEARCH) {
    return {
      ...state,
      query: action.payload,
      page: 0,
    };
  } else {
    throw new Error(`no matching action type: ${action.type}`);
  }
}

export default reducer
