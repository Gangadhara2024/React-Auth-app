import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Authslice";

const store = configureStore({
  reducer: {
    auth: Authslice.reducer,
  },
});
export default store;
