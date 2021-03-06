import { combineReducers } from "redux";
import { emailReducer, toggleReducer, addadminDetailReducer, userReducer, userDetailReducer, updateAdminDetailReducer, loadAnnoucementReducer, addAnnoucementReducer, updateToggleReducer } from './Reducer';
import { toggledReducer, Faculty } from './FacultyReducer'
import { } from './StudentReducer'

const rootReducer = combineReducers({
  emailReducer,
  toggle: toggleReducer,
  updateToggle: updateToggleReducer,
  addAdmin: addadminDetailReducer,
  user: userReducer,
  userdetails: userDetailReducer,
  updateAdmin: updateAdminDetailReducer,
  getAnnoucement: loadAnnoucementReducer,
  editAnnoucement: addAnnoucementReducer,
  edit: toggledReducer,
  faculty: Faculty,
});

export default rootReducer;