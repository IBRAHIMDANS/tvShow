import {
    StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
    viewContainer : {
        flex:1,
        backgroundColor: '#ffff',
        padding: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 300
    },
    cardStyle : {
        flexShrink: 2,
        flexBasis: 20
    },
    textInput :{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
});