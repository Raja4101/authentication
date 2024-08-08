import {configureStore} from '@reduxjs/toolkit';
import authSlice from './components/login/slice/authSlice';

export const store = configureStore({
    reducer:{
        auth: authSlice,
    },
});