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
  const [region, setRegion] = useState({
    latitude: 47.3712,
    longitude: 2.0,
    latitudeDelta: 14,
    longitudeDelta: 14,
  });

  useEffect(() => {
    const latitude = parseFloat(searchParams.get('latitude') || '49.2441');
    const longitude = parseFloat(searchParams.get('longitude') || '4.0408');
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 14,
      longitudeDelta: 14,
    });
  }, [searchParams]);

  useEffect(() => {
    ClientService.getClients().then(clients => setClients(clients));
  }, []);

  return (
    <View style={s.container}>
      <MapView 
        style={s.map} 
        region={region}
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
