import { createSlice } from '@reduxjs/toolkit';


const initFilter = '';

const filterSlice = createSlice({
    name: 'filter',
    initFilter,
    reducers: {
        getFilter: {
            reducer(state, action) {            
            return state   
            
        }
        },
       
        
    }
})

export const { getFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;