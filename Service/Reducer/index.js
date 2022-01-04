import { combineReducers } from "redux";
import {emailReducer,toggleReducer} from './Reducer';


const rootReducer = combineReducers({
    emailReducer,
    toggle:toggleReducer,
  });
  
  export default rootReducer;