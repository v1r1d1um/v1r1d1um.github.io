import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import { SystemFooter } from "../components/SystemFooter";

const TypewriterWrapper = styled.div`
  min-height: 64px;

  .Typewriter__cursor {
    line-height: 32px;
  }
`;

const HomeWrapper = styled.div`
  @keyframes fadeHome {
    0% {
      background: green;
    }
    100% {
      background: none;
    }
  }

  position: fixed;
  height: 100%;
  width: 100%;
  animation: fadeHome 350ms ease-in-out 1;
`;

const Home = () => {
  const history = useHistory();
  return (
    <HomeWrapper>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>home | heart terminal</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </MetaTags>

      <main
        id="main"
        className="triangles site-main"
        style={{ paddingTop: "0", paddingBottom: "0" }}
      >
        <div className="page-content spacer p-top-lg">
          <div className="wrapper">
            <div className="content">
              <div className="clearfix">
                <TypewriterWrapper>
                  <Typewriter
                    options={{
                      loop: false,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(15)
                        .typeString(
                          `<span class="HjP">User identity<br/>confirmed.</span>`
                        )
                        .pauseFor(1200)
                        .callFunction(() => {
                          history.push("/rsvp");
                        })
                        .start();
                    }}
                  />
                </TypewriterWrapper>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SystemFooter></SystemFooter>
    </HomeWrapper>
  );
};

export default Home;
