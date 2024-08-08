import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: '',
        password: '',
        rememberMe: false,
        error: null,
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        toggleRememberMe: (state) => {
            state.rememberMe = !state.rememberMe;
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.error = null;
            state.user = action.payload; 
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
        },
        signUpSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.error = null;
            state.user = action.payload;
        },
        signUpFailure: (state, action) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.email = '';
            state.password = '';
            state.user = null; 
        },
    },
});

export const { setEmail, setPassword, toggleRememberMe, loginSuccess, loginFailure,signUpSuccess,signUpFailure, logout } = authSlice.actions;

export default authSlice.reducer;