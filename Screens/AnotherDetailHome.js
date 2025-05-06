import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnotherDetailHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Otra Pantalla de Detalle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
