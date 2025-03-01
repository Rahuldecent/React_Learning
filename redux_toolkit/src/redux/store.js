import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";

// import rootReducer from "./rootReducer"; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
})