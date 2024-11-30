import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

type GetNewBoxesCardProps = {
  boxes: number;
  client: {
    brand: string;
    location: {
      latitude: number;
      longitude: number;
      name: string;
    };
  };
  openModal: () => void;
  date: string;
};

const GetNewBoxesCard: React.FC<GetNewBoxesCardProps> = ({ boxes, client, date, openModal }) => {
  return (
    <View style={s.card}>
      <View>  
        <View style={s.arrow} >
            <Ionicons name="arrow-up-outline" size={32} color="#829E91" style={s.arrowIcon} />
          <Text style={s.boxes}>{boxes} caisses récupérées de...</Text>

        </View>
        <Text style={s.brand}>{client.brand}</Text>
        <Text style={s.location}>{client.location.name}</Text>
        <Text style={s.date}>{date}</Text>
        <Pressable style={s.pinIcon}>
          <Link
            href={{
              pathname: '/(tabs)/map',
              params: { latitude: client.location.latitude, longitude: client.location.longitude },
            }}
            asChild
          >
            <Ionicons name="location-outline" size={32} color="#829E91" />
          </Link>
        </Pressable>
      </View >
      {/* <View style={s.buttonContainer}>
        <Pressable style={[s.button, s.buttonClose]}onPress={openModal}>
            <Text style={s.textStyle}>Caisses déposées</Text>
        </Pressable>
      </View> */}

    </View>
  );
};

const s = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: 200,
    
  },
  buttonOpen: {
    backgroundColor: '#829E91',
  },
  buttonClose: {
    backgroundColor: '#829E91',
  },
  buttonCancel: {
    backgroundColor: 'lightgray',
  },
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  boxes: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 16,
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  pinIcon: {
    position: 'absolute',
    right: 16,
    top: 48,
    color: '#829E91',
  },
  arrow: {
    flexDirection: 'row',
  },
  arrowIcon: {
    width: 32,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default GetNewBoxesCard;