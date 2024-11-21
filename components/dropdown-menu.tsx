import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Method 1: Using React Native Picker (Simple, but less customizable)
export const PickerDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <View style={styles.container}>
      <Text>Select an Option:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
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