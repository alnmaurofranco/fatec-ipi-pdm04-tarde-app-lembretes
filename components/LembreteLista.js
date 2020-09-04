import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import LembreteItem from "./LembreteItem";

const LembreteLista = (props) => {
  //const [lembretes, setLembretes] = useState([]);
  const removerLembrete = (keyASerRemovida) => {
    props.setLembretes((lembretes) => {
      return lembretes.filter((lembrete) => {
        return lembrete.key !== keyASerRemovida;
      });
    });
  };

  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={(lembrete) => (
          <LembreteItem
            chave={lembrete.item.key}
            lembrete={lembrete.item.value}
            onDelete={removerLembrete}
          />
        )}
      />
    </View>
  );
};

export default LembreteLista;
