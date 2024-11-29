import { StyleSheet,View, Text } from 'react-native';

import TruckService from '../services/truck-service';
import Truck from '../models/truck';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {
  const [trucks, setTrucks] = useState<Truck[]>([]);

  useEffect(() => {
    TruckService.getTrucks().then(trucks => setTrucks(trucks));
  }, []);

  return (
    <View style={s.container}>
      <View>
        <Text>
          {trucks[2]}

        </Text>


      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    paddingTop: 32,
    alignItems: 'center',
    flex: 1,
    margin: 8,
  },
});