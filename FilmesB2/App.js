import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalogo from './src/pages/menu';
import SaibaMais from './src/pages/saibaMais';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Catalogo">
          <Stack.Screen name="Catalogo" component={Catalogo} options={{headerShown: false}}/>
          <Stack.Screen name="Detalhes" component={SaibaMais}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
});
