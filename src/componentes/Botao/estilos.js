import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default (pequeno, invertido) => StyleSheet.create({
  botao: {
    width: 140,
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: invertido ? cores.laranja : cores.roxo,
    // MODO ANTIGO {
      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.23,
      // shadowRadius: 2.62,
    // }
    // MODO NOVO {
      // Configurar estilo no box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [cor];
      // 1. Horizontal offset: Define o deslocamento horizontal da sombra em relação ao elemento. Um valor positivo move a sombra para a direita, e um valor negativo move a sombra para a esquerda.

      // 2. Vertical offset: Define o deslocamento vertical da sombra em relação ao elemento. Um valor positivo move a sombra para baixo, e um valor negativo move a sombra para cima.

      // 3. Blur radius: Define o desfoque da sombra. Quanto maior o valor, mais borrada será a sombra. Um valor de 0 significa que a sombra é nítida.

      // 4. Spread radius (opcional): Define a expansão ou contração da sombra. Um valor positivo aumenta o tamanho da sombra, e um valor negativo diminui o tamanho.

      // 5. Cor: Define a cor da sombra.
    // }
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.23), 0px 2px 4px rgba(0, 0, 0, 0.23)",
    elevation: 4,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: invertido ? cores.roxo : cores.laranja,
  }
});
