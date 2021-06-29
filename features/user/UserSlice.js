import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'User',
    initialState: {
        user: null,

    },
    reducers: {
        ADD_USER: (state, action) => {

            state.user = action.payload.user
        },
        DELETE_USER: (state, action) => {

            state.user = action.payload.user
        },



    },
});

export const { ADD_USER, DELETE_USER } = UserSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = state => state.User.user;


export default UserSlice.reducer;
