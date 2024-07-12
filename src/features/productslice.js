import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    image: 'image',
    category: 'category',
    rating: 'rating',
    price: 'price',
    loading: 'idle', // Use 'idle' as the initial state for better readability
};

export const fetchProduct = createAsyncThunk('converter/fetchProduct', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

const productSlice = createSlice({
    name: 'product',
    initialState :  initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        setRating: (state, action) => {
            state.rating = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProduct.rejected, (state) => {
                state.loading = 'failed';
            });
    },
});

export const { setImage, setCategory, setPrice, setRating } = productSlice.actions;

export default productSlice.reducer;









































// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialstate = {

//     product : [],
//     image : '',
//     category : '',
//     rating : '',
//     price : '',
//     Loading : 'loading'

// }

// const fetchProduct = createAsyncThunk('converter/fetchProduct',async () => {
//     const fetchApi = await fetch('https://fakestoreapi.com/products')
//     const response = await fetchApi.json();
//     return response;
// })

// const productSlice = createSlice({
//     name : 'product',
//     initialState:initialstate,
//     reducers : {
//         setimage : (state,action) => {
//             state.image=action.payload
//         },
//         setcategory : (state,action) => {
//             state.category=action.payload
//         },
//         setprice : (state,action) => {
//             state.price=action.payload
//         },
//         setrating : (state,action) => {
//             state.rating=action.payload
//         }
//     },
//     extraReducers : (builder) => {
//         builder.addCase(fetchProduct.pending, (state) => {
//             state.Loading='loading'
//         });
//         builder.addCase(fetchProduct.fulfilled, (state,action) => {
//             state.Loading='succeeded'
//             state.product=action.payload
//         });
//         builder.addCase(fetchProduct.rejected, (state,action) => {
//             state.Loading='failed'
//         })
//     }
// })

