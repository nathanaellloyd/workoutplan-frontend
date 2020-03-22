import { createStore, compose } from "redux";
import persistState from "redux-localstorage";

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
composeEnhancers(persistState())
);

export default store;