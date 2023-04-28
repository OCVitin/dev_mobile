import { Button, Image, Text, View } from "react-native";
import styles from "./styles.js";


export default function Card({props}){

    const baseURL = 'https://api.otaviolube.com';

    return (
        <View style={styles.container}>
            <View style={styles.poster}>
                <Image style={styles.imagem} source={{uri: baseURL + props.attributes.poster.data.attributes.url}}/>
            </View>
            <View style={styles.infoFilme}>
                <View>
                    <Text style={styles.titulo}>{props.attributes.titulo}</Text>
                </View>
                <View>
                    <Text style={styles.subtitulo}>{props.attributes.subtitulo}</Text>
                </View>
                <View>
                    <Text style={styles.sinopse}>{props.attributes.sinopse}</Text>
                </View>
                <View style={styles.btnTroca}>
                    <Button title="Cromprar!" color="#950101"/>
                </View>
            </View>
        </View>
    )
}
