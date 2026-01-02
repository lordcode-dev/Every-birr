import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CategoryCard({ item, onPress }) {
  const remaining = item.planned - item.used;
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 12, marginVertical: 6, borderWidth: 1, borderRadius: 8 }}>
      <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
      <Text>Planned: {item.planned} Br</Text>
      <Text>Used: {item.used} Br</Text>
      <Text style={{ color: remaining < 0 ? 'red' : 'green' }}>Remaining: {remaining} Br</Text>
    </TouchableOpacity>
  );
}