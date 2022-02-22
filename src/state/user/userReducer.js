import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
    status: 'void',
    data: null,
    error: null,
};

export const loginUser = createAction('user/login');
export const logoutUser = createAction('user/logout');

export default createReducer(initialState, (builder) => {
    return builder
        .addCase(loginUser, (draft) => {
            draft.data = { loggedIn: true };
        })
        .addCase(logoutUser, (draft) => {
            draft.data = { loggedIn: false };
        });
});
