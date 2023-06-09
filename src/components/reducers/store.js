import { createStore } from "redux";
import rootReducer from "./reducers"; // Crea el archivo reducers.js

const store = createStore(rootReducer);

export default store;
