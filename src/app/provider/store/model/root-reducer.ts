import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../lib/name-space';
import { vehiclesSlice } from '../../../../widgets/vehicles-list';

export const rootReducer = combineReducers({
  [NameSpace.Vehicles]: vehiclesSlice.reducer,
});
