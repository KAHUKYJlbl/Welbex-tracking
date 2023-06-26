import { Text, TouchableNativeFeedback, Image, View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Vehicle } from '../types/vehicle';
import { RootStackParamList } from '../../../shared/types/stack-params';

type VehicleCardProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Vehicles', undefined>;
  vehicle: Vehicle;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomStyle: 'solid',
  },
  image: {
    width: 60,
    height: 60,
    margin: 20,
  },
  vehicle: {
    fontSize: 18,
    marginRight: 'auto',
  },
  driver: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverImage: {
    width: 20,
    height: 20,
    margin: 10,
  }
});

const VehicleIcons = {
  Diesel: <Image source={require('../../../../assets/vehicle-icons/truck.png')} style={styles.image} />,
  Gasoline: <Image source={require('../../../../assets/vehicle-icons/bike.png')} style={styles.image} />,
  Electric: <Image source={require('../../../../assets/vehicle-icons/tractor.png')} style={styles.image} />,
  Hybrid: <Image source={require('../../../../assets/vehicle-icons/car.png')} style={styles.image} />,
} as const;

export function VehicleCard ({vehicle, navigation}: VehicleCardProps): JSX.Element {
  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate('Map', {vehicleName: vehicle.carName})}
    >
      <View style={styles.container} >
        {VehicleIcons[vehicle.carType]}

        <Text style={styles.vehicle} >
          {vehicle.carName} #{vehicle.id}
        </Text>

        <View style={styles.driver}>
          <Text>
            {vehicle.name}
          </Text>

          <Image source={require('../../../../assets/vehicle-icons/driver.png')} style={styles.driverImage} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
