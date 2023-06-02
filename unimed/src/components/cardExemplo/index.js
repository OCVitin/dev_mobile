import { Image } from "react-native";
import styles from "./styles.js";

export default function CardPlano(){
    return (
        <Image style={styles.imagem} source={{uri: 'https://incorporecentromedico.com.br/wp-content/uploads/2023/01/Unimed.png'}}/>
    )
}