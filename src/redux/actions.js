export const addToFavorites = (item) => ({
    type: 'ADD_TO_FAVORITES',
    payload: item
  });
  
  export const removeFromFavorites = (id) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: id
  });
  