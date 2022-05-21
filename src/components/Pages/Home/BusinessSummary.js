import React from "react";
import icon1 from "../../../image/icon-1.png";
import icon2 from "../../../image/icon-2.png";
import icon3 from "../../../image/icon-3.png";
import icon4 from "../../../image/icon-4.png";

const BusinessSummary = () => {
  return (
    <div className="pb-20">
      {/* partners */}
      {/* users */}
      {/* products */}
      {/* market demand */}
      <div className="container mx-auto px-4">
        <div className="title text-neutral mb-16">
          <h2 className="text-4xl">Our Executive Business Summary</h2>
          <p className="text-lg uppercase mt-3">
            Get a knowledge of our global user expectation
          </p>
        </div>
        <div className="summary-wrapper">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4">
            {/* single summary  */}
            <div className="summary text-center">
              <div className="img-wrapper">
                <img
                  style={{ width: "90px" }}
                  className="object-cover mx-auto"
                  src={icon1}
                  alt="Icon"
                />
              </div>
              <p className="text-4xl mt-8 mb-2 text-primary font-bold">245+</p>
              <p className="text-2xl">Products</p>
            </div>
            {/* single summary  */}
            <div className="summary text-center">
              <div className="img-wrapper">
                <img
                  style={{ width: "90px" }}
                  className="object-cover mx-auto"
                  src={icon2}
                  alt="Icon"
                />
              </div>
              <p className="text-4xl mt-8 mb-2 text-primary font-bold">67+</p>
              <p className="text-2xl">Partners</p>
            </div>
            {/* single summary  */}
            <div className="summary text-center">
              <div className="img-wrapper">
                <img
                  style={{ width: "90px" }}
                  className="object-cover mx-auto"
                  src={icon3}
                  alt="Icon"
                />
              </div>
              <p className="text-4xl mt-8 mb-2 text-primary font-bold">1.5M</p>
              <p className="text-2xl">Global Users</p>
            </div>
            {/* single summary  */}
            <div className="summary text-center">
              <div className="img-wrapper">
                <img
                  style={{ width: "90px" }}
                  className="object-cover mx-auto"
                  src={icon4}
                  alt="Icon"
                />
              </div>
              <p className="text-4xl mt-8 mb-2 text-primary font-bold">65%</p>
              <p className="text-2xl">Market Demands</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
