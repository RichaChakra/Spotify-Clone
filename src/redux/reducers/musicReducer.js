const initialState = {
    searchResults: [],
  };
  
  const musicReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_MUSIC':
        return {
          ...state,
          searchResults: action.payload.tracks.items,
        };
      default:
        return state;
    }
  };
  
  export default musicReducer;
  