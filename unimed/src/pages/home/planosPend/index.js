import { Text, View } from "react-native";
import styles from "./styles.js";
import Logo2 from "../../../components/logoSecundaria/index.js";

export default function Home1(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo2></Logo2>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}