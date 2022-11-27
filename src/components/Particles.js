import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";

import { loadFull } from "tsparticles";

const Wrapper = styled.div`
  @keyframes move {
    0% {
      opacity: 1;
      scale: 120%;
    }
    
    60% {
      opacity: 1;
      scale: 100%;
    }

    65% {
      scale: 120%;
      opacity: .6;
    }

    75% {
      opacity: 0;
    }

    85% {
      scale: 200%;
    }

    100% {
      opacity: 0;
      scale: 200%;
    }
  }

  -webkit-animation: move 8.5s 1 ease-out;
  animation: move 8.5s 1 ease-out;
  width: 100vw;
  height: 100vh;
`;

const Overlay = styled.div`
  @keyframes fade {
    0% {
      background: red;
    }

    12% {
      background: none;
    }

    100% {
      background: none;
    }
  }

  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: red;
  z-index: 999;
  -webkit-animation: fade 8.5s 1 ease-out;
  animation: fade 8.5s 1 ease-out;
`;

export const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Wrapper>
      <Overlay></Overlay>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 30,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 10,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              value: {
                r: 0,
                g: 0,
                b: 0,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "#fff",
            image: "url('../assets/img/rh/binary.png')",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </Wrapper>
  );
};
