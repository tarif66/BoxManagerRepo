import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Client from './models/client';
import Location from './models/location' 


interface ClientCardProps {
  clientProp: Client;
}


export const ClientCard: React.FC<ClientCardProps> = ({ clientProp }) => {
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
    <View style={s.container}>
      <TouchableOpacity 
        onPress={toggleExpand}
        style={s.header}
      >
        <View>
          <Text style={s.title}>{clientProp.brand}</Text>
        </View>
        <View style={s.expand}>
          <Text>lieu</Text>
          <Animated.View >
            <AntDesign name="caretdown" size={16} color="#333" />
          </Animated.View>
        </View>
        
        
      </TouchableOpacity>
      
      {expanded && (
        <View style={s.content}>
          {clientProp.locations.map((locationMap: Location) => (
            <Text key={locationMap.id}>{locationMap.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 340,
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
    flexDirection: 'column',
    justifyContent: "flex-start",
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
  expand:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  }
});
