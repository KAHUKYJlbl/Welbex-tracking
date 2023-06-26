import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { VehicleTypes } from '../../../shared/types/vehicle-types';

export type SortTypes = VehicleTypes | 'All';

type InitialState = {
  currentSort: SortTypes;
}

const initialState: InitialState = {
  currentSort: 'Diesel',
};

export const sortSlice = createSlice({
  name: 'Sort',
  initialState,
  reducers: {
    changeCurrentSort: (state, action: PayloadAction<SortTypes>) => {
      if (action.payload === state.currentSort) {
        state.currentSort = 'All';
      } else {
        state.currentSort = action.payload;
      }
    },
  },
});

export const {changeCurrentSort} = sortSlice.actions;
