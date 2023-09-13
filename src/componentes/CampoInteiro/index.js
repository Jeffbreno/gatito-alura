import React from "react";
import { TextInput } from "react-native";

export default function CampoInteiro({valor}) {
  return <TextInput keyboardType="number-pad" selectTextOnFocus value={valor} />;
}
