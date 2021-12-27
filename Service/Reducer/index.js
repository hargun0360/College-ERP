import { combineReducers } from "redux";
import emailReducer from "./Reducer";

const rootReducer = combineReducers({
    emailReducer,
  });
  
  export default rootReducer;