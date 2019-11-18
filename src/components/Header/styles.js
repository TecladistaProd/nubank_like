import { Animated } from "react-native";

import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  align-items: center;
  padding: 40px 0 30px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`;

export const ArrowButtonContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const ArrowButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const AnimatedIcon = Animated.createAnimatedComponent(MaterialIcons);

export const Icon = styled(AnimatedIcon)``;
