import { VehicleTypes } from '../../../shared/types/vehicle-types';

export type Vehicle = {
  id: string;
  carName: string;
  carType: VehicleTypes;
  name: string;
  phone: string;
  latitude: string;
  longitude: string;
};
