import { Button, Image, Text, View } from "react-native";
import styles from "./styles.js";
import { Link } from "@react-navigation/native";


export default function Card({props}){

    const baseURL = 'https://api.otaviolube.com';

    return (
        <View style={styles.container}>
            <View style={styles.poster}>
                <Image style={styles.imagem} source={{uri: baseURL + props.attributes.poster.data.attributes.formats.thumbnail.url}}/>
            </View>
            <View style={styles.infoFilme}>
                    <Text style={styles.titulo}>{props.attributes.titulo}</Text>
                    <Text style={styles.subtitulo}>{props.attributes.subtitulo}</Text>
                    <Text style={styles.sinopse}>{props.attributes.sinopse.length > 200 ? 
                    props.attributes.sinopse.substring(0, 200) + "..." :
                    props.attributes.sinopse}</Text>
                    <Link to={{screen: "Detalhes", 
                    params: {props: props}}}>Saiba mais...</Link>
                <View style={styles.btnTroca}>
                    <Button title="Comprar!" color="#950101"/>
                </View>
            </View>
        </View>
    )
}