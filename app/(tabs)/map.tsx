import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import ClientService from '../services/client-service';
import Client from '../models/client';

export default function TabTwoScreen() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    ClientService.getClients().then(clients => setClients(clients));
  }, []);

  const initialRegion = {
    latitude: 47.3712,
    longitude: 2.0,
    latitudeDelta: 14,
    longitudeDelta: 14,
  };

  return (
    <View style={s.container}>
      <MapView 
        style={s.map} 
        initialRegion={initialRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >

        {clients.map((client) => 
          client.locations.map((location) => (
            <Marker
            key={`${client.id}-${location.id}`}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={client.brand} 
            description= {`${location.name}, ${location.numberOfBoxes/2} caisses`} 
            pinColor={
              location.numberOfBoxes>0 ? 
                "green" 
                : "yellow" 
              }
          />
          )

        ))}
      </MapView>
    
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
