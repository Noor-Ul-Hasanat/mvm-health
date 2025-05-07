import { createSlice } from "@reduxjs/toolkit";

const AuthinatialState = {
    isAuthenticated: false,
    email: null,
    password: null,
    token: null,                                             // for future use not function yet
}
const authSlice = createSlice({
    name: "auth",
    initialState: AuthinatialState,
    reducers:{
        loginSuccess (state,action) {
            state.isAuthenticated= true;
            state.email = action.payload.email;
            state.password = action.payload.password;         //  for futuer not function yet
            state.token = action.payload.token;             //  for futuer not function yet
        },
         logout(state){
             state.isAuthenticated=false;
                state.email = null;
                state.password = null;                         //  for futuer not function yet
                state.token = null;                           //  for futuer not function yet
         }       
    }
})

export const AuthActions = authSlice.actions;
export default authSlice;