import React from 'react';
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native';
export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Jeferson</Text>

      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    marginTop: 30,
  },
});
