import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import { Auth } from "../../api/auth";
import { LoginForm } from "../../components/form/LoginForm";

const TypewriterWrapper = styled.div`
  min-height: 64px;

  .Typewriter__cursor {
    line-height: 32px;
  }
`;

const FormWrapper = styled.div`
  @keyframes fadeIt {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIt 175ms ease-in-out 1;
`;

export const LoginComponent = (props) => {
  const [isLoggedOut, setIsLoggedOut] = useState(
    !!localStorage.getItem("BB_LOGOUT")
  );
  const [login, setLogin] = useState(Auth.read());
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!login.stale) {
      props.onLogin && props.onLogin(login);
    }
  }, [login, props]);

  const handleLoginSuccess = (user) => {
    const newProps = {
      ...user,
      valid: true,
    };
    login.write(newProps);
    setLogin(newProps);
    setError(false);
    setIsLoggedOut(false);
  };

  const handleLoginFailure = () => {
    setError(true);
  };

  if (login.valid && !login.stale) return null;

  return (
    <Fragment>
      <TypewriterWrapper>
        <Typewriter
          options={{
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(15)
              .typeString("")
              .pauseFor(1000)
              .typeString(
                `<span class="HjP">Please enter your<br/>identification</span>`
              )
              .pauseFor(1000)
              .callFunction(() => {
                document
                  .getElementsByClassName("Typewriter__cursor")[0]
                  .classList.add("hidden-cursor");
              })
              .callFunction(() => {
                setShowForm(true);
              })
              .start();
          }}
        />
      </TypewriterWrapper>
      {showForm ? (
        <FormWrapper>
          <section className="spacer p-top-sm">
            {(error && (
              <p className="text after login-text-after">
                <span className="login-red">ERROR: MATCH NOT FOUND</span>
                <br />
                <span>Please enter your benefit registration address.</span>
              </p>
            )) ||
              (login.stale && (
                <p className="text after login-text-after">
                  You have been logged out due to inactivity. Please log back
                  in.
                </p>
              )) ||
              (isLoggedOut && (
                <p className="text after login-text-after">
                  You have successfully been logged out.
                </p>
              ))}
            <LoginForm
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
            ></LoginForm>
          </section>
        </FormWrapper>
      ) : null}
    </Fragment>
  );
};

export default LoginComponent;
