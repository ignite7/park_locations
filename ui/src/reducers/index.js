// Reducers
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PARKS":
      return { ...state, parks: [...state.parks, action.payload] };
    case "SET_SELECTED_PARK":
      return { ...state, selectedPark: action.payload };
    case "SET_FILTER_PARKS":
      return { ...state, filterParks: action.payload };
    default:
      return state;
  }
};

export default reducer;
