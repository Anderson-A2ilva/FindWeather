import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import ClimaChange from "../../img/climate-change.png"

export default function EmptyState({navigation}) {
    return (
        <View style={estilo.body}>
            <Text style={estilo.titulo}>
                FindWeather
            </Text>
            <Image source={ClimaChange} accessibilityLabel=" Planeta terra, com os tipos de climas, Chuva, Calor, Umidade e Friagem " style={estilo.imagem}/>
            <Text style={estilo.legenda}>
                Selecione aqui um local e encontre o clima em tempo real
            </Text>
        </View>
    )
}

const estilo = StyleSheet.create ({
    body:{
        backgroundColor: '#1B1D22',
        flex: 1,
    },
    titulo: {
        marginTop: 70,
        fontSize: 33,
        lineHeight: 41,
        alignSelf: 'center',
        color: '#fff',
    },
    legenda: {
        width: 328,
        height: 98,
        fontSize: 22,
        lineHeight: 27,
        marginTop: 50,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#AFAFAF',
    },
    imagem: {
        marginTop: 70,
        alignSelf: 'center',
    }
})