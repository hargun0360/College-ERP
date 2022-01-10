import { combineReducers } from "redux";
import {emailReducer,toggleReducer,adminDetailReducer,addadminDetailReducer} from './Reducer';


const rootReducer = combineReducers({
    emailReducer,
    toggle:toggleReducer,
    getAdmin:adminDetailReducer,
    addAdmin:addadminDetailReducer,
  });
  
  export default rootReducer;