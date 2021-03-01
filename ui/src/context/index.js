// Redux
import { createStore } from "redux";

// Reducers
import reducer from "../reducers";

// Parks
// import parks from "../assets/parks";

// Initial state
const initialState = {
  parks: [],
  selectedPark: null,
};

// Store
const store = createStore(reducer, initialState);

export default store;
