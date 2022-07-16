import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pageSlice'
import peopleReducer from './peopleSlice'

export const store = configureStore({
    reducer:{
        page: pageReducer,
        people: peopleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch