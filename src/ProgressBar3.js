import React from "react";
import { useSpring, animated } from "react-spring";

const ProgressBar3 = () => {
  const props = useSpring({
    to: { width: "60px" },
    from: { width: "0px" },
    config: { tension: 200, friction: 60 }
  });

  return (
    <animated.div className="progressNumContainer" style={props}>
      <p style={{ color: "white" }}>03</p>
    </animated.div>
  );
};

export default ProgressBar3;
