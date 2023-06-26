import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../lib/name-space';
import { vehiclesSlice } from '../../../../widgets/vehicles-list';
import { sortSlice } from '../../../../features/vehicles-sort';

export const rootReducer = combineReducers({
  [NameSpace.Vehicles]: vehiclesSlice.reducer,
  [NameSpace.Sort]: sortSlice.reducer,
});
