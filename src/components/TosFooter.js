import React from "react";

export const TosFooter = ({
  fadeFooter,
  fadeFooterSlow,
  pulseFooter,
  onClick = () => {},
}) => (
  <footer
    id="footer"
    className={
      (fadeFooter ? "fade-footer " : "") +
      (fadeFooterSlow ? "fade-footer-slow " : "") +
      (pulseFooter ? "pulse-footer " : "") +
      "site-footer"
    }
    onClick={onClick}
  >
    <div className="wrapper">
      <div className="footer">
        <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-between">
          <div className="align-self-center">
            <div className="copyright">
              <p
                style={{
                  fontFamily: "Source Code Pro",
                  lineHeight: "17px",
                  fontSize: "80%",
                }}
              >
                <span className="first-line">
                  By submitting you agree to our
                </span>
                <br />
                <span
                  className="first-line"
                  style={{ textDecoration: "underline" }}
                >
                  Terms of Service
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
