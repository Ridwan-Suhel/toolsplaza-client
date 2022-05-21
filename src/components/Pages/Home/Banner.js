import React from "react";
import bannerBg from "../../../image/bg-1.jpg";

const Banner = () => {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <div className="lg:w-1/3">
              <div className="bg-accent text-right">
                <h2>Lorem ipsum dolor sit.</h2>
                <h2>Lorem ipsum dolor sit.</h2>
                <h2>Lorem ipsum dolor sit.</h2>
              </div>
            </div> */}
            <div className="text-white lg:w-2/3">
              <p className="text-lg text-secondary">BORN TO ROAR...</p>
              <h1 className="text-5xl font-bold">
                ToolsPlaza More Than a Products.{" "}
              </h1>
              <p className="py-6">
                We live breathe and eat tools. Toolsplaza is the leading home
                essential tools manufacturers in Bangladesh. Our mission to
                continue to evolve and not be restricted by limitations.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
