import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010',
    },
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
    },
    catalogo: {
        margin: 6,
    },
    carregamento: {
        top: '50%',
    },
});

export default styles;