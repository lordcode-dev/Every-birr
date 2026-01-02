import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center', padding:20 }}>
      {/* PLACE YOUR LOGO HERE */}
      <Image source={require('../../assets/logo.png')} style={{ width:120, height:120, marginBottom:20 }} />
      <Text style={{ fontSize:22, fontWeight:'bold', marginBottom:10 }}>Plan Every Birr</Text>
      <Text style={{ textAlign:'center', marginBottom:20 }}>
        Assign each birr a purpose and stay in control of your monthly plan.
      </Text>
      <Button title="Get Started" onPress={() => navigation.replace('Dashboard')} />
    </View>
  );
}