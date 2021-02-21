// Actions
const setParks = (payload) => ({
  type: "SET_PARKS",
});

const setSelectedPark = (payload) => ({
  type: "SET_SELECTED_PARK",
  payload,
});

const setFilterParks = (payload) => ({
  type: "SET_FILTER_PARKS",
  payload,
});

const actions = {
  setParks,
  setSelectedPark,
  setFilterParks,
};

export default actions;
