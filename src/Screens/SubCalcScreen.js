import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.title}> Cálculo de sub-rede :</Text>
                <Text style={styles.content}>Uma sub-rede, é uma rede dentro de outra rede. As sub-redes tornam as redes mais eficientes. Por meio da sub-rede, o tráfego da rede pode percorrer uma distância menor sem passar por roteadores desnecessários para chegar ao seu destino.</Text>
                <Text style={styles.content}>
                    Para criar uma nova sub-rede é feito o cálculo em cima da máscara de rede, onde devemos subdividí-la entre REDE e HOSTS para que possamos obter um maior aproveitamento de endereços e uma distribuição de endereçoes mais organizada, influenciando diretamente na fluidez e eficiência da rede.
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