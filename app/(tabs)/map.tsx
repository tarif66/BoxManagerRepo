import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import ClientService from '../services/client-service';
import Client from '../models/client';
import CustomMarker from '@/components/custom-marker';
import { useSearchParams } from 'expo-router/build/hooks';

export default function TabTwoScreen() {
  const [clients, setClients] = useState<Client[]>([]);
  const searchParams = useSearchParams();
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');


  useEffect(() => {
    ClientService.getClients().then(clients => setClients(clients));
  }, []);

  const initialRegion = {
    latitude: latitude ? parseFloat(latitude) : 49.2441,
    longitude: longitude ? parseFloat(longitude) : 4.0408,
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
          client.locations
            .filter(location => location.numberOfBoxes > 0)
            .map((location) => (
              <Marker
              key={`${client.id}-${location.id}`}
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title={client.brand} 
              description= {`${location.name}, ${location.numberOfBoxes/2} caisses disponibles`} 
              pinColor={
                location.numberOfBoxes>0 ? 
                  "green" 
                  : "yellow" 
                }
            >
              <CustomMarker number={location.numberOfBoxes/2} />
            </Marker>
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
