const initialState={
    email:"",
    user:"",
};
export default function emailReducer(state=initialState,action){

    switch(action.type){
        case "User_Email" :
            return{
                    ...state,
                    email:action.payload
            }; 
        case "User_Type" :
            return{
                ...state,
                user:action.payload
        };
        default:
            return state
    }

}