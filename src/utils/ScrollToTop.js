import React, { useEffect, Fragment } from "react";

function ScrollToTop({ children }) {
  useEffect(() => {
      setTimeout(function () {
          window.scrollTo(1, 1);
      }, 2);
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default ScrollToTop;