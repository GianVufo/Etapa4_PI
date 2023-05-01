import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class extends Component {
    render() {
        return (
            <View style={styles.mainView} >
                <Text style={styles.title} >Endereço Ip :</Text>
                <Text style={styles.content}>Um endereço IP é formado por dois grupos de bits: o primeiro são os bits considerados mais significativos, ou seja, são os prefixos da rede. Estes identificam uma rede ou uma sub-rede.</Text>

                <Text style={styles.content}>O segundo grupo é formado pelos bits menos significativos, e eles identificam os hosts, ou seja, o responsável por especificar uma interface que é totalmente particular na rede.</Text>

                <Text style={styles.content}>A partir dessa divisão, é possível começar de uma base e então rotear o tráfego entre as redes IP e criar políticas para alocar os endereços.</Text>
            </View>
        )
    }
}

/* Estilização do projeto */
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#96c3a6',
    },

    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        right: 1,
        marginBottom: 40
    },

    content: {
        width: 280,
        textAlign: 'justify',
        fontSize: 16,
        marginBottom: 5
    }
});