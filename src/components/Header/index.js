import React, { useContext, useCallback } from "react";

import { Animated } from "react-native";

import {
  Container,
  Top,
  Logo,
  Title,
  ArrowButton,
  Icon,
  ArrowButtonContainer
} from "./styles";

import logoSrc from "../../../assets/Nubank_Logo.png";

import positionContext from "../../context/position";

function Header() {
  const ctx = useContext(positionContext);

  const handleMenu = useCallback(() => {
    let opened = false;

    if (parseInt(JSON.stringify(ctx.translateY)) > 350) {
      opened = true;
      ctx.translateY.setOffset(0);
      ctx.translateY.setValue(390);
    }

    Animated.timing(ctx.translateY, {
      toValue: opened ? 0 : 380,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
      ctx.translateY.setOffset(opened ? 0 : 380);
      ctx.translateY.setValue(0);
    });
  });

  return (
    <Container>
      <Top>
        <Logo source={logoSrc} />
        <Title>Vitor</Title>
      </Top>
      <ArrowButton onPress={handleMenu}>
        <ArrowButtonContainer
          style={{
            opacity: ctx.translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 1],
              extrapolate: "clamp"
            })
          }}
        >
          <Icon name="keyboard-arrow-up" size={20} color="#fff" />
        </ArrowButtonContainer>
        <ArrowButtonContainer
          style={{
            opacity: ctx.translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [1, 0],
              extrapolate: "clamp"
            })
          }}
        >
          <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </ArrowButtonContainer>
      </ArrowButton>
    </Container>
  );
}

export default Header;
