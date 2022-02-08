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