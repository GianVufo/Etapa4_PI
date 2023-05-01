import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.title}>CIDR :</Text>
                <Text style={styles.content}>
                    O CIDR é uma sigla para Classes Inter-Domain Routing, e ele é considerado um método para repartir os endereços IP e para rotear.
                </Text>
                <Text style={styles.content}>
                    Foi em 1993 que o CIDR foi introduzido pela Internet Engineering Task Force, e desde então esse método tem sido utilizado para substituir a arquitetura anterior que endereçava as redes.
                </Text>
                <Text style={styles.content}>
                    Sua principal função era de desacelerar o crescimento das tabelas que continham os roteamentos dos roteadores na rede. Desta forma, foi possível auxiliar a desacelerar a rapidez com que os endereços IPv4 estava alcançando.
                </Text>
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