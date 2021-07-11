import { act } from 'react-dom/test-utils'
import { ADD_DATA_REQUEST, ADD_DATA, ADD_DATA_ERROR } from './actionType'

const initialState = {

    adding: [],
}



const Addreducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                adding: action.payload,
            }
        default: return false;
    }
}

export default Addreducer