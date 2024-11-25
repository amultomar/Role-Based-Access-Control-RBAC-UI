import { createSlice } from '@reduxjs/toolkit';

const roleSlice = createSlice({
  name: 'roles',
  initialState: [],
  reducers: {
    addRole: (state, action) => {
      state.push(action.payload);
    },
    editRole: (state, action) => {
      const index = state.findIndex(role => role.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteRole: (state, action) => {
      return state.filter(role => role.id !== action.payload);
    },
  },
});

export const { addRole, editRole, deleteRole } = roleSlice.actions;
export default roleSlice.reducer;
