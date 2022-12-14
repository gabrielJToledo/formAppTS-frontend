import { configureStore, Store } from '@reduxjs/toolkit'
import { ApplicationState } from '../domain/reduxInterface'
import rootReducer from './ducks/rootReducer'

const store: Store<ApplicationState> = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch