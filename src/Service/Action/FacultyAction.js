export const Edit = (value) => {
    return {
        type: "Toggled",
        payload: value
    }
}
export const editFaculty = (value) => {
    return {
        type: "View_Faculty",
        payload: value
    }
}
export const deleteFaculty = (value) => {
    return {
        type: "Delete_Faculty",
        payload: value
    }
}
export const deleteAdmin = (value) => {
    return {
        type: "Delete_Admin",
        payload: value
    }
}
export const addFaculty = (value) => {
    return {
        type: "Add_Faculty",
        payload: value
    }
}
export const makeAdmin = (value) => {
    return {
        type: "Make_Admin",
        payload: value
    }
}