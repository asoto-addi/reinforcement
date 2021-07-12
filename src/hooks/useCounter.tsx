import { useState } from "react";

export const useCounter = (initial: number = 10) => {
  const [counter, setCounter] = useState(initial);

  const change = (number: number) => {
    setCounter(counter + number);
  };

  return {
    counter,
    change,
  };
};
