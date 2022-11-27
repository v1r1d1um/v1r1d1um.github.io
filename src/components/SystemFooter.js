import React from "react";

export const SystemFooter = ({fadeFooter, fadeFooterSlow, pulseFooter}) => (
  <footer
    id="footer"
    className={
      (fadeFooter ? "fade-footer " : "") +
      (fadeFooterSlow ? "fade-footer-slow " : "") +
      (pulseFooter ? "pulse-footer " : "") +
      "site-footer"
    }
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
                  heart terminal 3.1.3 source v1.8
                </span>
                <br />
                <span className="second-line">
                  9CBEF update 218272.1 | access Omega Admin
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
