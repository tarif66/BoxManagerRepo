import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Box from '../app/models/box';
import Client from '../app/models/client';


interface PickerDropdownProps {
  boxProp?: Box; // Make it optional with ?
}

export const PickerDropdown = ({ boxProp }: PickerDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  const clientDP:Client = boxProp? boxProp.client : new Client(0, 'default', []);
  const options: Location[] = boxProp ? clientDP.locations : [];


  return (
    <View style={styles.container}>
      <Text>Select an Option:</Text>
      <Picker 
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        <Picker.Item key="placeholder" label="Select a location" value="" />
        
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.name} value={option.name} />
        ))}
      </Picker>
      <Text>Selected: {selectedValue}</Text>
      <Pressable
      
      ></Pressable>
    </View>
  );
};


// Shared Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      width: "100%",
    },
    picker: {
      height: 200,
      width: "100%",
    },
    dropdownButton: {
      width: 200,
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#444',
    },
    dropdownButtonText: {
      color: '#444',
      textAlign: 'left',
    },
    dropdown: {
      backgroundColor: '#FFF',
      borderRadius: 8,
    },
  });