// screens/DispatchScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TransactionCard from '@/components/transaction-card';

const transactions = [
  {
    boxes: 10,
    client: {
      brand: 'Brand A',
      location: { latitude: 52.5200, longitude: 13.4050, name: 'Berlin' },
    },
    date: '2023-10-01',
  },
  {
    boxes: -5,
    client: {
      brand: 'Brand B',
      location: { latitude: 48.8566, longitude: 2.3522, name: 'Paris' },
    },
    date: '2023-10-02',
  },
  {
    boxes: 15,
    client: {
      brand: 'Brand C',
      location: { latitude: 40.7128, longitude: -74.0060, name: 'New York' },
    },
    date: '2023-10-03',
  },
  {
    boxes: -8,
    client: {
      brand: 'Brand D',
      location: { latitude: 34.0522, longitude: -118.2437, name: 'Los Angeles' },
    },
    date: '2023-10-04',
  },
  {
    boxes: 20,
    client: {
      brand: 'Brand E',
      location: { latitude: 35.6895, longitude: 139.6917, name: 'Tokyo' },
    },
    date: '2023-10-05',
  },
  {
    boxes: -12,
    client: {
      brand: 'Brand F',
      location: { latitude: 51.5074, longitude: -0.1278, name: 'London' },
    },
    date: '2023-10-06',
  },
  {
    boxes: 7,
    client: {
      brand: 'Brand G',
      location: { latitude: 55.7558, longitude: 37.6173, name: 'Moscow' },
    },
    date: '2023-10-07',
  },
  {
    boxes: -3,
    client: {
      brand: 'Brand H',
      location: { latitude: 39.9042, longitude: 116.4074, name: 'Beijing' },
    },
    date: '2023-10-08',
  },
  {
    boxes: 25,
    client: {
      brand: 'Brand I',
      location: { latitude: -33.8688, longitude: 151.2093, name: 'Sydney' },
    },
    date: '2023-10-09',
  },
  {
    boxes: -10,
    client: {
      brand: 'Brand J',
      location: { latitude: 37.7749, longitude: -122.4194, name: 'San Francisco' },
    },
    date: '2023-10-10',
  },
  // Add more transactions as needed
];

export default function DispatchScreen() {
  return (
    <ScrollView style={styles.container}>
      {transactions.map((transaction, index) => (
        <TransactionCard
          key={index}
          boxes={transaction.boxes}
          client={transaction.client}
          date={transaction.date}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});