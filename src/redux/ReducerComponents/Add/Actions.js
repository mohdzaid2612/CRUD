import { ADD_DATA, ADD_DATA_REQUEST, ADD_DATA_ERROR } from './actionType'


// export const addUserRequest = () => {
//     return {
//         type: ADD_DATA_REQUEST
//     }
// }

export const addUSer = (user) => {
    return {
        type: ADD_DATA,
        payload: user
    }
}

// export const addUserError = () => {
//     return {
//         type: ADD_DATA_ERROR,
//     }
// }

export const sendingUser = (user) => {
    return (dispatch) => {
        dispatch(addUSer(user))

    }
}