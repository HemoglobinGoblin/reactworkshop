import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { PARTNERS } from '../../app/shared/PARTNERS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchPartners = createAsyncThunk(
//name of slice/used to set up related action names
//this string is what will be used by redux thunk to generate the action type strings for our fetched promise's pending, fulfilled and rejected states.
    'partners/fetchPartners',
    async () => {
        //"response" variable set up to contain the value returned when the fetch call is resolved. This is pulling "partners" from the server through "fetch"
        const response = await fetch(baseUrl + 'partners');
        //if there is an error, the first "if" will be activated and will return a rejected promise with our specified message
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)

const initialState = {
    partnersArray: [],
    isLoading: true,
    errMsg: ''
};

const partnersSlice = createSlice ({
    name: 'campsites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPartners.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPartners.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.partnersArray = mapImageURL(action.payload);
        },
        [fetchPartners.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed'
        }
    }
});



export const partnersReducer = partnersSlice.reducer;

export const SelectAllPartners = (state) => {
    return state.partners.partnersArray;
};

export const selectFeaturedPartners = (state) => {
    return state.partners.partnersArray.find((partner) => partner.featured);
}