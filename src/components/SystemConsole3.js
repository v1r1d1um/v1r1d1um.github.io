import React from "react";
import Typewriter from "typewriter-effect";
import { OverlayRed1 } from "./Overlays";

export const SystemConsole3 = ({ onDone = () => {} }) => {
  return (
    <>
      <OverlayRed1></OverlayRed1>
      <section className="spacer m-left-xs m-right-xs p-top-lg">
        <div className="wrapper typewriter-wrapper" id="typewriter-wrapper">
          <Typewriter
            options={{
              loop: false,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .callFunction((el) => {
                  el.elements.cursor.classList.add("hidden-cursor");
                })
                .changeDelay(1)
                .pasteString(
                  `<span class="jBA">ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR </span>`
                )
                .pauseFor(150)
                .pasteString(
                  `<span class="jBA">ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR </span>`
                )
                .pauseFor(120)
                .pasteString(
                  `<span class="jBA">ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR </span>`
                )
                .pauseFor(80)
                .pasteString(
                  `<span class="jBA">ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR </span>`
                )
                .pauseFor(30)
                .pasteString(
                  `<span class="jBA">ERROR ERROR ERROR<br />
                ERROR ERROR ERROR ERROR ERROR<br />
                ERROR ERROR ERROR</span>`
                )
                .callFunction((el) => {
                  // el.elements.container.childNodes[0].innerText = "";
                  document
                    .getElementsByClassName("Typewriter__cursor")[0]
                    .classList.add("hidden-cursor");

                  const redThing = document.createElement("div");
                  redThing.className = "red-thing scaled red-thing-1";
                  redThing.id = "red-thing-1";
                  document.getElementById("main").appendChild(redThing);
                })
                .pauseFor(200)
                .callFunction(() => {
                  const redThing = document.createElement("div");
                  redThing.className = "red-thing scaled red-thing-2";
                  redThing.id = "red-thing-2";
                  document.getElementById("main").appendChild(redThing);
                })
                .pauseFor(150)
                .callFunction(() => {
                  const redThing = document.createElement("div");
                  redThing.className = "red-thing scaled red-thing-3";
                  redThing.id = "red-thing-3";
                  document.getElementById("main").appendChild(redThing);
                })
                .pauseFor(100)
                .callFunction(() => {
                  const redThing = document.createElement("div");
                  redThing.className = "red-thing scaled yellow-thing-1";
                  redThing.id = "yellow-thing-1";
                  document.getElementById("main").appendChild(redThing);
                })
                .pauseFor(200)
                .callFunction(() => {
                  const redThing = document.createElement("div");
                  redThing.className = "red-thing scaled red-thing-4";
                  redThing.id = "red-thing-4";
                  document.getElementById("main").appendChild(redThing);
                })
                .pauseFor(100)
                .callFunction(() => {
                  const redThing = document.createElement("div");
                  redThing.className = "red-thing scaled red-thing-5";
                  redThing.id = "red-thing-5";
                  document.getElementById("main").appendChild(redThing);
                })
                .pauseFor(1700)
                .callFunction(() => {
                  const one = document.getElementById("red-thing-1");
                  const two = document.getElementById("red-thing-2");
                  const three = document.getElementById("red-thing-3");
                  const four = document.getElementById("red-thing-4");
                  const five = document.getElementById("red-thing-5");
                  const six = document.getElementById("yellow-thing-1");
                  one.remove();
                  two.remove();
                  three.remove();
                  four.remove();
                  five.remove();
                  six.remove();
                  onDone();
                })
                .start();
            }}
          />
        </div>
      </section>
    </>
  );
};
