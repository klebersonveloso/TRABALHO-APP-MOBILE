import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');

  function calcularArea() {
    if (base > 0 && altura > 0) {
      setArea((parseFloat(base) * parseFloat(altura)) / 2);
    } else {
      setArea('');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Insira os dados abaixo para calcular a área do triângulo</Text>
      <TextInput
        placeholder='Base'
        style={{ height: 40, textAlign: 'center'}}
        keyboardType={'numeric'}
        onChangeText={base => setBase(base)}
      />
      <TextInput
        placeholder='Altura'
        style={{ height: 40, textAlign: 'center' }}
        keyboardType={'numeric'}
        onChangeText={altura => setAltura(altura)}
      />
      <Button
        title='Calcular'
        onPress={calcularArea}
      />
      <Text>{area ? `Resultado: ${area}` : ''}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
