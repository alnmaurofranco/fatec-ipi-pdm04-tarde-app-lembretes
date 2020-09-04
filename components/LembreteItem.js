import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const LembreteItem = (props) => {
  return (
    //poderia ser: <TouchableOpacity onPress={() => props.onDelete(props.chave)} >
    <TouchableOpacity
      onLongPress={props.onDelete.bind(this, props.chave)}
      underlayColor="blue"
    >
      <View style={estilos.button}>
        <Text style={estilos.buttonText}>{props.lembrete}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
});

export default LembreteItem;
