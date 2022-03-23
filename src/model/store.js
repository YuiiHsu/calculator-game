import { createStore } from "redux";
import { itemReducer } from "./reducer.js";

const store = createStore(itemReducer);

export default store;