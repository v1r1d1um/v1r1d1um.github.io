import React from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { v4 as uuidv4 } from "uuid";

const BINARY = Array.from(Array(100)).map(() =>
  !!(Math.random() < 0.5) ? 0 : 1
);

export const BinarySwirl = () => (
  <div
    className="binary-wrapper"
    style={{ height: "100vh", paddingLeft: "50%" }}
  >
    {/* <Marquee
          velocity={100}
          minScale={100}
          resetAfterTries={200}
          scatterRandomly
        > */}
    {BINARY.map((id) => {
      const yumKey = uuidv4.v4().replace(/-/g, "");
      return (
        <Motion
          key={`child-${yumKey.slice(yumKey.length - 8)}`}
          initDeg={randomIntFromInterval(0, 360)}
          direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
          velocity={10}
          radius={10}
        >
          <div
            style={{
              color: "#fff",
              fontSize: "150%",
              width: "160px",
              height: "160px",
              textAlign: "center",
              lineHeight: "50px",
            }}
          >
            {id}
          </div>
        </Motion>
      );
    })}
    {/* </Marquee> */}
  </div>
);
