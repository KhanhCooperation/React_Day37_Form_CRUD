// *b1: Tải lib : npm i @reduxjs/toolkit

//* b2: Tao Store , index.js:
// import { configureStore } from "@reduxjs/toolkit"; // *c1: Import th
export const store = configureStore({
  reducer: {},
  devTools: true, // Có devtool thì mới sd extension redux devtool để coi state đc
});

//* B3: Trong file index.js
//? import { Provider } from "react-redux";

//* B4: bỏ vào index.js:
// <Provider store={store}>
//     <App />
//   </Provider>
//   !! Nhớ import store trong folder store

//* B5:Tạo rootReducer.js
// =>
//?  import { combineReducers } from "redux";

//? export const rootReducer = combineReducers;

//* B6: Bật index.js
//? export const store = configureStore({
//?  reducer: rootReducer,

//* B7: Tạo slice.js trong folder component:
// import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const btFormSlice = createSlice({
  name: "btform",
  initialState,
  reducers: {},
});
export const { actions, reducers: btFormReducer } = btFormSlice;

//? Thay vì export const btFormReducer = (state = initialState, { type, payload }) => {... trên redux bth.

//* B8: Qua import bên rootReducer:
export const rootReducer = combineReducers({
  btForm: btFormReducer,
});
