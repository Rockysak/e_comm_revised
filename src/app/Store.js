import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/productslice'
import cartReducer from "../features/cartslice";
import whislistReducer from '../features/wishlistslice'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer =persistReducer(
    persistConfig,
    combineReducers({
        product : productReducer,
        cart :cartReducer,
        whislist : whislistReducer
    })
)


const store = configureStore({
    reducer:persistedReducer,
})

const persistor = persistStore(store)

export  {store,persistor};