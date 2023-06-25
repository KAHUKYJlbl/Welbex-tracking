import { Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Vehicle } from '../types/vehicle';
import { RootStackParamList } from '../../../shared/types/stack-params';

type VehicleCardProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Vehicles', undefined>;
  vehicle: Vehicle;
}

export function VehicleCard ({vehicle, navigation}: VehicleCardProps): JSX.Element {
  return (
    <Button
      title={vehicle.carName}
      onPress={() => navigation.navigate('Map', {vehicleName: vehicle.carName})}
    />
  );
}
