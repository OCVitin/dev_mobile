import { Text, View } from "react-native";
import styles from "./styles.js";

export default function HeaderLogo() {
    return(
        <View style={styles.header}>
            <Text style={styles.logo}>OCineminha</Text>
            <View style={styles.barraPesq}>
                <Text style={styles.buscar}>Buscar mais filmes...</Text>
            </View>
        </View>
    )
}