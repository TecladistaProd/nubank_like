import React, { useCallback, useContext } from "react";

import { Animated } from "react-native";

import { PanGestureHandler, State } from "react-native-gesture-handler";

import { MaterialIcons as Icon } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Description,
  Content,
  Footer,
  Annotation
} from "./styles";

import moneyTransform from "../../helpers/moneyTransform";

import positionContext from "../../context/position";

function Card() {
  let offset = 0;
  const ctx = useContext(positionContext);

  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: ctx.translateY
        }
      }
    ],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = useCallback(event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;
      let opened = false;

      offset += translationY;

      if (translationY >= 110) {
        opened = true;
      } else {
        ctx.translateY.setOffset(0);
        ctx.translateY.setValue(offset);
        offset = 0;
      }

      Animated.timing(ctx.translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0;

        ctx.translateY.setOffset(offset);
        ctx.translateY.setValue(0);
      });

      // ctx.translateY.setOffset(offset);
      // ctx.translateY.setValue(0);
    }
  });

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Container
        style={{
          transform: [
            {
              translateY: ctx.translateY.interpolate({
                inputRange: [-200, 0, 390],
                outputRange: [-50, 0, 390],
                extrapolate: "clamp"
              })
            }
          ]
        }}
      >
        <Header>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </Header>
        <Content>
          <Title>Saldo Disponível</Title>
          <Description>
            {moneyTransform(347221090.27, { type: ".", currency: "R$" })}
          </Description>
        </Content>
        <Footer>
          <Annotation>
            {`Transferência de ${moneyTransform(20, {
              type: ".",
              currency: "R$"
            })} recebida de Diego Shell Fernandes hoje as 09:00h`}
          </Annotation>
        </Footer>
      </Container>
    </PanGestureHandler>
  );
}

export default Card;
