import { PhoneIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const QuerySection = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto px-4">
        <div className="lg:w-3/4 py-5 px-8 sm:p-12 rounded-xl bg-neutral text-white mx-auto">
          <div className="md:flex items-center justify-between ">
            <div className="mb-5 md:mb-0">
              <h2 className="text-3xl mb-2">Have any query?</h2>
              <p className="text-xl text-slate-300">
                Please Contact us We are 7/24 available.
              </p>
            </div>
            <div>
              <button className="btn btn-primary text-lg">
                <PhoneIcon className="w-5 h-5 mr-2" />
                +88017 12312 428
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuerySection;
