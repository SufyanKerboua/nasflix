import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'state/user/userReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

console.log(store.getState());
// store.dispatch({ type: 'theme/toggle' });
// console.log(store.getState());
