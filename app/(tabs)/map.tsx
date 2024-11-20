import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSearchParams } from 'expo-router/build/hooks';
import {LOCATIONS} from '/Users/olivierbrechon/BoxManager/components/models/mock-locations'; 

export default function TabTwoScreen() {
  const [locations, setLocations] = React.useState(LOCATIONS);
  const searchParams = useSearchParams();
  
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');

  const initialRegion = {
    latitude: latitude ? parseFloat(latitude) : 47.3712,
    longitude: longitude ? parseFloat(longitude) : 2.0,
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

        {locations.map(location => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="Lieu" 
            description= {`${location.name}, ${location.numberOfBoxes} caisses`} 
            pinColor={
                // client.problem===true? "red" :
                location.numberOfBoxes>0 ? 
                "green" 
                : "yellow" 
              }
          />
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
