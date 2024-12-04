import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import ClientService from '../services/client-service';
import Client from '../models/client';
import CustomMarker from '@/components/custom-marker';
import { useSearchParams } from 'expo-router/build/hooks';

const customMapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
  


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
    const latitude = parseFloat(searchParams.get('latitude') || '47.3712');
    const longitude = parseFloat(searchParams.get('longitude') || '2');
    const latitudeDelta = parseFloat(searchParams.get('latitudeDelta') || '14');
    const longitudeDelta = parseFloat(searchParams.get('longitudeDelta') || '14');
    setRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
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
        customMapStyle={customMapStyle}
        >

        {clients.map((client) => 
          client.locations
            .filter(location => location.numberOfBoxes > 0)
            .map((location) => (
              <Marker
              key={`${client.id}-${location.id}`}
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title={client.brand} 
              description= {`${location.name}, ${location.numberOfBoxes} caisses disponibles`} 
              pinColor={
                location.numberOfBoxes>0 ? 
                  "green" 
                  : "yellow" 
                }
            >
              <CustomMarker number={location.numberOfBoxes} />
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
