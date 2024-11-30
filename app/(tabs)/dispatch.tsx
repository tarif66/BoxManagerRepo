// screens/DispatchScreen.tsx
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable, Modal, TextInput, Text, ActivityIndicator } from 'react-native';
import TransactionCard from '@/components/transaction-card';
import { Ionicons } from '@expo/vector-icons';
import GetNewBoxesCard from '@/components/getNewBox-card';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = () => {
    setModalVisible(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000); // 10 seconds
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <><ScrollView style={s.container}>
        <TransactionCard
          key={1}
          boxes={transactions[2].boxes}
          client={transactions[2].client}
          date={transactions[2].date} 
          openModal={openModal}
          />
        <GetNewBoxesCard
          key={1}
          boxes={transactions[2].boxes}
          client={transactions[2].client}
          date={transactions[2].date} 
          openModal={openModal}
          />
        <GetNewBoxesCard
          key={1}
          boxes={transactions[2].boxes}
          client={transactions[2].client}
          date={transactions[2].date} 
          openModal={openModal}
        />
        <TransactionCard
          key={1}
          boxes={transactions[2].boxes}
          client={transactions[2].client}
          date={transactions[2].date} 
          openModal={openModal}
          />
        <TransactionCard
          key={1}
          boxes={transactions[2].boxes}
          client={transactions[2].client}
          date={transactions[2].date} 
          openModal={openModal}
          />
    </ScrollView><Pressable style={s.floatingButton} onPress={() => { } }>
        <Ionicons name="add" size={24} color="white" />
      </Pressable>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={s.modalBackground}>
          <View style={s.modalView}>
            {loading ? (
              <>
                <Text style={s.modalText}>En attente de validation</Text>
                <ActivityIndicator size="large" color="#829E91" />
              </>
            ) : (
              <>
                <Text style={s.modalText}>Transfert accepté!</Text>
                <Ionicons name="checkmark-outline" size={32} color="green" />
              </>
            )}
            <Pressable
              style={[s.button, s.buttonClose]}
              onPress={closeModal}
            >
              <Text style={s.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      </>
  );
}

const s = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
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
  container: {
    flex: 1,
    padding: 16,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#829E91',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    },
  });