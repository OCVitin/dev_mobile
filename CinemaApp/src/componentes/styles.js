import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        borderRadius: 10,
    },
    campoImagem: {
        width: '30%',
        height: '100%'
    },
    imagem: {
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    infoItem: {
        width: '70%',
        padding: 10,
        borderRadius: 10,
        justifyContent: "space-between"
    },
    nomeItem: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    descItem: {
        margin: 5,
    },
    btnTroca: {},
});

export default styles;