import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../../shared/types/stack-params';

type MapScreenProps = NativeStackScreenProps<RootStackParamList, 'Map'>

export function MapScreen ({route}: MapScreenProps): JSX.Element {
  return (
    <View><Text>{route.params.vehicleName}</Text></View>
  );
}
