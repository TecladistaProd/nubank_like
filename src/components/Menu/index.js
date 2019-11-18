import React, { useContext } from "react";

import QRCode from "react-native-qrcode";

import { MaterialIcons as Icon } from "@expo/vector-icons";

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from "./styles";

import positionContext from "../../context/position";

function Menu() {
  const ctx = useContext(positionContext);

  return (
    <Container
      style={{
        opacity: ctx.translateY.interpolate({
          inputRange: [0, 170],
          outputRange: [0, 1]
        })
      }}
    >
      <Code>
        <QRCode
          value="https://tecladistaprod.github.io"
          size={80}
          bgColor="#8b10ae"
          fgColor="#fff"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => null}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

export default Menu;
