import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VehiclesList } from '../../../widgets/vehicles-list/ui/vehicles-list';
import { RootStackParamList } from '../../../shared/types/stack-params';

type VehiclesScreenProps = NativeStackScreenProps<RootStackParamList, 'Vehicles'>

export function VehiclesScreen ({navigation}: VehiclesScreenProps): JSX.Element {
  return (
    <VehiclesList navigation={navigation} />
  );
}
