import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'gold',
        tabBarActiveBackgroundColor: 'purple',
        tabBarInactiveTintColor: 'lightgray',
        tabBarInactiveBackgroundColor: 'purple',
      }}
    >
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
