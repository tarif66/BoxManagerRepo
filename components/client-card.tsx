import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


type Props = {
  client:string;
  location:string;
}

export const ClientCard = ({client, location}:Props) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleExpand = () => {
    const toValue = expanded ? 0 : 1;
    
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    
    setExpanded(!expanded);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={toggleExpand}
        style={styles.header}
      >
        <Text style={styles.title}>{client}</Text>
        <Text>lieu</Text>
        <Animated.View >
          <AntDesign name="caretdown" size={16} color="#333" />
        </Animated.View>
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.content}>
          <Text>{location}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    padding: 10,
    paddingTop: 0,
  },
});
