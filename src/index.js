import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
// import "./index.css";
// import App from "./App";
import StartRating from "./starRating";
const Test = () => {
  const [star, onSetStar] = useState(0);
  return (
    <div>
      <StartRating maxRating={5} color={"blue"} onSetStar={onSetStar} />
      <p>this movie has {star}</p>
    </div>
  );
};
StartRating.prototype = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  message: PropTypes.array,
  className: PropTypes.string,
  onSetStar: PropTypes.func,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StartRating
      maxRating={5}
      color="#aaffff"
      message={["terrible", "bad", "Okay", "Good", "Amazing"]}
    />
    <StartRating maxRating={10} className="test" defaultRating={9} />
    <StartRating maxRating={20} className="test" defaultRating={3} />
    <StartRating />
    <Test />
  </React.StrictMode>
);
