export function emailReducer(state = { email: "", user: "" }, action) {

    switch (action.type) {
        case "User_Email":
            return {
                ...state,
                email: action.payload
            };
        case "User_Type":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }

}

export function toggleReducer(state = {}, action) {
    switch (action.type) {
        case "Toggle":
            return {
                ...state,
                val: action.payload
            };
        default:
            return state;
    }
}

// Admin Data 

export function adminDetailReducer(state = { admin: {} }, action) {
    switch (action.type) {
        case "Admin_Details_Request":
            return {
                loading: true,
            };
        case "Admin_Details_Success":
            return {
                ...state,
                loading: false,
                admin: action.payload,
            };
        case "Admin_Details_Fail":
            return {
                ...state,
                loading: false,
                admin: null,
                error: action.payload,
            };
        default:
            return state;
    }
}

export function addadminDetailReducer(state = { admindata: {} }, action) {
    switch (action.type) {
        case "Admin_addDetails_Request":
            return {
                loading: true,
            };
        case "Admin_addDetails_Success":
            return {
                ...state,
                loading: false,
                admindata: action.payload,
            };
        case "Admin_addDetails_Fail":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
