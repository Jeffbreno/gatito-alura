import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default (pequeno, invertido) => StyleSheet.create({
  botao: {
    width: 140,
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: invertido ? cores.laranja : cores.roxo,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.23), 0px 2px 4px rgba(0, 0, 0, 0.23)",
    elevation: 4,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: invertido ? cores.roxo : cores.laranja,
  }
});
