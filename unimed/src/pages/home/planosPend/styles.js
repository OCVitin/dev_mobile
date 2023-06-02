import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    header: {
        position: 'sticky',
        top: 0,
        padding: 5,
        paddingHorizontal: 14,
        backgroundColor: '#009859',
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowRadius: 7,
        shadowOpacity: 0.7,
    },
    content: {
        padding: 5,
        paddingHorizontal: 14,
    },
    footer: {
        position: 'sticky',
        top: '100%',
        padding: 10,
        paddingHorizontal: 56,
        borderTopWidth: 0.4,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowRadius: 7,
        shadowOpacity: 0.7,
    },
});

export default styles;