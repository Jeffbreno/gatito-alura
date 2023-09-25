import React from "react";
import { Text, TouchableOpacity, Pressable } from "react-native";
import funcaoEstilosPadrao from "./estilos";

export default function Botao({ pequeno = false, invertido = false, valor, acao, estilos }) {
  const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);
  return (
    // <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
    //   <Text style={estilosPadrao.valor}>{valor}</Text>
    // </TouchableOpacity>
    <Pressable onPress={acao} style={({ pressed }) => [estilosPadrao.botao, estilos, pressed && { opacity: 0.5 }]}>
      {({ pressed }) => <Text style={[estilosPadrao.valor, pressed && { fontWeight: "bold" }]}>{valor}</Text>}
    </Pressable>
  );
}
