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
  date: string;
};

const TransactionCard: React.FC<TransactionCardProps> = ({ boxes, client, date }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.boxes}>{boxes} boxes</Text>
      <Text style={styles.brand}>{client.brand}</Text>
      <Text style={styles.location}>{client.location.name}</Text>
      <Text style={styles.date}>{date}</Text>
      <Pressable style={styles.pinIcon}>
        <Link
          href={{
            pathname: '/(tabs)/map',
            params: { latitude: client.location.latitude, longitude: client.location.longitude },
          }}
          asChild
        >
          <Ionicons name="location-outline" size={24} color="blue" />
        </Link>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: 16,
  },
});

export default TransactionCard;