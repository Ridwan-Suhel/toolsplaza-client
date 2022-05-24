import React from "react";

const MyInfo = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border ">
      <div className="p-4">
        <h2 className="text-2xl mb-4">My Info</h2>
        <div className="mb-2">
          <span>Phone</span>
          <h2 className="text-xl">0173 545 3434</h2>
        </div>
        <div className="mb-2">
          <span>Education</span>
          <h2 className="text-xl">Dhaka Uni..</h2>
        </div>
        <div className="mb-2">
          <span>City</span>
          <h2 className="text-xl">Moulvibazar</h2>
        </div>
        <div className="mb-2">
          <span>Zip Code</span>
          <h2 className="text-xl">3200</h2>
        </div>
        <div className="mb-2">
          <span>Country</span>
          <h2 className="text-xl">Bangladesh</h2>
        </div>
        <div className="mb-2">
          <span>Linkedin</span>
          <h2 className="text-xl">https://linkedin-link</h2>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
