import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inventaire',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cube' : 'cube-outline'} color='#829E91' />
          ),
        }}
      />
      <Tabs.Screen
        name="dispatch"
        options={{
          title: 'Echanges',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'swap-vertical' : 'swap-vertical-outline'} color='#829E91'/>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Caisses disponibles',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'map' : 'map-outline'} color='#829E91' />
          ),
        }}
      />
    </Tabs>
  );
}
