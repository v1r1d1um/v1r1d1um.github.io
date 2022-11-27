import React, { Fragment } from "react";
import styled from "styled-components";

const Text = styled.p`
  text-align: center;
  font-size: 80%;
  padding: auto;
  .second-line {
    color: #afafaf;
  }

  @keyframes fadeBotText {
    0% {
      opacity: 0;
    }

    78% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  -webkit-animation: fadeBotText 2200ms ease-in-out 1;
  animation: fadeBots fadeBotText 2200ms ease-in-out 1;
`;

const Img = styled.img`
  margin: 0 -3em;

  @keyframes fadeBots {
    0% {
      opacity: 0;
      scale: 122%;
    }

    70% {
      opacity: 0;
      scale: 122%;
    }

    90% {
      opacity: 0.7;
      scale: 100%;
    }

    100% {
      opacity: 1;
      scale: 100%;
    }
  }

  -webkit-animation: fadeBots 1600ms ease-in-out 1;
  animation: fadeBots 1600ms ease-in-out 1;
`;

export const BeginBots = ({ onDone = () => {} }) => (
  <Fragment>
    <section className="spacer p-top-xl" style={{ minHeight: "60vh" }}>
      <div className="spacer p-top-lg">
        <div className="title">
          <Img
            style={{ margin: "0 -3em" }}
            src="assets/img/rh/bot-lineup.svg"
            alt="ASCII Heart"
          ></Img>
        </div>
        <Text className="spacer p-top-md">
          <span className="first-line">
            bot constructor
            <br />
            3.1.3
          </span>
          <br />
          <span className="second-line">source v1.8</span>
        </Text>
      </div>
    </section>
  </Fragment>
);
