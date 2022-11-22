import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  errorMessage: "",
  // user: {},
  // user: JSON.parse(localStorage.getItem("user")) || [],
};

const callLoginApi = (email, password) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (email === "admin@login.com" && password === "admin") {
        resolve({ email });
        localStorage.setItem("user", JSON.stringify(state.user));
      } else {
        reject("Invalid email and password");
      }
    }, 500);
  });
};

export const authLoginApi = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await callLoginApi(email, password);
      return response.email;
    } catch (err) {
      throw err;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authLoginApi.pending, (state) => {
        state.isLoginPending = true;
        state.isLoginSuccess = false;
        state.errorMessage = "";
      })
      .addCase(authLoginApi.fulfilled, (state, action) => {
        console.log("fulfilled");
        console.log(action);
        const { email } = action.payload;
        state.isLoginPending = false;
        state.isLoginSuccess = true;
        state.user = { email };
      })
      .addCase(authLoginApi.rejected, (state, action) => {
        console.log(action, "rejected");
        state.isLoginPending = false;
        state.isLoginSuccess = false;
        state.errorMessege = action.error.message;
      });
  },
});

export default authSlice.reducer;
