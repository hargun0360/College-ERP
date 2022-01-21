import AuthService from '../../ApiServices/AuthService'


export  const userEmail = (data)=>{
    return{
        type:"User_Email",
        payload:data
    }
}
export  const user= (data)=>{
    return{
        type:"User_Type",
        payload:data
    }
}

export const flag=(value)=>{
    return{
        type:"Toggle",
        payload:value
    }
}

//Admin Dashboard

//Admin get details
//main

export const loadAdminDetails = () => async (dispatch) => {
  const user = localStorage.getItem("userd");
  const id = localStorage.getItem("userid");
    try {
      dispatch({ type: "Admin_Details_Request" });
      const res = await AuthService.getadminDetails(user,id)
  
      dispatch({ type: "Admin_Details_Success", payload: res.data });
    } catch (error) {
      dispatch({ type: "Admin_Details_Fail", payload: error });
    }
  };

  //Add Admin Details
//never used
export const addAdminDetails = (adminData) => async (dispatch) =>{
    try {
        dispatch({ type: "Admin_addDetails_Request" });
        const res = await AuthService.postAdminDetails(adminData)
    
        dispatch({ type: "Admin_addDetails_Success", payload: res.data });
      } catch (error) {
        dispatch({ type: "Admin_addDetails_Fail", payload: error });
      }
}

//get user
export const getAdminDetail = () => async (dispatch) => {
  const user = localStorage.getItem("userd");
  const id = localStorage.getItem("userid");
    try {
      dispatch({ type: "User_Details_Request" });
      const res = await AuthService.getadminDetails(user,id)
  
      dispatch({ type: "User_Details_Success", payload: res.data });
    } catch (error) {
      dispatch({ type: "User_Details_Fail", payload: error });
    }
  };

  //Update Admin Detail
//main
  export const UpdateAdminDetails = (adminData) => async (dispatch) =>{
    const user = localStorage.getItem("userd");
    const id = localStorage.getItem("userid");
    try {
        dispatch({ type: "Admin_UpdateDetails_Request" });
        const res = await AuthService.updateAdminDetails(adminData,user,id)
      
        dispatch({ type: "Admin_UpdateDetails_Success",payload: adminData});
        dispatch(loadAdminDetails());
      } catch (error) {
        dispatch({ type: "Admin_UpdateDetails_Fail", payload: error });
      }
}


// Annoucement--------------------------------------------------------------


//load annoucement

export const loadAnnoucementDetails = () => async (dispatch) => {
  const user = localStorage.getItem("userd");
    try {
      dispatch({ type: "Annoucement_Details_Request" });
      const res = await AuthService.getAnnoucementDetails(user)
  
      dispatch({ type: "Annoucement_Details_Success", payload: res.data });
    } catch (error) {
      dispatch({ type: "Annoucement_Details_Fail", payload: error });
    }
  };

// post annoucement

export const addAnnoucementDetails = (annoucementData) => async (dispatch) =>{
  const id = localStorage.getItem("userid");
  try {
      dispatch({ type: "addAnnoucement_Request" });
      const res = await AuthService.postAdminDetails(annoucementData,id)

      dispatch({ type: "addAnnoucement_Success", payload: res.status });
      dispatch(loadAnnoucementDetails());
    } catch (error) {
      dispatch({ type: "addAnnoucement_Fail", payload: error });
    }
}

//delete annoucement

export const deleteAnnoucementDetails = (ida) => async (dispatch) => {
  const idu = localStorage.getItem("userid");
    try {
      dispatch({ type: "Annoucement_Delete_Request" });
      const res = await AuthService.deleteAnnoucementDetails(idu,ida)
  
      dispatch({ type: "Annoucement_Delete_Success", payload: res.status });
      dispatch(loadAnnoucementDetails());
    } catch (error) {
      dispatch({ type: "Annoucement_Delete_Fail", payload: error });
    }
  };

