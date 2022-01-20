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

export function userReducer(state = {}, action) {
    switch (action.type) {
        case "User_Type":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

//get user

export function userDetailReducer(state = {}, action) {
    switch (action.type) {
        case "User_Details_Request":
            return {
                loading: true,
            };
        case "User_Details_Success":
            return {
                ...state,
                loading: false,
                userdetail: action.payload,
            };
        case "User_Details_Fail":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

//Update Admin Detail

export function updateAdminDetailReducer(state = {}, action) {
    switch (action.type) {
        case "Admin_UpdateDetails_Request":
            return {
                loading: true,
            };
        case "Admin_UpdateDetails_Success":
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case "Admin_UpdateDetails_Fail":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

// Annoucement

export function loadAnnoucementReducer(state = {}, action) {
    switch (action.type) {
        case "Annoucement_Details_Request":
            return {
                loading: true,
            };
        case "Annoucement_Details_Success":
            return {
                ...state,
                loading: false,
                annoucement: action.payload
            };
        case "Annoucement_Details_Fail":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

//add and delete annoucement

export function addAnnoucementReducer(state = {}, action) {
    switch (action.type) {
        case "Annoucement_Delete_Request":
        case "addAnnoucement_Request":
            return {
                loading: true,
            };
        case "Annoucement_Delete_Success":
        case "addAnnoucement_Success":
            return {
                ...state,
                loading: false,
                isEdit: action.payload
            };
        case "Annoucement_Delete_Fail":
        case "addAnnoucement_Fail":
            return {
                ...state,
                loading: false,
                isEdit:null,
                error: action.payload,
            };
        default:
            return state;
    }
}