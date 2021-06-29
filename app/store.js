import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/user/UserSlice';

export default configureStore({
    reducer: {
        User: UserReducer,
    },
});
