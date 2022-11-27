import React, { useEffect } from "react";
import styled from "styled-components";

const Text = styled.p`
  text-align: center;
  font-size: 80%;
  padding: auto;
  .second-line {
    color: #afafaf;
  }
`;

export const AsciiHeart = () => (
  <section id="page-title" className="spacer p-top-lg">
    <div className="wrapper spacer p-top-xl">
      <div className="title spacer p-top-lg m-left-xl m-right-xl">
        <img src="assets/img/rh/ascii-heart.svg" alt="ASCII Heart" />
      </div>
      <Text className="spacer p-top-md">
        <span className="first-line">heart terminal 3.1.3</span>
        <br />
        <span className="second-line">source v1.8</span>
      </Text>
    </div>
  </section>
);
