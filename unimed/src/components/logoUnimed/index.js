import { Image } from "react-native";
import styles from "./styles.js";

export default function Logo(){
    return (
        <Image style={styles.imagem} source={{uri: 'https://logodownload.org/wp-content/uploads/2014/05/unimed-logo-1.png'}}/>
    )
}