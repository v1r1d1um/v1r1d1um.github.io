import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import BackToHome from "../components/button/BackToHome";

const page404 = () => {
  document.body.classList.add("error404");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>404 | heart terminal</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      </MetaTags>

      <main id="main" className="site-main">
        <div id="page-content">
          <div className="wrapper">
            <div className="content">
              <div className="row gutter-width-md">
                <div className="col-11 col-sm-10 col-md-10 col-lg-7 col-xl-7">
                  <p className="text after">
                    404
                  </p>
                  <BackToHome />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default page404;
