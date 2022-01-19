import { combineReducers } from "redux";
import {emailReducer,toggleReducer,adminDetailReducer,addadminDetailReducer,userReducer,userDetailReducer,updateAdminDetailReducer,loadAnnoucementReducer,addAnnoucementReducer} from './Reducer';


const rootReducer = combineReducers({
    emailReducer,
    toggle:toggleReducer,
    getAdmin:adminDetailReducer,
    addAdmin:addadminDetailReducer,
    user:userReducer,
    userdetails:userDetailReducer,
    updateAdmin:updateAdminDetailReducer,
    getAnnoucement:loadAnnoucementReducer,
    editAnnoucement:addAnnoucementReducer,
  });
  
  export default rootReducer;