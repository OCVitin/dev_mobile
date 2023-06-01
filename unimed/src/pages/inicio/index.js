import { View } from "react-native";
import styles from "./styles.js";
import Logo from "../../components/logoUnimed/index.js";

export default function Iniciar(){
    return (
        <View style={styles.container}>
            <Logo></Logo>    
        </View>
    )
}