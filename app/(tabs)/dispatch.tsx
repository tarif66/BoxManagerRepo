// screens/DispatchScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Modal, TextInput, Text, ActivityIndicator } from 'react-native';
import TransactionCard from '@/components/transaction-card';
import { Ionicons } from '@expo/vector-icons';
import GetNewBoxesCard from '@/components/getNewBox-card';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';

const initialTransactions = [
  {
    id: '1',
    boxes: 2,
    client: {
      brand: 'Le Duc du bar',
      location: { latitude: 48.76516, longitude: 5.16, name: 'Bar-le-Duc' },
    },
    date: '23 novembre 2024',
  },
  {
    id: '2',
    boxes: 8,
    client: {
      brand: 'Biocoop Saint-Dizier',
      location: { latitude: 48.650989, longitude: 4.961442, name: 'Saint-Dizier' },
    },
    date: '23 novembre 2024',
  },
  {
    id: '3',
    boxes: 2,
    client: {
      brand: 'Domaine du Clos Michel',
      location: { latitude: 48.76516, longitude: 5.16, name: 'Toul' },
    },
    date: '23 novembre 2024',
  }
];

export default function DispatchScreen() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const openModal2 = () => {
    setModalVisible2(true);
  };

  const closeModal2 = () => {
    setModalVisible2(false);
  };

  const renderItem = ({ item, drag, isActive }: RenderItemParams<typeof initialTransactions[0]>) => {
    return (
      <Pressable
        onLongPress={drag}
        disabled={isActive}
        style={[s.card, isActive && { backgroundColor: '#f0f0f0' }]}
      >
        <TransactionCard
          key={item.id}
          boxes={item.boxes}
          client={item.client}
          date={item.date}
          openModal={openModal1}
        />
      </Pressable>
    );
  };

  return (
    <View style={s.container}>
      <DraggableFlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onDragEnd={({ data }) => setTransactions(data)}
      />

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
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={s.modalBackground}>
          <View style={s.modalView}>
            <Text style={s.modalText}>Combien de boîtes récupérez-vous ?</Text>
            <TextInput
              style={s.input}
              keyboardType="numeric"
            />
            <Pressable
              style={[s.button, s.buttonClose]}
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
    </View>
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
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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