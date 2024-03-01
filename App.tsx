import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import Navigation from "./src/routes/navigation/navigation";

function App() {
  return (
    <SafeAreaView style={estilos.body}>
      <Navigation />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
  },
})

export default App;
