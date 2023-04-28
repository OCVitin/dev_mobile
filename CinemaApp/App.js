import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './src/componentes/cardCompra';

export default function App(){

  let [filmes, setFilmes] = useState([]);

  const apiOtavio = 'https://api.otaviolube.com/api/filmes?populate=*';
  
  useEffect(function(){
    fetch(apiOtavio)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto)
        setFilmes(objeto.data)
      })
  }, [])

  return (
    <View style={styles.container}>
      {filmes.length > 0 ? 
      filmes.map(filme => <Card props={filme}/>) : 
      <Text>Carregando...</Text>}
      <StatusBar style="auto"/>
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
