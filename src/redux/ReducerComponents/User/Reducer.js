import { act } from 'react-dom/test-utils'
import { USER_REQUEST, USER_DATA, USER_FAILURE, ADD_DATA, CHANGE_DATA } from './ActionType'

const initialState = {
    loading: false,
    users: [],
    error: '',
    newData: []
}



export default function reducer(state = initialState, action) {

    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_DATA:
            return {
                ...state,
                users: action.payload,
            }
        case USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ADD_DATA:

            var newArr = state.newData.concat(action.payload)
            var checkarr = [...state.users, ...newArr]
            return {
                ...state,
                newData: newArr,
            }
        case CHANGE_DATA:
            var num = state.users.findIndex(item => item?.id == action.payload?.id)
            if (num == -1) {
                const arrIndex = state.newData.findIndex(item => item?.id == action.payload?.id)
                state.newData[arrIndex] = action.payload
                return {
                    ...state,
                    newData: state.newData
                }
            }
            else {

                state.users[num] = action.payload
                return {
                    ...state,
                    users: state.users
                }
            }
        // console.log(state.users)
        default: return { ...state }
    }
}
