import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Raining from "../../img/raining.png"
import { FlatList } from "react-native-gesture-handler";

export default function Home() {
    return (
        <View>
            <Text> Nome do local</Text>
            <Image source={Raining} accessibilityLabel="Chuva" />
            <Text>Temperatura maxima e minima</Text>
            <Text>chuva moderada</Text>
            <View>
                <Image source={""} />
                <Text>Umidade</Text>
                <Image source={""} />
                <Text>Veloc.Vento</Text>
                <Image source={""} />
                <Text>Chuva</Text>
            </View>
            <Text>Hoje</Text>
            <Text>Proximos 5 dias </Text>
            <FlatList>
                
            </FlatList>
        </View>
    )
}