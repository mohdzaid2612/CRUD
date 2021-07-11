
import { USER_REQUEST, USER_DATA, USER_FAILURE, ADD_DATA, CHANGE_DATA } from './ActionType'
import axios from 'axios'

export const fetchUserRequest = () => {
    return {
        type: USER_REQUEST
    }
}

export const fetchUserData = data => {
    return {
        type: USER_DATA,
        payload: data
    }
}

export const fetchUserFailure = err => {
    return {
        type: USER_FAILURE,
        payload: err
    }
}

export const addUSer = (user) => {
    return {
        type: ADD_DATA,
        payload: user
    }
}

export const changeData = (user) => {
    return {
        type: CHANGE_DATA,
        payload: user
    }
}




export const editUser = (user) => {
    return (dispatch) => {
        dispatch(changeData(user))
    }
}

export const sendingUser = (user) => {
    return (dispatch) => {
        dispatch(addUSer(user))
    }
}

export const fetchingData = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(result => {
                const users = result?.data
                dispatch(fetchUserData(users))
            })
            .catch(error => {
                const err = error?.message
                dispatch(fetchUserFailure(err))
            });
    }
}



// export const fetchingUserDetails = (id) => {
//     return (dispatch) => {
//         dispatch()
//     }
// }