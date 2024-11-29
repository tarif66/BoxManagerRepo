import { StyleSheet,View, Text, Pressable } from 'react-native';

import TruckService from '../services/truck-service';
import Truck from '../models/truck';

import {TRUCKS} from '../models/mock-trucks';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  // const [trucks, setTrucks] = useState<Truck[]>([]);

  // useEffect(() => {
  //   TruckService.getTrucks().then(trucks => setTrucks(trucks));
  // }, []);

  return (
    <View style={s.container}>
      <View style={s.card}>
        <View style={s.icon}>
          <Ionicons name="rocket-outline" size={32} color="green" />
        </View>
        <View style={s.description}>        
          <View>
            <Text>
              {TRUCKS[0].type}
            </Text>
          <Text>
            {TRUCKS[0].model}
          </Text>
          <Text>
            nombre de caisses : {TRUCKS[0].numberOfBoxes}
          </Text>
          <Text>
            destination : Paris
          </Text>
        </View>
          <View>
            <Pressable
            style={[s.button, s.buttonClose]}>
            <Text style={s.textStyle}>Livrer le camion</Text>
            </Pressable>
          </View>
        </View>
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
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    width: "90%",
    gap: 16,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    gap: 16,
  },
  icon: {
    padding: 8,
  },
});