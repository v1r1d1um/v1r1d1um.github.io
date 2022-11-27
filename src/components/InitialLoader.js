import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @keyframes fadeAscii {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeAscii 300ms ease-in-out 1;
`;

export const InitialLoader = () => (
  <Wrapper>
    <section id="page-title" className="spacer p-top-lg">
      <div className="wrapper spacer p-top-xl">
        <div className="title spacer p-top-lg m-left-xl m-right-xl">
          <img
            src="assets/img/rh/initial-loader.svg"
            alt="Something is Happening"
          />
        </div>
      </div>
    </section>
  </Wrapper>
);
