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
        },
        editPerson: (state, action: PayloadAction<[Person, Person]>) => {
            state.value = state.value.map(person => person._id !== action.payload[0]._id ? person : action.payload[1])
        },
        deletePerson: (state, action: PayloadAction<Person>) => {
            state.value = state.value.filter(person => person._id !== action.payload._id)
        }
    }
})

export const { updatePeople, editPerson, deletePerson } = peopleSlice.actions

export const fetchPeople = (state: RootState) => state.people.value

export default peopleSlice.reducer