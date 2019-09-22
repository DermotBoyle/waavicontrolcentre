import React from "react";
import { useSpring, animated } from "react-spring";

const ProgressBar2 = () => {
  const props = useSpring({
    to: { width: "50px" },
    from: { width: "0px" },
    config: { tension: 200, friction: 60 }
  });

  return (
    <animated.div className="progressNumberContainer2" style={props}>
      <p style={{ color: "white" }}>02</p>
    </animated.div>
  );
};

export default ProgressBar2;
