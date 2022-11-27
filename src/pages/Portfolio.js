import Lottie from "lottie-react";
import React, { useCallback, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { useLongPress } from "use-long-press";
import explodeLoader from "../data/explode-loader.json";
import organicLoader from "../data/organic-loader.json";
import waveLoader from "../data/wave-loader.json";

import { Auth } from "../api/auth";
import { SystemFooter } from "../components/SystemFooter";
import { TosFooter } from "../components/TosFooter";

const FormWrapper = styled.div`
  @keyframes fadeItt {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  -webkit-animation: fadeItt 2000ms ease-in-out 1;
  animation: fadeItt 2000ms ease-in-out 1;
`;

const Form = styled.form`
  @keyframes fadeGenerateButton {
    0% {
      opacity: 0;
    }

    90% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  -webkit-animation: fadeGenerateButton 2600ms ease-in-out 1;
  animation: fadeGenerateButton 2600ms ease-in-out 1;
`;

const Form2 = styled.form`
  @keyframes fadeGenerateButton2 {
    0% {
      opacity: 0;
    }

    90% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  -webkit-animation: fadeGenerateButton2 1500ms ease-in-out 1;
  animation: fadeGenerateButton2 1500ms ease-in-out 1;
`;

const Form3 = styled.form`
  @keyframes fadeGenerateButton3 {
    0% {
      opacity: 0;
    }

    97% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  -webkit-animation: fadeGenerateButton3 6000ms ease-in-out 1;
  animation: fadeGenerateButton3 6000ms ease-in-out 1;
`;

const Attempts = styled.div`
  @keyframes fadeNumAttempts {
    0% {
      opacity: 0;
    }

    90% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  -webkit-animation: fadeNumAttempts 2000ms ease-in 1;
  animation: fadeNumAttempts 2000ms ease-in 1;
`;

const BotImg = styled.img``;

const BotImg2 = styled.img``;

const BotImg2Wrapper = styled.div``;

const CreditsFade = styled.span`
  @keyframes fadeCredits {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  -webkit-animation: fadeCredits 120ms ease-in 1;
  animation: fadeCredits 120ms ease-in 1;
`;

export const OverlayCredits = styled.div`
  line-height: 24px;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 999;
  overflow: scroll;
`;

const OrganicWrapper = styled.div``;

const Portfolio = () => {
  const [selectedToken, setSelectedToken] = useState();
  const [attemptsRemaining, setAttemptsRemaining] = useState();
  const [error, setError] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [apiErrorCritical, setApiErrorCritical] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentStep, setCurrentStep] = useState(
    Auth.read().tokenTransferred
      ? 4
      : Auth.read().claimedToken
      ? Auth.read().tokenTransferred
        ? 0
        : 3
      : 1
  );
  const [showWave, setShowWave] = useState(false);
  const [availableTokens, setAvailableTokens] = useState(Auth.read().tokens);
  const [email, setEmail] = useState(Auth.read().code);
  const [claimedToken, setClaimedToken] = useState(Auth.read().claimedToken);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState();
  const [disallowSubmit, setDisallowSubmit] = useState(false);
  const [disableConfirmButton, setDisableConfirmButton] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showCreditsOverlay, setShowCreditsOverlay] = useState(false);
  const [showTosOverlay, setShowTosOverlay] = useState(false);

  const handleTosClick = (e) => {
    e.preventDefault();
    setShowTosOverlay(true);
  };

  const handleHideTosOverlay = (e) => {
    e.preventDefault();
    setShowTosOverlay(false);
  };

  const handleShowCredits = (e) => {
    e.preventDefault();
    setShowCreditsOverlay(true);
  };

  const handleHideCredits = (e) => {
    e.preventDefault();
    setShowCreditsOverlay(false);
  };

  const setChosenTokenOnApi = async (token) => {
    try {
      const res = await fetch("https://basel-qncsltdssa-uc.a.run.app", {
        method: "POST",
        headers: {
          Authorization: email,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          claimedToken: token.id,
        }),
      });
      const json = await res.json();
      Auth.read().write(json);
    } catch (e) {
      setApiErrorCritical(true);
    }
  };

  const handleNoWalletClick = async (e) => {
    e.preventDefault();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDisallowSubmit(true);
    setApiError(false);
    try {
      const res = await fetch("https://basel-qncsltdssa-uc.a.run.app", {
        method: "POST",
        headers: {
          Authorization: email,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          claimedToken: selectedToken?.id,
          walletAddress: code,
        }),
      });
      const json = await res.json();
      Auth.read().write(json);

      if (!json.tokenTransferred) {
        setApiError(true);
      } else {
        setCurrentStep(4);
      }
    } catch (e) {
      setApiError(true);
    }

    setLoading(false);
    setTimeout(() => {
      setDisallowSubmit(false);
    }, 3000);
  };

  useEffect(() => {
    if (availableTokens?.length) {
      const indexOfToken = availableTokens.findIndex(
        (it) => it.id === claimedToken
      );

      if (indexOfToken === -1) {
        setAttemptsRemaining(availableTokens.length);
      } else {
        setAttemptsRemaining(availableTokens.length - indexOfToken - 1);
      }
    }
  }, [availableTokens, claimedToken]);

  const callback = useCallback(
    (event) => {
      setAttemptsRemaining(attemptsRemaining - 1);
      setError(false);
      setShowWave(false);
      setShowLoader(true);
      setShowConfetti(true);
      setTimeout(() => {
        setShowLoader(false);
        setError(false);
        setShowConfetti(false);
        setCurrentStep(2);
      }, 1000);
    },
    [attemptsRemaining, error, showLoader, currentStep]
  );
  const bind = useLongPress(callback, {
    onFinish: (event) => {},
    onStart: (event) => {
      setShowWave(true);
    },
    onCancel: (event) => {
      setShowWave(false);
      setError(true);
    },
    threshold: 2000,
    detect: "both",
  });
  const onDone = () => {
    // setShowAttempts(true);
  };

  const onDoneFinalTypewriter = () => {
    setShowCredits(true);
  };

  const handleInputChange = (e) => setCode(e.target.value);

  return (
    <>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>generate | heart terminal</title>

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
        className={currentStep < 4 ? "triangles site-main" : ""}
        style={{ paddingTop: "0", paddingBottom: "0" }}
      >
        {showCreditsOverlay ? (
          <OverlayCredits>
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                padding: "24px",
                fontSize: "200%",
                fontWeight: "1000",
                transform: "scale(1, .8547)",
              }}
              onClick={handleHideCredits}
            >
              X
            </div>
            <div className="page-content spacer p-top-lg">
              <div className="wrapper spacer p-top-md">
                <div className="content">
                  <div className="clearfix">
                    Concept, Design, and Direction
                    <br />
                    Gregory X<br />
                    <br />
                    Development
                    <br />
                    Brian Lewis
                    <br />
                    <br />
                    Additional Art Assets
                    <br />
                    John Dill
                    <br />
                    <br />
                    Animations
                    <br />
                    Hùng Chềnh
                    <br />
                    Harish Prajapat
                    <br />
                    <br />
                    Art Patron & Support
                    <br />
                    Swamy
                    <br />
                    <br />
                    <span style={{ fontWeight: "1000" }}>Thank You</span>
                    <br />
                    Robot Heart Foundation,
                    <br />
                    the entire Robot Heart family,
                    <br />
                    and most importantly, our
                    <br />
                    community, guests, and
                    <br />
                    supporters.
                  </div>
                </div>
              </div>
            </div>
          </OverlayCredits>
        ) : null}
        {showTosOverlay ? (
          <OverlayCredits style={{ paddingBottom: "80px" }}>
            <div
              style={{
                position: "fixed",
                top: "0",
                right: "0",
                padding: "24px",
                fontSize: "200%",
                fontWeight: "1000",
                transform: "scale(1, .8547)",
              }}
              onClick={handleHideTosOverlay}
            >
              X
            </div>
            <div className="page-content spacer p-top-lg">
              <div className="wrapper spacer p-top-md">
                <div className="content">
                  <div className="clearfix">
                    <span style={{ fontWeight: "1000" }}>Terms of Service</span>
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." Section 1.10.32 of "de
                    Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    1914 translation by H. Rackham "But I must explain to you
                    how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete
                    account of the system, and expound the actual teachings of
                    the great explorer of the truth, the master-builder of human
                    happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not
                    know how to pursue pleasure rationally encounter
                    consequences that are extremely painful. Nor again is there
                    anyone who loves or pursues or desires to obtain pain of
                    itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him
                    some great pleasure. To take a trivial example, which of us
                    ever undertakes laborious physical exercise, except to
                    obtain some advantage from it? But who has any right to find
                    fault with a man who chooses to enjoy a
                  </div>
                </div>
              </div>
            </div>
          </OverlayCredits>
        ) : null}
        <div className="page-content spacer p-top-lg">
          <div className="wrapper">
            <div className="content">
              <div className="clearfix">
                {currentStep === -1 ? (
                  <div className="generator-typewriter-2">
                    <Typewriter
                      id="typewriter--1"
                      options={{
                        loop: false,
                      }}
                      className="generator-typewriter-2"
                      onInit={(typewriter) => {
                        typewriter
                          .changeDelay(1)
                          .pauseFor(400)
                          .typeString(`<span class="oII">No wallet?</span>`)
                          .pauseFor(600)
                          .typeString(`<span class="oII"> No problem.</span>`)
                          .pauseFor(600)
                          .typeString(
                            `<span class="oII"> We'll send your asset to your email address later.</span>`
                          )
                          .callFunction(() => {
                            document
                              .getElementsByClassName("Typewriter__cursor")[0]
                              .classList.add("hidden-cursor");
                          })
                          .pasteString(`<span class="oII"><br/><br/></span>`)
                          .pauseFor(800)
                          .callFunction(() => {
                            document
                              .getElementsByClassName("Typewriter__cursor")[0]
                              .classList.remove("hidden-cursor");
                          })
                          .pauseFor(400)
                          .typeString(
                            `<span class="oII">Note you will lose the benefit of ledger authenticity.</span>`
                          )
                          .start();
                      }}
                    />
                  </div>
                ) : currentStep === 0 ? (
                  <div className="generator-typewriter-2">
                    <Typewriter
                      id="typewriter-0"
                      options={{
                        loop: false,
                      }}
                      className="generator-typewriter-2"
                      onInit={(typewriter) => {
                        typewriter
                          .changeDelay(15)
                          .typeString(
                            `<span class="HjP">Token<br/>already claimed.</span>`
                          )
                          .pauseFor(1200)
                          .callFunction(() => {
                            document
                              .getElementsByClassName("Typewriter__cursor")[0]
                              .classList.add("hidden-cursor");

                            onDone();
                          })
                          .start();
                      }}
                    />
                  </div>
                ) : currentStep === 1 ? (
                  <>
                    <div className="generator-typewriter-2">
                      <Typewriter
                        id="typewriter-1"
                        options={{
                          loop: false,
                        }}
                        className="generator-typewriter-2"
                        onInit={(typewriter) => {
                          typewriter
                            .changeDelay(15)
                            .typeString(
                              `<span class="HjP">Begin<br/>construction</span>`
                            )
                            .pauseFor(1200)
                            .callFunction(() => {
                              document
                                .getElementsByClassName("Typewriter__cursor")[0]
                                .classList.add("hidden-cursor");

                              onDone();
                            })
                            .start();
                        }}
                      />
                    </div>
                  </>
                ) : currentStep === 2 ? (
                  <>
                    <span></span>
                    <div className="generator-typewriter-2">
                      <Typewriter
                        id="typewriter-2"
                        options={{
                          loop: false,
                        }}
                        onInit={(typewriter) => {
                          typewriter
                            .changeDelay(1)
                            .typeString(
                              `<span class="HjP">Generation<br/>complete</span>`
                            )
                            .pauseFor(1200)
                            .callFunction(() => {
                              document
                                .getElementsByClassName("Typewriter__cursor")[0]
                                .classList.add("hidden-cursor");

                              onDone();
                            })
                            .start();
                        }}
                      />
                    </div>
                  </>
                ) : currentStep === 3 ? (
                  <>
                    {apiErrorCritical ? (
                      <p className="text after login-text-after">
                        <span className="login-red">ERROR: CRITICAL ERROR</span>
                      </p>
                    ) : (
                      <>
                        <div className="generator-typewriter-2">
                          <Typewriter
                            id="typewriter-2"
                            options={{
                              loop: false,
                            }}
                            onInit={(typewriter) => {
                              typewriter
                                .pauseFor(400)
                                .changeDelay(1)
                                .typeString(
                                  `<span class="HjP">Please encode<br/>identity.</span>`
                                )
                                .pauseFor(1200)
                                .callFunction(() => {
                                  document
                                    .getElementsByClassName(
                                      "Typewriter__cursor"
                                    )[0]
                                    .classList.add("hidden-cursor");

                                  onDone();
                                })
                                .start();
                            }}
                          />
                        </div>
                        <div className="title spacer p-top-sm m-left-xl m-right-xl">
                          <BotImg2Wrapper
                            style={{
                              padding: "12px",
                              border: "1px solid #fff",
                            }}
                          >
                            <BotImg2
                              src={
                                availableTokens?.[
                                  availableTokens?.length -
                                    attemptsRemaining -
                                    1
                                ]?.imgUrl
                              }
                              alt="Your bot"
                              style={{ width: "100%" }}
                            />
                          </BotImg2Wrapper>
                        </div>
                        <FormWrapper>
                          <section className="spacer p-top-sm">
                            {apiError ? (
                              <p className="text after login-text-after">
                                <span className="login-red">
                                  ERROR: TRANSFER FAILED
                                </span>
                              </p>
                            ) : null}
                            <form
                              onSubmit={onSubmit}
                              id="cf-3"
                              className="contact-form login-form"
                            >
                              <div className="form-group form-group-lg mb-0r">
                                <input
                                  autoComplete="off"
                                  name="code"
                                  className="form-control form-control-lg"
                                  id="cf-1-code"
                                  placeholder="Wallet address"
                                  value={code}
                                  disabled={loading}
                                  style={{ minHeight: "70px" }}
                                  onChange={handleInputChange}
                                ></input>
                                <div className="form-group form-group-lg mb-0 text-right">
                                  <button
                                    type="submit"
                                    className="btn btn-outline-primary text-uppercase"
                                    style={{
                                      minWidth: "100%",
                                      minHeight: "70px",
                                      marginTop: "1rem",
                                    }}
                                    disabled={
                                      loading || disallowSubmit || !code
                                    }
                                  >
                                    SEND TO WALLET
                                  </button>
                                  <button
                                    onClick={() => {
                                      setCurrentStep(-1);
                                    }}
                                    className="btn btn-outline-primary"
                                    style={{
                                      minHeight: "70px",
                                      minWidth: "100%",
                                      marginTop: "1rem",
                                      border: "none",
                                      textDecoration: "underline",
                                      textTransform: "unset",
                                    }}
                                    disabled={loading || disallowSubmit}
                                  >
                                    Don't have a wallet
                                  </button>
                                </div>
                              </div>
                            </form>
                          </section>
                        </FormWrapper>
                      </>
                    )}
                  </>
                ) : currentStep === 4 ? (
                  <>
                    <div
                      style={{
                        lineHeight: "29px",
                        minHeight: "58px",
                        display: "block",
                      }}
                    >
                      <Typewriter
                        id="typewriter-3"
                        options={{
                          loop: false,
                        }}
                        onInit={(typewriter) => {
                          typewriter
                            .changeDelay(1)
                            .pauseFor(400)
                            .typeString(
                              `<span class="uaV login-yellow">Transmission successful.</span>`
                            )
                            .pauseFor(1200)
                            .typeString(
                              `<br/><span class="uaV">Thank you.</span>`
                            )
                            .pauseFor(800)
                            .callFunction(() => {
                              document
                                .getElementsByClassName("Typewriter__cursor")[0]
                                .classList.add("hidden-cursor");

                              onDone();
                            })
                            .start();
                        }}
                      />
                    </div>
                    <div className="spacer m-left-sm m-right-sm">
                      <OrganicWrapper className="spacer m-left-lg m-right-lg">
                        <Lottie animationData={organicLoader} />
                      </OrganicWrapper>
                    </div>
                    <div id="typewriter-4">
                      <Typewriter
                        options={{
                          loop: false,
                        }}
                        onInit={(typewriter) => {
                          typewriter

                            .changeDelay(1)
                            .typeString(`<br/><span class="ttR"> </span>`)
                            .pauseFor(4000)
                            .callFunction(() => {
                              document
                                .getElementsByClassName("Typewriter__cursor")[1]
                                .classList.add("visible-cursor");
                            })
                            .pauseFor(1000)
                            .changeDelay(15)
                            .typeString(`<span class="ttR">Always</span>`)
                            .changeDelay(30)
                            .typeString(`<span class="ttR"> fight</span>`)
                            .changeDelay(45)
                            .typeString(`<span class="ttR"> for</span>`)
                            .changeDelay(60)
                            .typeString(`<span class="ttR"> the</span>`)
                            .changeDelay(75)
                            .typeString(`<span class="ttR"> user.</span>`)
                            .pauseFor(1600)
                            .callFunction(() => {
                              document
                                .getElementsByClassName("Typewriter__cursor")[1]
                                .classList.remove("visible-cursor");
                            })
                            .pauseFor(600)
                            .callFunction(() => {
                              onDoneFinalTypewriter();
                            })
                            .start();
                        }}
                      />
                    </div>
                    {showCredits ? (
                      <CreditsFade
                        style={{
                          display: "block",
                          lineHeight: "29px",
                          textDecoration: "underline",
                        }}
                        onClick={handleShowCredits}
                      >
                        Credits
                      </CreditsFade>
                    ) : null}
                  </>
                ) : null}

                {currentStep === 1 || currentStep === 2 ? (
                  <Attempts style={{ marginTop: "8px", marginBottom: "12px" }}>
                    {attemptsRemaining} attempt
                    {attemptsRemaining !== 1 ? "s" : ""} remaining
                  </Attempts>
                ) : null}

                <div className="wrapper bot-button">
                  {currentStep === 2 ? (
                    <div className="title spacer m-left-lg m-right-lg">
                      <div className="bot-id">
                        <BotImg
                          src={
                            availableTokens[
                              availableTokens.length - attemptsRemaining - 1
                            ].imgUrl
                          }
                          alt="Your bot"
                          style={{ width: "100%" }}
                        />
                        <span>
                          BOT ID:{" "}
                          {availableTokens[
                            availableTokens.length - attemptsRemaining - 1
                          ]?.id?.slice(-8)}
                        </span>
                      </div>
                    </div>
                  ) : null}

                  {showWave ? (
                    <div className="title spacer p-top-sm">
                      <Lottie animationData={waveLoader} />
                    </div>
                  ) : showConfetti ? (
                    <div className="title spacer p-top-sm">
                      <Lottie animationData={explodeLoader} />
                    </div>
                  ) : (
                    <div className="title spacer p-top-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        width="256"
                        height="256"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      ></svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {!showTosOverlay ? (
        <footer id="footer-form" className="site-footer form-footer">
          <div className="wrapper" style={{ paddingBottom: "0" }}>
            <div className="footer">
              <div className="align-self-center">
                {error ? (
                  <p
                    className="text after login-text-after"
                    style={{ textAlign: "center", marginBottom: "24px" }}
                  >
                    <span className="login-yellow">
                      Hold button to generate bot.
                    </span>
                  </p>
                ) : null}
                {currentStep === -1 ? (
                  <Form3
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    id="cf-2"
                    className="contact-form login-form"
                  >
                    <div className="form-group form-group-lg mb-0r">
                      <div
                        className="form-group form-group-lg mb-0"
                        style={{ textAlign: "center" }}
                      >
                        <button
                          disabled={disableConfirmButton}
                          onClick={async (e) => {
                            e.preventDefault();
                            setCurrentStep(4);
                          }}
                          type="submit"
                          className="btn btn-outline-primary text-uppercase step-2-button"
                        >
                          Continue with email
                        </button>
                        <button
                          disabled={disableConfirmButton}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentStep(3);
                          }}
                          type="submit"
                          style={{ marginTop: ".5em" }}
                          className="btn btn-outline-primary text-uppercase step-2-button"
                        >
                          Back to wallet
                        </button>
                      </div>
                    </div>
                  </Form3>
                ) : currentStep === 1 ? (
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    id="cf-1"
                    className="contact-form login-form"
                  >
                    <div className="form-group form-group-lg mb-0r">
                      <div
                        className="form-group form-group-lg mb-0"
                        style={{ textAlign: "center" }}
                      >
                        <button
                          disabled={showLoader ? true : false}
                          {...bind()}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          type="submit"
                          className="btn btn-outline-primary text-uppercase shimmer-button"
                          style={
                            showLoader
                              ? { background: "rgba(255, 255, 255, 0.25)" }
                              : { background: "none" }
                          }
                        >
                          Hold to Generate Bot
                        </button>
                      </div>
                    </div>
                  </Form>
                ) : currentStep === 2 ? (
                  <Form2
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    id="cf-2"
                    className="contact-form login-form"
                  >
                    <div className="form-group form-group-lg mb-0r">
                      <div
                        className="form-group form-group-lg mb-0"
                        style={{ textAlign: "center" }}
                      >
                        <button
                          disabled={disableConfirmButton}
                          onClick={async (e) => {
                            e.preventDefault();
                            setDisableConfirmButton(true);
                            setSelectedToken(
                              availableTokens[
                                availableTokens.length - attemptsRemaining - 1
                              ]
                            );
                            await setChosenTokenOnApi(
                              availableTokens[
                                availableTokens.length - attemptsRemaining - 1
                              ]
                            );
                            setDisableConfirmButton(false);
                            setCurrentStep(3);
                          }}
                          type="submit"
                          className="btn btn-outline-primary text-uppercase step-2-button"
                          style={{ background: "rgba(255,255,255,.5)" }}
                        >
                          Confirm
                        </button>
                        {attemptsRemaining > 0 ? (
                          <button
                            disabled={disableConfirmButton}
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentStep(1);
                            }}
                            type="submit"
                            style={{ marginTop: ".5em" }}
                            className="btn btn-outline-primary text-uppercase step-2-button"
                          >
                            Regenerate
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </Form2>
                ) : null}
              </div>
            </div>
          </div>
        </footer>
      ) : null}

      {(currentStep === 3 || currentStep === -1) && !showTosOverlay ? (
        <TosFooter onClick={handleTosClick}></TosFooter>
      ) : !showTosOverlay ? (
        <SystemFooter></SystemFooter>
      ) : null}
    </>
  );
};

export default Portfolio;
