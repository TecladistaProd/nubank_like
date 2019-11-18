import { createContext } from "react";

const positionContext = createContext({
  translateY: 0
  // opened: false,
  // setOpened: () => null
});

export default positionContext;
