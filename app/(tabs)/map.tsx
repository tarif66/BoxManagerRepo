import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LOCATIONS } from '../../components/models/mock-locations';
import Location from '../../components/models/location';
import { useSearchParams } from 'expo-router/build/hooks';


export default function TabTwoScreen() {
  const [locations, setLocations] = React.useState(LOCATIONS);
  const searchParams = useSearchParams();
  
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');

  const initialRegion = {
    latitude: latitude ? parseFloat(latitude) : 49.2441,
    longitude: longitude ? parseFloat(longitude) : 4.0408,
    latitudeDelta: 1.5,
    longitudeDelta: 1.5,
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
            title={location.brand} 
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
