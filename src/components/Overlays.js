import styled from "styled-components";

export const OverlayRed1 = styled.div`
  @keyframes fade1 {
    0% {
      background: red;
    }

    8% {
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
  background: #000;
  z-index: 999;
  -webkit-animation: fade1 8.5s 1 ease-out;
  animation: fade1 8.5s 1 ease-out;
`;

export const OverlayRed2 = styled.div`
  @keyframes fade2 {
    0% {
      background: red;
    }

    8% {
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
  background: none;
  z-index: 999;
  -webkit-animation: fade2 8.5s 1 ease-out;
  animation: fade2 8.5s 1 ease-out;
`;

export const OverlayWhite1 = styled.div`
  @keyframes fade3 {
    0% {
      background: #fff;
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
  background: none;
  z-index: 999;
  -webkit-animation: fade3 8.5s 1 ease-out;
  animation: fade3 8.5s 1 ease-out;
`;
