import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapi.com/products";
const AUTH_LOGIN_URL = "https://fakestoreapi.com/auth/login";

const initialState = {
  entities: [],
  detail: [],
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  // stock: 20,
  // quantity: JSON.parse(localStorage.getItem("quantity")) || [],
};

export const Products = createAsyncThunk("products/fetchProducts", async () => {
  const res = await axios.get(PRODUCTS_URL);
  return res.data;
});

export const updateStock = createAsyncThunk();

export const productDetail = createAsyncThunk(
  "products/fetchProducts",
  async (productId) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return res.data;
  }
);

// export const authLoginApi = createAsyncThunk("auth/login", async () => {
//   const res = await axios.get(AUTH_LOGIN_URL);
// });

// function adminLoginApi(email, password) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (email === "admin@login.com" && password === "admin") {
//         resolve({ email });
//       } else {
//         reject("Invalid email and password");
//       }
//     }, 1000);
//   });
// }

// export const authLoginApi = createAsyncThunk(
//   "auth/adminLogin",
//   async ({ email, password }) => {
//     try {
//       const response = await adminLoginApi(email, password);
//       return response.email;
//     } catch (err) {
//       throw err;
//     }
//   }
// );

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItems: (state, action) => {
      // state.cartItems.unshift(action.payload);
      // localStorage.setItem("cart", JSON.stringify(state.cartItems));
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // state.cartItems.unshift(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        localStorage.setItem(
          "quantity",
          JSON.stringify((state.cartItems[itemIndex].cartQuantity += 1))
        );
        // localStorage.setItem(
        //   "stock",
        //   JSON.stringify(state.cartItems[itemIndex].cartQuantity - stock)
        // );
        // state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        // state.cartItems.unshift(action.payload);
        // localStorage.setItem("cart", JSON.stringify(state.cartItems));

        const tempProduct = { ...action.payload, cartQuantity: 1 };
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        localStorage.setItem(
          "quantity",
          JSON.stringify(state.cartItems.push(tempProduct))
        );
      }
    },

    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.title !== action.payload.title
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // increment: (state, action) => {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   localStorage.setItem(
    //     "cart",
    //     JSON.stringify((state.cartItems[itemIndex].cartQuantity += 1))
    //   );
    // },
    // decrement: (state) => {
    //   state.count -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload.amount;
    // },

    // add to cart
    // addToCart(state, action) {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemIndex >= 0) {
    //     state.cartItems[itemIndex].cartTotalQuantity += 1;
    //   } else {
    //     const tempProduct = { ...action.payload, cartQuantity: 1 };
    //     state.cartItems.push(tempProduct);
    //   }
    //   // state.cartItems.push(action.payload);
    // },
  },

  extraReducers(builder) {
    builder.addCase(Products.fulfilled, (state, action) => {
      // state.entities.push(...action.payload);
      state.entities = action.payload;
    });
  },
});

export const {
  increment,
  // decrement,
  // incrementByAmount,
  addItems,
  removeItems,
  // addToCart,
} = productSlice.actions;
export default productSlice.reducer;
