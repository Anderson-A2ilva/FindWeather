import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import NuvemTrovoes from "../../img/cloud-and-thunder.png"
import { ScrollView } from "react-native-gesture-handler";

export default function BoasVindas( {navigation} ) {
    return <ScrollView style={estilos.body}>
        <Image source={NuvemTrovoes} accessibilityLabel="nuvem com trovões" style={estilos.nuvem}/> 
        <Text style={estilos.titulo}>
            Descubra o Clima na sua Cidade
        </Text>

        <Text style={estilos.legenda}>
            com o FindWeather nunca ficou tão fácil a previsão do tempo na palma da sua mão
        </Text>
        <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate("TabRoutes")}>
            <Text style={estilos.botaoEntrar}>Entrar</Text>
        </TouchableOpacity>
    </ScrollView>
}

const estilos =StyleSheet.create({
    body:{
        backgroundColor: '#1B1D22',
    },
    nuvem:{
        alignSelf: 'center',
        marginTop: 137,
    },
    titulo:{
        width: 304,
        marginTop: 22,
        fontSize: 33,
        lineHeight: 41,
        color: "#fff",
        textAlign: "center",
        alignSelf: 'center'
    },
    legenda:{
        width: 304,
        marginTop: 22,
        fontSize: 22,
        lineHeight: 27,
        color: "#fff",
        textAlign: "center",
        alignSelf: 'center'
    },
    botaoEntrar:{
        color: "#fff",
        textAlign: "center",
        
    },
    botao:{
        marginTop: 40,
        borderWidth:1,
        marginHorizontal: 22,
        padding: 10,
        borderRadius: 16,
        backgroundColor: "#23262B",
        borderColor: "#838384",
    }
})