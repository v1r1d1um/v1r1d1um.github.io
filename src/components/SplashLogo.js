import React from "react";
import styled from "styled-components";

const Wrapper = styled.pre`
  font-size: min(1.18vw, 1.18em);
  font-weight: bolder;
  color: #fff;

  @keyframes slideWelcome {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  -webkit-animation: slideWelcome 800ms linear 1;
  animation: slideWelcome 800ms linear 1;
`;
const logo = `@@@@     @@@@@    %@@@ ,@@@@@@@@@@@@( @@@@          %@@@@@@@@@@@@, @@@@@@@@@@@@@@@@# @@@@@@#      @@@@@@# @@@@@@@@@@@@@
 @@@@   @@@&@@@  %@@@  @@@@@@@@@@@@@  @@@@          @@@@           @@@,         @@@@ @@@ %@@@   %@@@ @@@@ @@@@@@@@@@@@@
  @@@@ @@@# @@@.#@@@   @@@@/////////  @@@@          @@@@           @@@,         @@@@ @@@   @@@ @@@#  @@@@ @@@@/////////
   @@@@@@@   @@@@@@     @@@@@@@@@@@@@ (@@@@@@@@@@@@ .@@@@@@@@@@@@, @@@@@@@@@@@@@@@@, @@@    @@@@@    @@@@ &@@@@@@@@@@@@




           @@@@@@             @@@@@&  #@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@             
           @@@@@@             @@@@@&  %@@@@@,                   @@@@@@                                @@@@(            
           @@@@@@             @@@@@&  %@@@@@@&&&&&&&&&&&&&&,    @@@@@&&&&&&&&&&&&&&&  ,,,,,,,,,,,,,,,,@@@@(            
           @@@@@@             @@@@@&   @@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@&            
           @@@@@@            @@@@@&                     ,@@@@@  @@@@@                 @@@@       ,@@@@@                
            @@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@&  @@@@         @@@@@@              
             (@@@@@@@@@@@@@@@@@@@,     @@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@&  @@@@           @@@@@@            `;

export const SplashLogo = () => (
  <Wrapper>
    <section id="page-title" className="spacer p-top-xl">
      <div
        className="wrapper spacer p-top-lg"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className="title spacer p-top-xl" style={{ textAlign: "center" }}>
          {logo}
        </div>
      </div>
    </section>
  </Wrapper>
);
