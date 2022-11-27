import React, { useState } from "react";

export const LoginForm = (props) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [disallowSubmit, setDisallowSubmit] = useState(false);

  const handleInputChange = (e) => setCode(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDisallowSubmit(true);
    try {
      const res = await fetch(
        "https://basel-qncsltdssa-uc.a.run.app",
        {
          headers: {
            Authorization: code,
          },
        }
      );
      const json = await res.json();
      props.onSuccess && props.onSuccess(json);
      if (window.location.hostname !== "localhost" && window.gtag) {
        window.gtag("event", "login-success", {
          code: code.toLowerCase()
        });
      }
    } catch (e) {
      props.onFailure && props.onFailure();
      if (window.location.hostname !== "localhost" && window.gtag) {
        window.gtag("event", "login-failure", {
          code: code.toLowerCase(),
        });
      }
    }

    setLoading(false);
    setTimeout(() => {
      setDisallowSubmit(false);
    }, 1000);
  };

  return (
    <form onSubmit={onSubmit} id="cf-1" className="contact-form login-form">
      <div className="form-group form-group-lg mb-0r">
        <label
          className="form-label-lg above after"
          style={{ display: "none" }}
          htmlFor="cf-1-code"
        >
          Email address
        </label>
        <input
          autoComplete="off"
          name="code"
          className="form-control form-control-lg"
          id="cf-1-code"
          placeholder="Email address"
          value={code}
          disabled={loading}
          style={{ minHeight: "70px"}}
          onChange={handleInputChange}
        ></input>
        <div className="form-group form-group-lg mb-0 text-right">
          <button
            type="submit"
            className="btn btn-outline-primary text-uppercase"
            style={{ minHeight: "70px", marginTop: "1rem" }}
            disabled={loading || disallowSubmit || !code}
          >
            TRANSMIT
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
