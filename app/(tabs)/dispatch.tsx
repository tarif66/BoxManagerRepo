import { StyleSheet,View, ScrollView, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useState } from 'react';


import {ClientCard} from "../../components/client-card"
import Client from "../../components/models/client"
import { CLIENTS } from "../../components/models/mock-clients"

export default function TabTwoScreen() {
  const [clients] = useState<Client[]>(CLIENTS);

  return (
    <ScrollView>
      <View style={s.container}>
          <View style={s.row}>
            {clients.map((client: Client) => (
              <ClientCard clientProp={client}/>))}
          </View>    
      </View>
    </ScrollView>
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
});
