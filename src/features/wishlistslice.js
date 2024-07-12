import { createSlice } from "@reduxjs/toolkit"


export const whislistSlice = createSlice({
    name:'whishlist',
    initialState : {
        items:[],
    },
    reducers: {
        addToWishlist: (state,action) => {
            state.items.push(action.payload);
        },
        removeFromCart : (state,action) => {
            state.items = state.items.filter((item,index) => index !== action.payload)
        }
    }
})

export const {addToWishlist,removeFromCart} = whislistSlice.actions;

export default whislistSlice.reducer;