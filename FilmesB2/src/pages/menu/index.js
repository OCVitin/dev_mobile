import { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import styles from "./styles.js";
import Card from '../../components/cardCompra';
import HeaderLogo from '../../components/header';


export default function Catalogo({navigation}) {
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

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderLogo/>
            </View>
            {filmes.length > 0 ? <ScrollView style={styles.catalogo}>
            {filmes.map(filme => <Card key={filme.id} props={filme}/>)}
            </ScrollView> : <View style={styles.carregamento}>
            <ActivityIndicator size={'large'}/>
            </View>}
        </View>
    )
}