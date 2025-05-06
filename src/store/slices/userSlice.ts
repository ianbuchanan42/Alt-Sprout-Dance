//request and hold basic user info
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// createAsyncThunk could be imported, maybe used for fetching state?
// - cAT(action, async func return promise -> await response ) -> action creator that supports promises
// - will be un extraReducers and reacts from onfulfilled
// - can use pending as a way to set state.loading
// createAction for custom actions user/action -> func allow payload formatting
// slices can interact if actions are cross pollinating -> extraReducers -> builder.addCase (action listener)
// the above allows user or dashboard slice to impact each other if need be, one fires state change in the other
// redux observables?

interface UserState {
  name: string | null;
  avatar_url: string | null;
  // id ?
}
// avatar link not actually working, block multi fetches from google
const initialState: UserState = {
  name: 'Ian Buchanan',
  avatar_url:
    'https://lh3.googleusercontent.com/a/ACg8ocKSGDG0TDeSaTPEZY9eNTDm4SE07yfWDw9bWyQdwJhwmLvCE0-V=s96-c',
};

// using immer under the hood?
// nano id? nanoid() comes with redux toolkit

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loggedOut: (state) => {
      state.name = null;
      state.avatar_url = null;
    },
    loggedIn: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.avatar_url = action.payload.avatar_url;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;

// Other code could use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;
// use createSelector from 'reselect' if we need values derived from values of state

export default userSlice.reducer;
