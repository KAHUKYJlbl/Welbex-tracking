import { createSlice } from '@reduxjs/toolkit';

import { FetchStatus } from '../../../shared/types/fetch-status';
import { Vehicle } from '../../../entities/vehicle';
import { fetchVehicles } from './api-actions.ts/fetch-vechiles';
// import { NameSpace } from '../../../app/provider/store';

type InitialState = {
  vehiclesLoadingStatus: FetchStatus;
  vehicles: Vehicle[];
}

const initialState: InitialState = {
  vehiclesLoadingStatus: FetchStatus.Idle,
  vehicles: [],
};

export const vehiclesSlice = createSlice({
  name: 'Vehicles',
  // name: NameSpace.Vehicles,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.vehiclesLoadingStatus = FetchStatus.Success;
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicles.pending, (state) => {
        state.vehiclesLoadingStatus = FetchStatus.Pending;
      })
      .addCase(fetchVehicles.rejected, (state) => {
        state.vehiclesLoadingStatus = FetchStatus.Failed;
      });
  }
});
