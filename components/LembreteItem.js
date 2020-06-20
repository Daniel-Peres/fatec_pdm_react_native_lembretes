import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from'react-native';
const LembreteItem = (props) => {
    return (
        <TouchableNativeFeedback onPress={() => props.onDelete(props.chave)}>
            <View style={estilos.itemNaLista}>
                <Text>{props.lembrete}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

const estilos = StyleSheet.create({
    itemNaLista:{
        padding: 12,
        backgroundColor: '#EEE',
        borderColor:'#000',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 12,
        fontSize: 16,
        width: '80%',
        alignSelf: 'center'
    },
    
});

export default LembreteItem;