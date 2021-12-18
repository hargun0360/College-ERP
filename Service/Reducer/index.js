import { combineReducers } from "redux";
import productReducer from "./Reducer";


const rootReducer = combineReducers({
    productReducer,
  });
  
  export default rootReducer;