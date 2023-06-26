import { Text, View, Button, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../shared/types/stack-params';
import SendIntentAndroid from 'react-native-send-intent';

type MapScreenProps = NativeStackScreenProps<RootStackParamList, 'Map'>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  map: {
    margin: 10,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
});

export function MapScreen ({route}: MapScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        liteMode
        initialRegion={{
          latitude: +route.params.vehicle.latitude,
          longitude: +route.params.vehicle.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          coordinate={{
            latitude: +route.params.vehicle.latitude,
            longitude: +route.params.vehicle.longitude,
          }}
          title={route.params.vehicle.carName}
          description={route.params.vehicle.name}
        />
      </MapView>

      <View>
        <Text style={styles.text}>{route.params.vehicle.name}</Text>
        <Text style={styles.text}>{route.params.vehicle.phone}</Text>
        <View style={styles.buttons}>
          <Button
            onPress={() => SendIntentAndroid.sendPhoneDial(route.params.vehicle.phone, true)}
            title="Сall"
            color="#326496"
          />
          <Button
            onPress={() => SendIntentAndroid.sendSms(route.params.vehicle.phone, 'Подскажите пожалуйста, какой номер заказа у вас сейчас в работе')}
            title="Message"
            color="#326496"
          />
        </View>
      </View>
    </View>
  );
}
