import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Box from './models/box';


interface PickerDropdownProps {
  boxProp?: Box; // Make it optional with ?
}

export const PickerDropdown = ({ boxProp }: PickerDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  const options = boxProp ? boxProp.location : Location;

  return (
    <View style={styles.container}>
      <Text>Select an Option:</Text>
      <Picker 
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.name.toString()} value={option} />
        ))}
      </Picker>
      <Text>Selected: {selectedValue}</Text>
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
    },
    picker: {
      height: 50,
      width: 200,
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