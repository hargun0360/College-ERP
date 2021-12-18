const initialState=0;
export default function productReducer(state=initialState,action){

    switch(action.type){
        case "INCREMENT" :
            return state+action.payload
        default:
            return state
    }

}