import { useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { VehiclesList } from '../../../widgets/vehicles-list/ui/vehicles-list';
import { RootStackParamList } from '../../../shared/types/stack-params';
import { VehiclesSort } from '../../../features/vehicles-sort';
import { SortTypes } from '../../../features/vehicles-sort/model/sort-slice';

type VehiclesScreenProps = NativeStackScreenProps<RootStackParamList, 'Vehicles'>

export function VehiclesScreen ({navigation}: VehiclesScreenProps): JSX.Element {
  const [currentSort, setCurrentSort] = useState<SortTypes>('All');

  const handleCurrentSort = (sort: SortTypes) => {
    if (sort === currentSort) {
      setCurrentSort('All');
    } else {
      setCurrentSort(sort);
    }
  };

  return (
    <View>
      <VehiclesSort cb={handleCurrentSort} currentSort={currentSort} />
      <VehiclesList navigation={navigation} currentSort={currentSort} />
    </View>
  );
}
