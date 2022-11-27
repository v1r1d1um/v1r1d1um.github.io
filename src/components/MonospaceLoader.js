import React, { useEffect, useState } from "react";

export const MonospaceLoader = () => {
  const [flop, setFlop] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setFlop(!flop);
    }, 200);
  }, [flop]);

  return <React.Fragment>{flop ? "▚" : "▞"}</React.Fragment>;
};
