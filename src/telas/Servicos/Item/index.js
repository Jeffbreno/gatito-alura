import React, { useState } from "react";
import { Text } from "react-native";

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco);
  const [expandir, setExpandir] = useState(false);

  return (
    <>
      <Text>{nome}</Text>
      <Text>{preco}</Text>
      <Text>{descricao}</Text>
    </>
  );
}
