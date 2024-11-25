import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import user slice
import roleReducer from './roleSlice'; // Import role slice

// Configure the Redux store with reducers for users and roles
export const store = configureStore({
  reducer: {
    users: userReducer,
    roles: roleReducer,
  },
});
