// screens/DispatchScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Modal, TextInput, Text, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import TransactionCard from '@/components/transaction-card';
import { Ionicons } from '@expo/vector-icons';
import GetNewBoxesCard from '@/components/getNewBox-card';
import { StackedBarChart } from 'react-native-chart-kit';
import { USERS } from '../models/mock-users';

const initialTransactions = [
  {
    id: '1',
    boxes: 2,
    client: {
      brand: 'Le Duc du bar',
      location: { latitude: 48.76516, longitude: 5.16, name: 'Bar-le-Duc' },
    },
    date: '2023-09-04',
  },
  {
    id: '2',
    boxes: 8,
    client: {
      brand: 'Biocoop Saint-Dizier',
      location: { latitude: 48.650989, longitude: 4.961442, name: 'Saint-Dizier' },
    },
    date: '2023-04-04',
  },
  {
    id: '3',
    boxes: 2,
    client: {
      brand: 'Domaine du Clos Michel',
      location: { latitude: 48.76516, longitude: 5.16, name: 'Toul' },
    },
    date: '2023-10-03',
  },
  {
    id: '4',
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

  const user = USERS[0];
  const data = {
    labels: user.historicalData.map(item => item.month),
    legend: ['Owned', 'Acquired'],
    data: user.historicalData.map(item => [item.owned, item.acquired]),
    barColors: ['#ca6e52', '#829E91'],
  };

  const renderTransactions = () => {
    let currentMonthYear = '';
    const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedTransactions.map((transaction, index) => {
      const transactionMonthYear = new Date(transaction.date).toLocaleString('default', { month: 'long', year: 'numeric' });
      const showDivider = transactionMonthYear !== currentMonthYear;
      currentMonthYear = transactionMonthYear;

      const formattedDate = new Date(transaction.date).toLocaleDateString('default', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      return (
        <View key={transaction.id}>
          {showDivider && (
            <Text style={s.divider}>{transactionMonthYear}</Text>
          )}
          <TransactionCard
            boxes={transaction.boxes}
            client={transaction.client}
            date={formattedDate}
            openModal={openModal1}
          />
        </View>
      );
    });
  };

  return (
    <>
      <View style={s.stickyHeader}>
        <ScrollView horizontal style={s.horizontalScrollView}>
          <StackedBarChart
            data={data}
            width={Dimensions.get('window').width * 1}
            height={200}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {},
              propsForLabels: {
                fontSize: 13,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: 'black',
              },
              formatYLabel: (label) => `${parseInt(label, 10)}`, // Format y-axis labels as integers
            }}
            style={{
              backgroundColor: 'white',
              paddingTop: 16,
              paddingHorizontal: 8,
            }}
            hideLegend={true}
          />
          
        </ScrollView>
        <View style={s.legendContainer}>
          <View style={s.legendItem}>
            <View style={[s.legendColor, { backgroundColor: '#ca6e52', borderRadius: 10 }]} />
            <Text style={s.legendText}>Owned</Text>
          </View>
          <View style={s.legendItem}>
            <View style={[s.legendColor, { backgroundColor: '#829E91', borderRadius: 10 }]} />
            <Text style={s.legendText}>Acquired</Text>
          </View>
        </View>
      </View>
      <ScrollView style={s.container}>
        {renderTransactions()}
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
      </ScrollView>
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
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  legendText: {
    fontSize: 14,
    color: '#000',
  },
  stickyHeader: {
    backgroundColor: 'white',
  },
  horizontalScrollView: {
    backgroundColor: 'white',
  },
  divider: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#000',
  },
});