import React from "react";
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/solid";
import locationImg from "../../../image/map1.png";

const OfficeContact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="off-contact-wrapper grid lg:grid-cols-2 items-center">
          <div>
            <div className="title mb-8 text-neutral">
              <h2 className="text-3xl md:text-4xl">Our Office Location</h2>
              <p className="text-xl  mt-3">
                Our office is based in Dhaka bangladesh which is near the
                Bangladesh pearlamnet house beside the beautiful buriganga
                river. This is our headofiice please contact us if have any
                query.
              </p>
            </div>
            <div className="location-wrapper">
              <li className="list-none flex mb-5">
                <span className="mr-2 md:mr-4 mt-1">
                  <LocationMarkerIcon className="w-6 h-6 md:h-8 md:w-8 text-neutral" />
                </span>
                <div>
                  <p className="text-xl md:text-2xl ">
                    Dhaka Metropoliton Ave.{" "}
                  </p>
                  <p>M-12/3212 DHK</p>
                </div>
              </li>
              <li className="list-none flex ">
                <span className="mr-2 md:mr-4 mt-1">
                  <MailIcon className="w-6 h-6 md:h-8 md:w-8 text-neutral" />
                </span>
                <div>
                  <p className="text-xl md:text-2xl ">
                    Mail us for information{" "}
                  </p>
                  <p>toolplaza@mail.com</p>
                </div>
              </li>
            </div>
          </div>
          <div>
            <img
              className="md:w-3/4 hidden lg:block lg:ml-auto"
              src={locationImg}
              alt="Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeContact;
