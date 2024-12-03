import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Modal, TextInput, Dimensions } from 'react-native';
import Svg, { Circle, Text as SvgText, Image as SvgImage } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import ClientService from '../services/client-service';
import Client from '../models/client';
import { USERS } from '../models/mock-users';
import { Link } from 'expo-router';

const PieChartSegment = ({ center, radius, strokeWidth, color, circumference, angle, percent }: { center: number, radius: number, strokeWidth: number, color: string, circumference: number, angle: number, percent: number }) => {
  const strokeDashoffset = circumference * (1 - percent);
  const rotateAngle = angle - 90; // Adjust the angle to start at the top

  return (
    <Circle
      cx={center}
      cy={center}
      r={radius}
      strokeWidth={strokeWidth}
      stroke={color}
      strokeDasharray={circumference}
      strokeDashoffset={strokeDashoffset}
      transform={`rotate(${rotateAngle}, ${center}, ${center})`}
    />
  );
};

const PieChart = ({ size = 200, strokeWidth = 20, data, centerText }: { size?: number, strokeWidth?: number, data: { color: string, percent: number }[], centerText: string, centerIcon: any }) => {
  const [startAngles, setStartAngles] = useState<number[]>([]);
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let angle = 0;
    const angles: number[] = [];
    data.forEach(item => {
      angles.push(angle);
      angle += item.percent * 360;
    });

    setStartAngles(angles);
  }, [data]);

  return (
    <View style={{ width: size, height: size }}>
      <Svg viewBox={`0 0 ${size} ${size}`}>
        {data.map((item, index) => (
          <PieChartSegment
            key={`${item.color}-${index}`}
            center={center}
            radius={radius}
            circumference={circumference}
            angle={startAngles[index]}
            color={item.color}
            percent={item.percent}
            strokeWidth={strokeWidth}
          />
        ))}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="#fff"
        />
        <Ionicons name="cube-outline" size={48} color="#829E91" style={s.pieChartIcon} />
        <SvgText
          x={center}
          y={center}
          textAnchor="middle"
          dy=".3em"
          fontSize="70"
          fill="black"
        >
          {centerText}
        </SvgText>

      </Svg>
    </View>
  );
};

export default function HomeScreen() {
  const [clients, setClients] = useState<Client[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [numberOfBoxesToGive, setNumberOfBoxesToGive] = useState(USERS[0].numberOfBoxesToGive);
  const [tempNumberOfBoxesToGive, setTempNumberOfBoxesToGive] = useState(USERS[0].numberOfBoxesToGive);

  useEffect(() => {
    ClientService.getClients().then(clients => setClients(clients));
  }, []);
  
  console.log('Current clients state:', clients); // Debugging log

  const handleSave = () => {
    USERS[0].numberOfBoxesToGive = tempNumberOfBoxesToGive;
    setNumberOfBoxesToGive(tempNumberOfBoxesToGive);
    clients[0].locations[0].numberOfBoxes = tempNumberOfBoxesToGive;
    setModalVisible(false);
  };

  const handleCancel = () => {
    setTempNumberOfBoxesToGive(numberOfBoxesToGive);
    setModalVisible(false);
  };

  const totalBoxes = USERS[0].numberOfBoxes;
  const data = [
    { color: 'black', percent: numberOfBoxesToGive / totalBoxes },
    { color: '#829E91', percent: 1 - (numberOfBoxesToGive / totalBoxes) },
  ];

  const centerText = `${numberOfBoxesToGive}`;
  const centerIcon = require('../../assets/images/icon.png'); // Replace with your icon path


  return (
    <View style={s.container}>
      <Image source={require('../../assets/images/oenoco.png')} style={s.headerImage} />
      <View style={s.dataviz}>
        <View style={s.iconFat}>
          <Ionicons name="cube-outline" size={48} color="#829E91" />
        </View>
        <View style={s.description}>        
          <View>
            <Text style={s.numberFat}>{USERS[0].numberOfBoxes}</Text>
          </View>
          <View style={s.pinIcon}>
            <Pressable >
              <Link
                href={{
                  pathname: '/(tabs)/map',
                  params: { latitude: USERS[0].latitude, longitude: USERS[0].longitude, longitudeDelta: 0.05, latitudeDelta: 0.05  },
                }}
                asChild
              >
                <Ionicons name="location-outline" size={32} color="#CA6E52" />
              </Link>
            </Pressable>
            <Text style={s.location}>{USERS[0].location}</Text>
          </View>
        </View>
      </View>

      <PieChart size={200} strokeWidth={20} data={data} centerText={centerText} centerIcon={centerIcon}  />

      <View style={s.card}>
        <View style={s.icon}>
          <Ionicons name="arrow-up-outline" size={32} color="#829E91" />
        </View>
        <View style={s.description}>        
          <View>
            <Text>Nombre de caisses à donner</Text>
            <View style={s.edit}>
              <Text style={s.number}>{numberOfBoxesToGive}</Text>
              <Pressable onPress={() => setModalVisible(true)} style={s.buttonPieChart}>
          <Ionicons name="pencil-outline" size={32} color="black" />
        </Pressable>

            </View>
          </View>
          <View >
            <Pressable style={[s.button, s.buttonClose]}>
              <Text style={s.textStyle}>Donner</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={s.modalBackground}>
          <View style={s.modalView}>
            <Text style={s.modalText}>Combien de caisses donnez-vous ?</Text>
            <TextInput
              style={s.input}
              value={tempNumberOfBoxesToGive.toString()}
              onChangeText={(text) => setTempNumberOfBoxesToGive(Number(text))}
              keyboardType="numeric"
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
    </View>
  );
}

const s = StyleSheet.create({
  iconFat: {
  },
  dataviz: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    paddingTop: 32,
    alignItems: 'center',
    flex: 1,
    margin: 8,
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    width: "90%",
    gap: 16,
  },
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
    width: 100,
  },
  buttonCancel: {
    backgroundColor: 'lightgray',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  number: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  numberFat: {
    fontSize: 100,
    fontWeight: 'thin'
  },
  description: {
    gap: 16,
  },
  icon: {
    padding: 8,
  },
  headerImage: {
    marginRight: 8,
    marginBottom: 16,
  },
  edit: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: 100,
    textAlign: 'center',
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  pinIcon: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  pieChartIcon: {
    position: 'absolute',
    top: 76,
    left: 28,
  },
  buttonPieChart: {
    position: 'absolute',
    top: -180,
    right: 30,
    padding: 8,
  },
});