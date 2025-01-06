// screens/DispatchScreen.tsx
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable, Modal, TextInput, Text, ActivityIndicator } from 'react-native';
import TransactionCard from '@/components/transaction-card';
import { Ionicons } from '@expo/vector-icons';
import GetNewBoxesCard from '@/components/getNewBox-card';
import * as Location from 'expo-location';

const initialTransactions = [
  {
    boxes: 2,
    client: {
      brand: 'Le Duc du bar',
      location: { latitude: 48.76516, longitude: 5.16, name: 'Bar-le-Duc' },
    },
    date: '23 novembre 2024',
  },
  {
    boxes: 8,
    client: {
      brand: 'Biocoop Saint-Dizier',
      location: { latitude: 48.650989, longitude: 4.961442, name: 'Saint-Dizier' },
    },
    date: '23 novembre 2024',
  },
  {
    boxes: 2,
    client: {
      brand: 'Domaine du Clos Michel',
      location: { latitude: 48.76516, longitude: 5.16, name: 'Toul' },
    },
    date: '23 novembre 2024',
  },
  {
    boxes: 8,
    client: {
      brand: 'Brand D',
      location: { latitude: 34.0522, longitude: -118.2437, name: 'Los Angeles' },
    },
    date: '2023-10-04',
  }
];

export default function DispatchScreen() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newBoxes, setNewBoxes] = useState('');
  const [location, setLocation] = useState(null);

  const handleCancel = () => {
    setModalVisible2(false);
  };

  const openModal1 = () => {
    setModalVisible1(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds
  };

  const closeModal1 = () => {
    setModalVisible1(false);
  };

  const openModal2 = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setModalVisible2(true);
  };

  const closeModal2 = () => {
    setModalVisible2(false);
  };

  const handleSave = () => {
    const newTransaction = {
      boxes: parseInt(newBoxes, 10),
      client: {
        brand: 'Current Location',
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          name: 'Current Location',
        },
      },
      date: new Date().toLocaleDateString(),
    };

    setTransactions([...transactions, newTransaction]);
    setModalVisible2(false);
  };

  return (
    <>
      <ScrollView style={s.container}>
        {transactions.map((transaction, index) => (
          <GetNewBoxesCard
            key={index}
            boxes={transaction.boxes}
            client={transaction.client}
            date={transaction.date}
            openModal={openModal1}
          />
        ))}
      </ScrollView>
      <Pressable style={s.floatingButton} onPress={openModal2}>
        <Ionicons name="add" size={24} color="white" />
      </Pressable>
      <Modal
        transparent={true}
        visible={modalVisible1}
        onRequestClose={closeModal1}
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
              onPress={closeModal1}
            >
              <Text style={s.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={modalVisible2}
        onRequestClose={closeModal2}
      >
        <View style={s.modalBackground}>
          <View style={s.modalView}>
            <Text style={s.modalText}>Combien de boîtes récupérez-vous ?</Text>
            <TextInput
              style={s.input}
              keyboardType="numeric"
              value={newBoxes}
              onChangeText={setNewBoxes}
            />
            <Pressable
              style={[s.button, s.buttonClose]}
              onPress={handleSave}
            >
              <Text style={s.textStyle}>Save</Text>
            </Pressable>
            <Pressable
              style={[s.button, s.buttonCancel]}
              onPress={handleCancel}
            >
              <Text style={s.textStyle}>Cancel</Text>
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
    backgroundColor: '#CA6E52',
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: 100,
    textAlign: 'center',
  },
});