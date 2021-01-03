import { createStore, combineReducers } from "redux";
import phonesReducer from "./../reducers/phonesReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      phonesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
