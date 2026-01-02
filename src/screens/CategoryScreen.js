import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CategoryScreen({ route }) {
  const { item } = route.params;
  const [used, setUsed] = useState(item.used);

  return (
    <View style={{ padding:16 }}>
      <Text style={{ fontSize:18, fontWeight:'bold' }}>{item.name}</Text>
      <Text>Planned: {item.planned} Br</Text>
      <Text>Used: {used} Br</Text>
      <TextInput keyboardType="numeric" value={String(used)} onChangeText={v=>setUsed(Number(v))} style={{ borderWidth:1, padding:8, marginVertical:8 }} />
      <Button title="Save Usage" onPress={()=>{}} />
    </View>
  );
}