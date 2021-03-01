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

const setToggle = (payload) => ({
  type: "SET_TOGGLE",
  payload,
});

const actions = {
  setPark,
  setSelectedPark,
  setFilterParks,
  setToggle,
};

export default actions;
