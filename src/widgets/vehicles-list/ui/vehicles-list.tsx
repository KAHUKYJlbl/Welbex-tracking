import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../shared/types/stack-params';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';
import { VehicleCard } from '../../../entities/vehicle/ui/vechile-card';
import { fetchVehicles } from '../model/api-actions.ts/fetch-vechiles';
import { getVehicles } from '../model/vechiles-selectors';
import { SortTypes } from '../../../features/vehicles-sort/model/sort-slice';

type VehiclesListProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Vehicles', undefined>;
  currentSort: SortTypes;
}

export function VehiclesList ({navigation, currentSort}: VehiclesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const vehicles = useAppSelector(getVehicles)
    .filter((vehicle) => currentSort === 'All' || vehicle.carType === currentSort);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, []);

  return (
    <View>
      <FlatList
        data={vehicles}
        renderItem={({item}) => <VehicleCard key={item.id} vehicle={item} navigation={navigation} />}
      />
    </View>
  );
}
