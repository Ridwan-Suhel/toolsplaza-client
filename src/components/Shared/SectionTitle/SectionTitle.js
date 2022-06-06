import React from "react";

const SectionTitle = ({ shortHeading, shortTitle, titleWrapperClasses }) => {
  return (
    <div className={`${titleWrapperClasses}`}>
      <h2 className="text-3xl md:text-4xl">{shortHeading}</h2>
      <p className="text-lg uppercase mt-3">{shortTitle}</p>
    </div>
  );
};

export default SectionTitle;
