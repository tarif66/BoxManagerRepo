import { StyleSheet,View, ScrollView, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useState } from 'react';
import {ClientCard} from "../../components/client-card"
import Client from "../../components/models/client"
import { CLIENTS } from "../../components/models/mock-clients"
import ScanButton from '../scan-button';

export default function TabTwoScreen() {
  const [clients] = useState<Client[]>(CLIENTS);

  return (
    <View style={s.container}>
      <View >
        <ScanButton />
      </View>
      <ScrollView>
        <View style={s.container}>
          <View style={s.row}>
            {clients.map((client: Client) => (
            <ClientCard clientProp={client}/>))}
          </View>    
        </View>
      </ScrollView>
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

  row: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
