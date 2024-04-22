import React from "react";
import bg from "../images/servicebg.avif";
function Services() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: "100vh",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-60 h-60 bottom-0 bg-white m-90 ">
          <h1 className="text-white "> hhhhhhhhhh</h1>
        </div>
      </div>
    </div>
  );
}

export default Services;
