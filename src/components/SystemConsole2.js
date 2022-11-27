import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

import { ArrowLoader } from "./ArrowLoader";

const Frames = styled.div`
  position: relative;
  left: 1px;
  top: -238px;
`;

export const SystemConsole2 = ({ onDone = () => {} }) => {
  const [showFrames, setShowFrames] = useState(false);
  return (
    <section className="spacer m-left-xs m-right-xs p-top-lg">
      <div
        className="wrapper typewriter-wrapper sys-console-2"
        id="typewriter-wrapper"
      >
        <Typewriter
          options={{
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(5)
              .typeString(`<span class="jU1 uaV">CRITICAL ERROR.</span>`)
              .pauseFor(800)
              .typeString(
                `<br/><span class="uaV rPi">409 Process Terminated.</span>`
              )
              .pauseFor(150)
              .callFunction(() => {
                document
                  .getElementsByClassName("Typewriter__cursor")[0]
                  .classList.add("hidden-cursor");
              })

              .changeDelay(1)
              .pasteString(`<br/><br/><br/>`)

              .typeString(`<span class="tTi"> ̴̺̈́̎̈́ ̷͚̅̎̂ ̷͕̗̚ͅ ̸̨͈̰͊̌̋̂</span>`)

              .pasteString(`<span class="tTi"> ̴̛̲̰̙̪̿ ̴̜̮̾̀ ̴̢̤̗͓̅̿͌ ̵̳͉̮́̔̈͜</span>`)

              .pasteString(`<span class="tTi"> ̷̮̽̑̀ ̸̢̼͕̀̽͌̿͜ ̸̤͉͍̻̍̾ ̵͈́ ̶̮̆͠</span>`)

              .pasteString(`<span class="tTi"> ̸͎̖̊ ̴͖̦͖̎ ̶̥̫̩̘̊̚</span>`)

              .pasteString(`<span class="tTi"> ̷̨̥͓̩̈́<br/> ̶͚̠̩̆͝ ̸̱̬̓̇͊͑</span>`)

              .pasteString(`<span class="tTi"> ̷͍̄̾̔ ̶͉̫̾͌ ̸̗̑̂̋̄ ̶̣͆</span>`)

              .pasteString(`<span class="tTi"> ̷̞̔̔͗ ̶͙̣͕̄̌̂̈́ ̵̖̜̯̬́̈́ ̵̫́́̈́͑͜</span>`)

              .pasteString(`<span class="tTi"> ̴̖͊̎̓ ̸̟̩̱̕ ̴͇̺̠̀̆ ̷͈̲̓͘ ̴̧̡̡̞̂̋̓͝ ̷͙͇̓͛</span><br/>`)

              // .pasteString(
              //   `<br/><span class="zLr" style="opacity: 0"></span>`
              // )
              // .callFunction(() => {
              //   setShowFrames(true);
              // })
              .pauseFor(1400)
              .typeString(`<span class="zLr">Data corrupted   <span class="monospace-loader-2"></span></span>`)
              .pauseFor(1400)
              .callFunction((el) => {
                onDone();
              })
              .start();
          }}
        />
        {showFrames ? (
          <Frames>
            <ArrowLoader></ArrowLoader>
          </Frames>
        ) : null}
      </div>
    </section>
  );
};
