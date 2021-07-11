import { combineReducers } from 'redux'

import userReducer from '../ReducerComponents/User/Reducer'
import addUser from '../ReducerComponents/Add/Reducer'

const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer