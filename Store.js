import { createStore, applyMiddleware } from "redux";
import rootReducer from './Service/Reducer/index'
import thunk from "redux-thunk";
const middleware = [thunk];
const store = createStore(
    rootReducer,applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  export default store;