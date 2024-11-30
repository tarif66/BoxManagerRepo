import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet,View, Text } from 'react-native';
import ClientService from '../services/client-service';
import Client from '../models/client';
import { USERS } from '../models/mock-users';


export default function HomeScreen() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    ClientService.getClients().then(clients => setClients(clients));
  }, []);
  
  console.log('Current clients state:', clients); // Debugging log


  return (
    <View style={s.container}>
      <View style={s.card}>
        <View style={s.icon}>
          <Ionicons name="cube-outline" size={32} color="green" />
        </View>
        <View style={s.description}>        
          <View>
            <Text>
            Nombre de caisses
            </Text>
          <Text>
          {USERS[0].numberOfBoxes}
          </Text>
        </View>
        </View>
      </View>
      <View style={s.card}>
        <View style={s.icon}>
          <Ionicons name="swap-vertical-outline" size={32} color="green" />
        </View>
        <View style={s.description}>        
          <View>
            <Text>
            Nombre de caisses à donner
            </Text>
          <Text>
            {USERS[0].numberOfBoxesToGive}
          </Text>
        </View>
          <View>
            <Pressable
            style={[s.button, s.buttonClose]}>
            <Text style={s.textStyle}>
              Donner des caisses
            </Text>
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
    gap: 16,
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








