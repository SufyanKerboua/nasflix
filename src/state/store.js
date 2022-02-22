import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'state/user/userReducer';
import drawerReducer from './drawer/drawerReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        drawer: drawerReducer,
    },
});

console.log(store.getState());
// store.dispatch({ type: 'theme/toggle' });
// console.log(store.getState());
