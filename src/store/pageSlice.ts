import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export enum Pages{
    intro = 'Intro',
    people = 'People',
    summary = 'Summary',
}

export interface PageState{
    value: string
}

const initialState: PageState = {
    value: Pages.intro
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
})

export const { setPage } = pageSlice.actions

export const fetchPage = (state: RootState) => state.page.value

export default pageSlice.reducer