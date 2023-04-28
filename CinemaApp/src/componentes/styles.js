import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#222222',
        margin: 2,
        backgroundColor: '#111111',
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.7,
    },
    poster: {
        width: '30%',
        height: '100%'
    },
    imagem: {
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    infoFilme: {
        width: '70%',
        paddingLeft: 10,
        borderRadius: 10,
    },
    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#efefef',
    },
    subtitulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#efefef',
    },
    sinopse: {
        margin: 5,
        fontSize: 11,
        color: '#efefef',
    },
    btnTroca: {},
});

export default styles;
