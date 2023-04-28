import { Button, Image, Text, View } from "react-native";
import styles from "./styles.js";


export default function Card({props}){

    const baseURL = 'https://api.otaviolube.com';

    return (
        <View style={styles.container}>
            <View style={styles.campoImagem}>
                <Image style={styles.imagem} source={{uri: baseURL + props.attributes.poster.data.attributes.url}}/>
            </View>
            <View style={styles.infoItem}>
                <View>
                    <Text style={styles.nomeItem}>{props.attributes.titulo}</Text>
                </View>
                <View>
                    <Text style={styles.nomeItem}>{props.attributes.subtitulo}</Text>
                </View>
                <View>
                    <Text style={styles.descItem}>{props.attributes.sinopse}</Text>
                </View>
                <View style={styles.btnTroca}>
                    <Button title="Trocar!"/>
                </View>
            </View>
        </View>
    )
}