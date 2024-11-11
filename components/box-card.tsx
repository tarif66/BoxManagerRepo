import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Box from './models/box';

type Props = {
  boxProp: Box;
}

export default function BoxCard({boxProp}:Props) {
  return (
    
    <View style={s.container1}>
      <Ionicons name="cube-outline" size={32} color="green" />
      <View style={s.container2}>      
        <Text style={s.title}>Caisse #{boxProp.id}</Text>
        <Text>{boxProp.client}</Text>
        <Text>{boxProp.numberOfBottles} bouteilles</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container1: {
    display: 'flex',
    padding: 8,
    alignItems: 'center',
    gap: 8,
    alignSelf: 'stretch',
    width: '90%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'drakgrey',
    borderWidth: 1,
    borderRadius: 3,
    
  },
  container2: {
    display: 'flex',
    width: 300,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16
  },
});

