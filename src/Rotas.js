import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Servicos from "./telas/Servicos";
import Carrinho from "./telas/Carrinho";

import { cores } from "./estilos";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: cores.roxo,
          tabBarInactiveTintColor: cores.claro,
          tabBarActiveBackgroundColor: cores.roxo,
          tabBarInactiveBackgroundColor: cores.laranja,
          tabBarStyle:{
            // display: "flex",
            // flexDirection: "row",
            // justifyContent: "center",
            // alignItems: "center",
            height: 80
          },
          tabBarLabelStyle: {
            width: "100%",
            height: 80,
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 3,
            paddingTop: 21,
            lineHeight: 25,
            backgroundColor: cores.laranja,
          },
        })}>
        <Tab.Screen
          name="Serviços"
          component={Servicos}
          options={{
            tabBarIcon: () => {
              null;
            },
          }}
        />
        <Tab.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            tabBarIcon: () => {
              null;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
