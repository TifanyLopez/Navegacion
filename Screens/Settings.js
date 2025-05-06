import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Settings() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'green', 
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
