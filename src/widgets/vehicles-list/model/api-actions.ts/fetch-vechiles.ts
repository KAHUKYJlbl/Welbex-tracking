import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { Alert, } from 'react-native';

import { AppDispatch, State } from '../../../../app/provider/store';
import { Vehicle } from '../../../../entities/vehicle';

export const fetchVehicles = createAsyncThunk<Vehicle[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'Vehicles/fetchVehicles',
  async (_arg, {extra: axios}) => {
    try {
      const { data } = await axios.get<Vehicle[]>('/vehicles');

      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status !== 401) {
        Alert.alert('Error!', 'Unable to load vehicles');
      }
      throw err;
    }
  },
);
