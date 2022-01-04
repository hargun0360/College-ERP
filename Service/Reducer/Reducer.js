export function emailReducer(state={email:"",user:""},action){

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

export function toggleReducer(state={},action){
    switch(action.type){
        case "Toggle" :
            return{
                ...state,
                val:action.payload
            };
            default:
                return state;
    }
}