import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from './provider/store';
import { VehiclesScreen } from '../pages/vehicles-screen';
import { MapScreen } from '../pages/map-screen';
import { RootStackParamList } from '../shared/types/stack-params';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Root (): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Vehicles"
            component={VehiclesScreen}
          />
          <Stack.Screen
            name="Map"
            component={MapScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
