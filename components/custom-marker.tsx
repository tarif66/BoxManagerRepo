import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomMarker = ({ number }: { number: number }) => {
  return (
    <View style={styles.marker}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "#CA6E52",
    padding: 5,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomMarker;