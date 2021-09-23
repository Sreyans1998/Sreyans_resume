import React, { useEffect } from "react";
import back from '../Images/right.png';

const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTopOnMount;