import { createSelector } from '@reduxjs/toolkit';

import { NameSpace, State } from '../../../app/provider/store';
import { FetchStatus } from '../../../shared/types/fetch-status';
import { Vehicle } from '../../../entities/vehicle';

export const getVehicles = (state: State): Vehicle[] => state[NameSpace.Vehicles].vehicles;

export const getCameraLoadingStatus = createSelector(
  (state: State): FetchStatus => state[NameSpace.Vehicles].vehiclesLoadingStatus,
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isSuccess: status === FetchStatus.Success,
    isFailed: status === FetchStatus.Failed,
  })
);