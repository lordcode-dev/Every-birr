import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import { remainingBirr } from '../utils/budget';

export default function DashboardScreen({ navigation }) {
  const [income, setIncome] = useState(0);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [planned, setPlanned] = useState('');

  const addCategory = () => {
    if (!name || !planned) return;
    setCategories([...categories, { id: Date.now().toString(), name, planned: Number(planned), used: 0 }]);
    setName(''); setPlanned('');
  };

  const remaining = remainingBirr(income, categories);

  return (
    <View style={{ flex:1, padding:16 }}>
      <Text>Monthly Income (ETB)</Text>
      <TextInput keyboardType="numeric" value={String(income)} onChangeText={v=>setIncome(Number(v))} style={{ borderWidth:1, padding:8, marginBottom:8 }} />
      <Text style={{ fontWeight:'bold' }}>Birr left to plan: {remaining} Br</Text>

      <View style={{ marginTop:12 }}>
        <Text>Add Category</Text>
        <TextInput placeholder="Name" value={name} onChangeText={setName} style={{ borderWidth:1, padding:8, marginVertical:4 }} />
        <TextInput placeholder="Planned amount" keyboardType="numeric" value={planned} onChangeText={setPlanned} style={{ borderWidth:1, padding:8, marginVertical:4 }} />
        <Button title="Add" onPress={addCategory} />
      </View>

      <FlatList
        style={{ marginTop:12 }}
        data={categories}
        keyExtractor={i=>i.id}
        renderItem={({ item }) => (
          <CategoryCard item={item} onPress={()=>navigation.navigate('Category', { item })} />
        )}
      />
    </View>
  );
}