import React from "react";
import Typewriter from "typewriter-effect";

export const SystemConsole1 = ({ onDone = () => {} }) => {
  const text = [
    "Searching...",
    "Source located...",
    "Connecting to network...",
    "Access requested...",
  ];
  return (
    <section className="spacer m-left-xs m-right-xs p-top-lg">
      <div className="wrapper typewriter-wrapper" id="typewriter-wrapper">
        <Typewriter
          options={{
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter.typeString("").pauseFor(1400);
            text.forEach((str) => {
              typewriter
                .changeDelay(15)
                .typeString(str)
                .pauseFor(1400)
                .callFunction((el) => {
                  el.elements.container.childNodes[0].innerText = "";
                });
            });
            typewriter
              .typeString("Downloading...")
              .callFunction(() => {
                document
                  .getElementsByClassName("Typewriter__cursor")[0]
                  .classList.add("hidden-cursor");
              })
              .pasteString(`   <span class="monospace-loader"></span>`)
              .pauseFor(1400)
              .callFunction(() => {
                document
                  .getElementsByClassName("Typewriter__cursor")[0]
                  .classList.remove("hidden-cursor");
              })
              .callFunction(async (el) => {
                document.getElementById("typewriter-wrapper").style.marginLeft =
                  "20%";
                el.elements.container.childNodes[0].innerText = "";
                onDone();
              })
              .start();
          }}
        />
      </div>
    </section>
  );
};
