import React from "react";
import Typewriter from "typewriter-effect";

export const SystemConsole4 = ({ onDone = () => {} }) => (
  <section className="spacer m-left-xs m-right-xs p-top-lg">
    <div
      className="wrapper typewriter-wrapper"
      id="typewriter-wrapper"
    >
      <Typewriter
        options={{
          loop: false,
        }}
        onInit={(typewriter) => {
          typewriter
            .changeDelay(1)
            .pauseFor(800)
            .typeString(`Rebooting...`)
            .pauseFor(2600)
            .callFunction((el) => {
              el.elements.container.childNodes[0].innerText = "";
            })
            .typeString(
              `<span class="TrZ">CRITICAL SYSTEM MALFUNCTION.<br />Assitance requested.</span>`
            )
            .pauseFor(800)
            .callFunction((el) => {
              el.elements.container.childNodes[0].innerText = "";
            })
            .typeString(
              `<span class="HjA">Instructions:<br/>Please reconstruct identity</span>`
            )
            .pauseFor(2600)
            .callFunction((el) => {
              el.elements.container.childNodes[0].innerText = "";
            })
            .typeString(`<span class="uaV">Accessing construct...</span>`)
            .pauseFor(800)
            .callFunction((el) => {
              el.elements.container.childNodes[0].innerText = "";
            })
            .typeString(
              `<span class="uaV">Loading Graphical User Interface...</span>`
            )
            .pauseFor(800)
            .callFunction((el) => {
              document
                .getElementsByClassName("Typewriter__cursor")[0]
                .classList.add("hidden-cursor");
            })
            .pauseFor(800)
            .callFunction(() => {
              onDone();
            })
            .start();
        }}
      />
    </div>
  </section>
);
