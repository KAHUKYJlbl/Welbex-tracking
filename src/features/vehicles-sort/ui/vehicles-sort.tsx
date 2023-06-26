import { StyleSheet, View, Image, TouchableNativeFeedback } from 'react-native';
import { SortTypes } from '../model/sort-slice';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.75)',
    borderBottomStyle: 'solid',
  },
  imageContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
  },
  imageContainerCurrent: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  touch: {
    borderRadius: 10,
    margin: 20,
  }
});

type VehiclesSortProps = {
  cb: (arg: SortTypes) => void;
  currentSort: SortTypes;
}

export function VehiclesSort ({cb, currentSort}: VehiclesSortProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.touch} >
        <TouchableNativeFeedback
          onPress={() => cb('Hybrid')}
          background={TouchableNativeFeedback.Ripple('#00000030', true)}
        >
          <View style={currentSort === 'Hybrid' ? styles.imageContainerCurrent : styles.imageContainer}>
            <Image source={require('../../../../assets/vehicle-icons/car.png')} style={styles.image} />
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.touch} >
        <TouchableNativeFeedback
          onPress={() => cb('Diesel')}
          background={TouchableNativeFeedback.Ripple('#00000030', true)}
        >
          <View style={currentSort === 'Diesel' ? styles.imageContainerCurrent : styles.imageContainer}>
            <Image source={require('../../../../assets/vehicle-icons/truck.png')} style={styles.image} />
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.touch} >
        <TouchableNativeFeedback
          onPress={() => cb('Electric')}
          background={TouchableNativeFeedback.Ripple('#00000030', true)}
        >
          <View style={currentSort === 'Electric' ? styles.imageContainerCurrent : styles.imageContainer}>
            <Image source={require('../../../../assets/vehicle-icons/tractor.png')} style={styles.image} />
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.touch} >
        <TouchableNativeFeedback
          onPress={() => cb('Gasoline')}
          background={TouchableNativeFeedback.Ripple('#00000030', true)}
        >
          <View style={currentSort === 'Gasoline' ? styles.imageContainerCurrent : styles.imageContainer}>
            <Image source={require('../../../../assets/vehicle-icons/bike.png')} style={styles.image} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
