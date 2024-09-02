import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dice from './components/Dice'; // Ensure the path is correct

export default function App() {
  return (
    <View style={styles.container}>
      <Dice sides={6} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
