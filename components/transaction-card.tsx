// components/TransactionCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

type TransactionCardProps = {
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

const TransactionCard: React.FC<TransactionCardProps> = ({ boxes, client, date, openModal }) => {
  return (
    <View style={s.card}>
      <View style={s.arrow}>
    
      <Ionicons name="arrow-down-outline" size={32} color="#829E91" style={s.arrowIcon} />
        </View>  
      <View>  
        <View >
          <Text style={s.boxes}>- {boxes} caisses</Text>

        </View>
        <Text>transmises à</Text>
        <Text style={s.brand}>{client.brand}</Text>
        <Text style={s.location}>{client.location.name}</Text>
        <Text style={s.date}>{date}</Text>
        
        <View style={s.buttonContainer}>
        <Pressable style={[s.button, s.buttonClose]}onPress={openModal}>
            <Text style={s.textStyle}>Confirmer le dépôt</Text>
        </Pressable>
      </View>
      </View >
      <Pressable style={s.pinIcon}>
          <Link
            href={{
              pathname: '/(tabs)/map',
              params: { latitude: client.location.latitude, longitude: client.location.longitude, longitudeDelta: 0.2, latitudeDelta: 0.2 },
            }}
            asChild
          >
            <Ionicons name="location-outline" size={32} color="#CA6E52" />
          </Link>
        </Pressable>

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
    flexDirection: 'row',
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
    fontWeight: 'bold',
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
    top: 16,
    color: '#829E91',
  },
  arrow: {
    justifyContent: 'center',
    paddingRight: 16,
  },
  arrowIcon: {
    width: 32,
  },
  buttonContainer: {
    alignItems: 'baseline',
  },
});

export default TransactionCard;