import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Users() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Users</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'pink',
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
