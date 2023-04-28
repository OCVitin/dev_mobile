import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
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
      <View style={styles.header}>
        <Text style={styles.logo}>OCineminha</Text>
        <View style={styles.barraPesq}>
          <Text style={styles.buscar}>Buscar mais filmes...</Text>
        </View>
      </View>
      <View style={styles.catalogo}>
        {filmes.length > 0 ? 
        filmes.map(filme => <Card props={filme}/>) : 
        <Text>Carregando...</Text>}
        <StatusBar style="auto"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#950101',
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  logo: {
    color: '#fefefe',
    fontWeight: 'bold',
    width: '30%',
    fontSize: 17,
    margin: 2,
  },
  barraPesq: {
    backgroundColor: '#750101',
    width: '70%',
    padding: 5,
    borderRadius: 4,
  },
  buscar: {
    color: '#000000',
    opacity: 0.4,
  },
  catalogo: {
    margin: 6,
  },
});
