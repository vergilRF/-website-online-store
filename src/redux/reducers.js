const initialState = {
    favoriteItems: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, action.payload]
        };
      case 'REMOVE_FROM_FAVORITES':
        return {
          ...state,
          favoriteItems: state.favoriteItems.filter(item => item.id !== action.payload.id)
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  