import React from "react";
import icon1 from "../../../image/icon-1.png";
import icon2 from "../../../image/icon-2.png";
import icon3 from "../../../image/icon-3.png";
import icon4 from "../../../image/icon-4.png";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const BusinessSummary = () => {
  return (
    <div className="pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          titleWrapperClasses="title mb-16 text-neutral"
          shortHeading="Our Executive Business Summary"
          shortTitle="Get a knowledge of our global user expectation"
        />
        <div className="summary-wrapper">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 md:grid-cols-2 gap-y-8 md:gap-4">
            {/* single summary  */}
            <div className="summary text-center">
              <div className="img-wrapper">
                <img
                  className="object-cover mx-auto md:w-24 w-14"
                  src={icon1}
                  alt="Icon"
                />
              </div>
              <p className="text-3xl md:text-4xl mt-4 md:mt-8 mb-2 text-primary font-bold">
                {/* <CountUp duration={5} end={245} suffix={"+"}></CountUp> */}
                <CountUp duration={2} end={245} suffix={"+"} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>
              <p className="text-lg md:text-2xl">Products</p>
            </div>
            {/* single summary  */}
            <div className="summary text-center">
              <div className="img-wrapper">
                <img
                  className="object-cover mx-auto md:w-24 w-14"
                  src={icon2}
                  alt="Icon"
                />
              </div>
              <p className="text-3xl md:text-4xl mt-4 md:mt-8 mb-2 text-primary font-bold">
                <CountUp duration={2} end={67} suffix={"+"} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>
              <p className="text-lg md:text-2xl">Partners</p>
            </div>
            {/* single summary  */}
            <div className="summary text-center">
              <div className="img-wrapper">
                <img
                  className="object-cover mx-auto md:w-24 w-14"
                  src={icon3}
                  alt="Icon"
                />
              </div>
              <p className="text-3xl md:text-4xl mt-4 md:mt-8 mb-2 text-primary font-bold">
                <CountUp duration={2} end={47} suffix={"."} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <CountUp duration={2} end={5} suffix={"M"} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>
              <p className="text-lg md:text-2xl">Global Users</p>
            </div>
            {/* single summary  */}
            <div className="summary text-center">
              <div className="img-wrapper">
                <img
                  className="object-cover mx-auto md:w-24 w-14"
                  src={icon4}
                  alt="Icon"
                />
              </div>
              <p className="text-3xl md:text-4xl mt-4 md:mt-8 mb-2 text-primary font-bold">
                <CountUp duration={2} end={65} suffix={"%"} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>
              <p className="text-lg md:text-2xl">Market Demands</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
