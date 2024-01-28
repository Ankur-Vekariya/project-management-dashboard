import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    user: (state, actions) => {
      console.log('actions', actions);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.user = { ...state.user, user: actions.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { user } = userSlice.actions;

export default userSlice.reducer;
