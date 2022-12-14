import { FormTypes } from "./types"
import { Reducer } from 'redux'
import { FormsState } from "../../../domain/reduxInterface"

const initialState: FormsState = {
    dataDB: [],
    name: '',
    email: '',
    tel: ''
} 

const reducer: Reducer<FormsState> = (state = initialState, action) => {
    switch (action.type) {
        case FormTypes.changedNameValue:
            return { ...state, data: action.payload }

        case FormTypes.changedEmailValue:
            return { ...state, data: action.payload}

        case FormTypes.changedTelValue:
            return { ...state, data: action.payload}
    
        default:
            return state
    }
}


export default reducer