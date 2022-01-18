import { combineReducers } from "redux";
import {emailReducer,toggleReducer,adminDetailReducer,addadminDetailReducer,userReducer,userDetailReducer} from './Reducer';


const rootReducer = combineReducers({
    emailReducer,
    toggle:toggleReducer,
    getAdmin:adminDetailReducer,
    addAdmin:addadminDetailReducer,
    user:userReducer,
    userdetails:userDetailReducer,
  });
  
  export default rootReducer;