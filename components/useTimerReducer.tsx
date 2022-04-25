import { useReducer } from "react";

export const useTimerReducer = () => {
  const [state, dispatch] = useReducer();
};

/**
 * start
 * pause
 * resume
 * cancel
 * repeat
 */
