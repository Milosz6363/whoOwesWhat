import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Person } from '../data'

export interface PeopleState{
    value: Person[]
}

const initialState: PeopleState = {
    value: []
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        updatePeople: (state, action: PayloadAction<Person[]>) => {
            state.value = action.payload
        }
    }
})


export const { updatePeople } = peopleSlice.actions

export const fetchPeople = (state: RootState) => state.people.value

export default peopleSlice.reducer