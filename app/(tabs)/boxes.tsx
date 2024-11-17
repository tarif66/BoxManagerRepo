import { StyleSheet,View, ScrollView, Pressable, Modal, Text, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import BoxCard from "../../components/box-card"
import Box from "../../components/models/box"
import { BOXES } from "../../components/models/mock-boxes"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [boxes, setBoxes] = useState<Box[]>(BOXES);
  
  function trackProblem(box: Box): Box[] {
      const updatedBox = {
        ...box,
        problem: !box.problem
      }
  
      const indexToUpdate = boxes.findIndex(
        (box) => box.id === updatedBox.id
      );
  
      const updatedBoxList = [...boxes];
      updatedBoxList[indexToUpdate] = updatedBox;
      setBoxes(updatedBoxList);
      return updatedBoxList;
    }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            >
            <Link
              href={{
                pathname: '/(tabs)/map',
                params: { id: 3 },
              }}
              asChild
            ></Link>
            <Text style={styles.textStyle}>Trouver</Text>
        </Pressable>
        <ScrollView>
          <View style={s.container}>
              <View style={s.row}>
              {boxes.map(boxMap => (
                  <View>
                    <BoxCard key={boxMap.id} boxProp={boxMap} trackProblemProp={trackProblem}/>
                    <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                    </Pressable>
                  </View>
              ))}
              </View>
          
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const s = StyleSheet.create({
  container: {
    paddingTop: 32,
    alignItems: 'center',
    flex: 1,
    margin: 8,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  }});


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});







































