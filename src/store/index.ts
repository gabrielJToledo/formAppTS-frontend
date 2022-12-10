import { configureStore, Store } from '@reduxjs/toolkit'
import { FormsState } from './ducks/forms/types'
import rootReducer from './ducks/rootReducer'

export interface ApplicationState {
    forms: FormsState
}

const store: Store<ApplicationState> = configureStore({
    reducer: rootReducer
})

export default store