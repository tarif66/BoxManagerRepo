import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LOCATIONS } from '../../components/models/mock-locations';
import Location from '../../components/models/location';


export default function TabTwoScreen() {
  const [locations, setLocations] = React.useState(LOCATIONS);

  return (
    <View style={s.container}>
      <MapView 
        style={s.map} 
        initialRegion={{
          latitude: 49.2441,       // Set the initial latitude
          longitude: 4.0408,     // Set the initial longitude
          latitudeDelta: 1.5,    // Set the latitude span for the viewport
          longitudeDelta: 1.5,   // Set the longitude span for the viewport
        }}
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
