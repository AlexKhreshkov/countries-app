import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './counrtiesSlice'


export default configureStore({
    reducer: {
        countries: countriesReducer
    }
})