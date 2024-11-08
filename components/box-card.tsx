import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BoxCard() {
  return (
    
    <View style={s.container1}>
      <Ionicons name="cube-outline" size={32} color="green" />
      <View style={s.container2}>      
        <Text style={s.title}>{Box.name}</Text>
        <Text>{Box.client}</Text>
        <Text>{Box.boxes} caisses</Text>
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

const Box = 
    {
     id: 1,
     name: "Caisse 1",
     client: "Feneuil-Pointillart",
     boxes: 5
    }