import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/pagLogin';
import Iniciar from './src/pages/inicio';
import Home1 from './src/pages/home/planosPend';
import CardPlano from './src/components/cardExemplo';

export default function App() {
  return (
    <View style={styles.container}>
      <CardPlano></CardPlano>
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
