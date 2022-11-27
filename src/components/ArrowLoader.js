import React, { useEffect, useState } from "react";

const frames = ["◤", "◥", "◢", "◣"];

export const ArrowLoader = () => {
  const [flop, setFlop] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      flop === frames.length - 1 ? setFlop(0) : setFlop(flop + 1);
    }, 80);
  }, [flop]);

  return <React.Fragment>{frames[flop]}</React.Fragment>;
};
