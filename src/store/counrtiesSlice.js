import { createSlice } from '@reduxjs/toolkit'


const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countries: []
    },
    reducers: {
        addCountries(state, action) {
            state.countries = action.payload
        },
    }
})

export const { addCountries } = countriesSlice.actions

export default countriesSlice.reducer                                               