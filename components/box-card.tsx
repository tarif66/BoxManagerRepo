import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Box from './models/box';
import { Link, router, useRouter } from 'expo-router';

type Props = {
  boxProp: Box;
}

export default function BoxCard({boxProp}:Props) {
  const router = useRouter();

  return (
    
    <View style={s.container1}>
      <Ionicons name="cube-outline" size={32} color="green" />
      <View style={s.container2}>      
        <Text style={s.title}>Caisse #{boxProp.id}</Text>
        <Text>{boxProp.client}</Text>
        <Text>{boxProp.numberOfBottles} bouteilles</Text>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            router.push(`/map?latitude=${boxProp.latitude}&longitude=${boxProp.longitude}`);
            }}>
        <Text style={styles.textStyle}>Show Map</Text>
      </Pressable>
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


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});