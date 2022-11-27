import Lottie from "lottie-react";
import React from "react";
import styled from "styled-components";

import cubeLoader from "../data/explode-loader.json";

const Wrapper = styled.div`
  @keyframes fadeAscii4 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeAscii4 300ms ease-in-out 1;
`;

export const WaveLoader = () => (
  <Wrapper>
    <section id="page-title" className="spacer p-top-lg">
      <div className="wrapper spacer p-top-xl">
        <div className="title spacer p-top-sm m-left-xl m-right-xl">
          <Lottie animationData={cubeLoader} />
        </div>
      </div>
    </section>
  </Wrapper>
);
