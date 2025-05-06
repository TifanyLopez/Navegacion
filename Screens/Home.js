import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Home</Text>
      <Button
        title="Ir a Detalle"
        onPress={() => navigation.navigate('DetailHome')}
      />
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
    marginBottom: 20,
  },
});
