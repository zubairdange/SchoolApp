import { createStore, combineReducers } from "redux";
import CardReducer from "../Reducer/CardReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      CardReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
