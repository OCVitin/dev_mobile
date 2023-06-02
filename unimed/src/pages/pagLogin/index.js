import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./styles.js";
import Logo from "../../components/logoUnimed/index.js";

export default function Login(){
    return (
        <SafeAreaView style={styles.container}>
            <Logo></Logo>
            <TextInput style={styles.input}
            placeholder="Log-in..."/>
            <TextInput style={styles.input}
            placeholder="Senha..."/>
            <View style={styles.btnEntrar}>
                <Button
                title="Entrar"
                color="#009859"/>
            </View>
        </SafeAreaView>
    )
}
