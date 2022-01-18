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