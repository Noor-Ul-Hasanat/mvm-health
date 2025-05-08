import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/AuthSlice";
import patientSlice from "./Slices/patientSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        patients: patientSlice.reducer,
    },
});