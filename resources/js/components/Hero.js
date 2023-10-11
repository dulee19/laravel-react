import React from "react";
import ReactDOM from "react-dom";

const Hero = () => {
    return <div>Hero</div>;
};

export default Hero;

if (document.getElementById("hero")) {
    ReactDOM.render(<Hero />, document.getElementById("hero"));
}
