import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../features/fakestore/fakeStoreSlice";
// import counterReducer from "../features/fakestore/fakeStoreSlice";
import detailReducer from "../features/fakestore/fakeStoreSlice";
import cartReducer from "../features/fakestore/fakeStoreSlice";
import authReducer from "../features/login/AuthSlice"
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: detailReducer,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
