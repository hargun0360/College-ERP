import { combineReducers } from "redux";
import {emailReducer,toggleReducer,adminDetailReducer,addadminDetailReducer,userReducer} from './Reducer';


const rootReducer = combineReducers({
    emailReducer,
    toggle:toggleReducer,
    getAdmin:adminDetailReducer,
    addAdmin:addadminDetailReducer,
    user:userReducer,
  });
  
  export default rootReducer;