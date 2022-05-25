import React from "react";
import notfound from "../../../image/notFound.gif";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 mt-10 lg:mt-20">
      <div className="md:w-2/4 mx-auto">
        <h2 className="text-3xl md:text-5xl text-center font-light z-20 relative">
          Oops! page Not Found.
        </h2>

        <img
          src={notfound}
          alt="Not Found"
          className="w-full mt-[-90px] md:mt-[-80px] z-[-10px] relative rounded-xl"
        />
      </div>
    </div>
  );
};

export default NotFound;
