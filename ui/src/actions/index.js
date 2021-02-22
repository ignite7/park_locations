// Actions
const setPark = (payload) => ({
  type: "SET_PARK",
  payload,
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
  setPark,
  setSelectedPark,
  setFilterParks,
};

export default actions;
