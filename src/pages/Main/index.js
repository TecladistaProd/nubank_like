import React, { useState } from "react";

import { Animated } from "react-native";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Card from "../../components/Card";
import Menu from "../../components/Menu";

import positionContext from "../../context/position";

import { Container, Content } from "./styles";

import tabs from "./tabs";

function Main() {
  const translateY = new Animated.Value(0);

  return (
    <Container>
      <positionContext.Provider value={{ translateY }}>
        <Header />
        <Content>
          <Menu />
          <Card />
        </Content>
        <Tabs tabs={tabs} />
      </positionContext.Provider>
    </Container>
  );
}

export default Main;
