// import { set } from "browser-cookies";
import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";

import { LoginComponent } from "../blocks/auth/Login";
import { AsciiHeart } from "../components/AsciiHeart";
import { BinaryScroll } from "../components/BinaryScroll";
import { BeginBots } from "../components/BeginBots";
import { CubeLoader } from "../components/CubeLoader";
import {
  OverlayRed1,
  OverlayRed2,
  OverlayWhite1,
} from "../components/Overlays";
import { SplashLogo } from "../components/SplashLogo";
import { SysString } from "../components/SysString";
import { SystemConsole1 } from "../components/SystemConsole1";
import { SystemConsole2 } from "../components/SystemConsole2";
import { SystemConsole3 } from "../components/SystemConsole3";
import { SystemConsole4 } from "../components/SystemConsole4";
import { SystemFooter } from "../components/SystemFooter";

const INITIAL_LOADER_DURATION = 3000;
const ASCII_HEART_DURATION = 3000;
const WELCOME_DURATION = 4000;
const BINARY_DURATION = 5000;
const CUBE_LOADER_DURATION = 1300;

export const AnonymousPage = ({ onLogin }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFooter, setShowFooter] = useState(false);
  const [fadeFooter, setFadeFooter] = useState(false);
  const [fadeFooterSlow, setFadeFooterSlow] = useState(false);
  const [pulseFooter, setPulseFooter] = useState(false);

  useEffect(() => {
    if (currentStep === 0) {
      // cube loader
      setTimeout(() => {
        setCurrentStep(1);
      }, INITIAL_LOADER_DURATION);
    } else if (currentStep === 1) {
      // ascii heart
      setTimeout(() => {
        setCurrentStep(2);
      }, ASCII_HEART_DURATION);
    } else if (currentStep === 2) {
      // welcome user
      setShowFooter(true);
      setFadeFooterSlow(true);
      setTimeout(() => {
        setCurrentStep(3);
      }, WELCOME_DURATION);
    } else if (currentStep === 3) {
      // sys console 1
      setFadeFooterSlow(false);
      setTimeout(() => {
        setCurrentStep(3);
      }, WELCOME_DURATION);
    } else if (currentStep === 4) {
      // sys rapid code output
    } else if (currentStep === 5) {
      // sys console 2
    } else if (currentStep === 6) {
      // binary scroll
      setShowFooter(false);
      setTimeout(() => {
        setCurrentStep(7);
      }, BINARY_DURATION);
    } else if (currentStep === 7) {
      // sys console 3
    } else if (currentStep === 8) {
      // sys console 4
      setPulseFooter(true);
      setShowFooter(true);
    } else if (currentStep === 9) {
      // cube loader
      setPulseFooter(false);
      setShowFooter(false);
      setTimeout(() => {
        setCurrentStep(10);
      }, CUBE_LOADER_DURATION);
    } else if (currentStep === 10) {
      // hombre bots welcome
    } else if (currentStep === 11) {
      // login
      setShowFooter(true);
    }
  }, [currentStep]);

  return (
    <div
      className={
        [10].includes(currentStep)
          ? "fade-home-1"
          : [11].includes(currentStep)
          ? "fade-home-2"
          : ""
      }
    >
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>login | heart terminal</title>

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
      <div className={[10].includes(currentStep) ? "hombre-triangles " : ""}>
        <main
          id="main"
          className={(currentStep >= 10 ? "triangles " : "") + "site-main"}
          style={{ paddingTop: "0", paddingBottom: "0" }}
        >
          {currentStep === 0 ? (
            <CubeLoader></CubeLoader>
          ) : currentStep === 1 ? (
            <AsciiHeart></AsciiHeart>
          ) : currentStep === 2 ? (
            <SplashLogo></SplashLogo>
          ) : currentStep === 3 ? (
            <SystemConsole1 onDone={() => setCurrentStep(4)}></SystemConsole1>
          ) : currentStep === 4 ? (
            <SysString onDone={() => setCurrentStep(5)}></SysString>
          ) : currentStep === 5 ? (
            <SystemConsole2 onDone={() => setCurrentStep(6)}></SystemConsole2>
          ) : currentStep === 6 ? (
            <>
              <OverlayWhite1></OverlayWhite1>
              <BinaryScroll></BinaryScroll>
            </>
          ) : currentStep === 7 ? (
            <SystemConsole3 onDone={() => setCurrentStep(8)}></SystemConsole3>
          ) : currentStep === 8 ? (
            <>
              <OverlayRed2></OverlayRed2>
              <SystemConsole4 onDone={() => setCurrentStep(9)}></SystemConsole4>
            </>
          ) : currentStep === 9 ? (
            <CubeLoader></CubeLoader>
          ) : currentStep === 10 ? (
            <div>
              <div className="page-content spacer p-top-lg">
                <div className="wrapper">
                  <div className="content">
                    <div className="clearfix">
                      <BeginBots />
                      <div className="wrapper bot-button">
                        <form
                          onSubmit={() => setCurrentStep(11)}
                          id="cf-1"
                          className="contact-form login-form"
                        >
                          <div className="form-group form-group-lg mb-0r">
                            <div
                              className="form-group form-group-lg mb-0"
                              style={{ textAlign: "center" }}
                            >
                              <button
                                type="submit"
                                className="btn btn-outline-primary text-uppercase"
                                style={{
                                  minHeight: "82px",
                                  minWidth: "256px",
                                  fontSize: "21px",
                                  background:
                                    "linear-gradient(112.89deg, #FF3737 -69.3%, #033B63 -48.67%, #00FFE6 -20.74%, #A5F169 16.05%, #DABC7A 29.64%, #FFAE84 46.87%, #B8607D 66.88%, #29354A 87.64%, #9B5D82 109%, #1A6E5A 127.52%, #E5D185 134.97%, #FEA876 148.02%, #FEA876 168.31%",
                                }}
                              >
                                Begin
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="page-content spacer p-top-lg">
              <div className="wrapper">
                <div className="content">
                  <div className="clearfix">
                    <LoginComponent onLogin={onLogin} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      {showFooter ? (
        <SystemFooter
          fadeFooter={fadeFooter}
          fadeFooterSlow={fadeFooterSlow}
          pulseFooter={pulseFooter}
        ></SystemFooter>
      ) : null}
    </div>
  );
};

export default AnonymousPage;
