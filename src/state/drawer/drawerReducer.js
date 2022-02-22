import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

export const toggleDrawer = createAction('drawer/toggle');

export default createReducer(initialState, (builder) => {
    return builder.addCase(toggleDrawer, (draft) => {
        console.log('hello there');
        draft.isOpen = !draft.isOpen;
    });
});
