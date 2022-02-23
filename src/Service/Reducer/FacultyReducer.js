export function toggledReducer(state = {}, action) {
    switch (action.type) {
        case "Toggled":
            return {
                ...state,
                edit: action.payload
            };
        default:
            return state;
    }
}
export function Faculty(state = {}, action) {
    switch (action.type) {
        case "View_Faculty":
            return {
                ...state,
                view: action.payload
            };
        case "Delete_Faculty":
        case "Delete_Admin":
            return {
                ...state,
                del: action.payload
            };
        case "Add_Faculty":
            return {
                ...state,
                add: action.payload
            };
        case "Make_Admin":
            return {
                ...state,
                make: action.payload
            };
        default:
            return state;
    }
}