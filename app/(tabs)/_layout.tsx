import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';

export default function TabLayout() {
  const addExpenseHandler = () => {
    console.log('Add new expense');
  };
  const tabScreenOptions = {
    headerStyle: { backgroundColor: 'rgb(66, 8, 133)' },
    headerTintColor: 'white',
    tabBarActiveTintColor: 'rgb(194, 172, 48)',
    tabBarActiveBackgroundColor: 'rgb(66, 8, 133)',
    tabBarInactiveBackgroundColor: 'rgb(66, 8, 133)',
    headerRight: () => (
      <Pressable
        onPress={addExpenseHandler}
        style={({ pressed }) => [
          { padding: 8, marginRight: 16, opacity: pressed ? 0.7 : 1 },
        ]}
      >
        <Ionicons name='add' size={24} color='white' />
      </Pressable>
    ),
  };
  return (
    <Tabs screenOptions={tabScreenOptions}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Recent',
          headerTitle: 'Recent Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='allExpenses'
        options={{
          title: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
