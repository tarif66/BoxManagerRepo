import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default function TabTwoScreen() {
  const [location, setLocation] = React.useState(null);

  const pointsOfInterest = [
    {
      id: 1,
      title: 'Feneuil Pointillart',
      description: 'Maison de Champagne avec ',
      latitude: 49.1738,
      longitude: 3.9561,
      numberOfBoxes: '10 caisses',
    }
  ]

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
        {pointsOfInterest.map((poi) => (
          <Marker
            key={poi.id}
            coordinate={{ latitude: poi.latitude, longitude: poi.longitude }}
            title={poi.title}
            description={poi.description + poi.numberOfBoxes}
            pinColor="blue"
            
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
