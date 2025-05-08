import { createSlice } from "@reduxjs/toolkit";

const storedAuth = JSON.parse(localStorage.getItem("auth"));
const AuthinatialState =  storedAuth ||{
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
            state.password = action.payload.password;                   //  for futuer not function yet
            state.token = action.payload.token;                        //  for futuer not function yet
            localStorage.setItem("auth", JSON.stringify(state)); // Store the auth state in local storage
        },
         logout(state){
             state.isAuthenticated=false;
                state.email = null;
                state.password = null;                         //  for futuer not function yet
                state.token = null;                           //  for futuer not function yet
                localStorage.removeItem("auth");              // Remove the auth state from local storage
         }       
    }
})

export const AuthActions = authSlice.actions;
export default authSlice;