import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./components/reducers/cartReducer";
import "bootstrap/dist/css/bootstrap.min.css";
const store = createStore(cartReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
