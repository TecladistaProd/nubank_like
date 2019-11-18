import React, { useContext } from "react";

import { MaterialIcons as Icon } from "@expo/vector-icons";

import { Container, TabsContainer, TabItem, TabText } from "./styles";

import positionContext from "../../context/position";

function Tabs({ tabs }) {
  const ctx = useContext(positionContext);

  return (
    <Container
      style={{
        transform: [
          {
            translateY: ctx.translateY.interpolate({
              inputRange: [0, 370],
              outputRange: [0, 30],
              extrapolate: "clamp"
            })
          }
        ],
        opacity: ctx.translateY.interpolate({
          inputRange: [0, 370],
          outputRange: [1, 0.3],
          extrapolate: "clamp"
        })
      }}
    >
      <TabsContainer>
        {tabs.map(({ tabIcon: icon, tabText: text }, k) => (
          <TabItem key={k}>
            <Icon name={icon} size={24} color="#fff" />
            <TabText>{text}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  );
}

export default Tabs;
