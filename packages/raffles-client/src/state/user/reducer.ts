import { createSlice } from '@reduxjs/toolkit';
import { ConnectionType } from 'config/web3';

export interface UserState {
  selectedWallet?: ConnectionType;
}

export const initialState: UserState = {
  selectedWallet: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateSelectedWallet(state, { payload: { wallet } }) {
      state.selectedWallet = wallet;
    },
  },
});

export const { updateSelectedWallet } = userSlice.actions;
export default userSlice.reducer;
