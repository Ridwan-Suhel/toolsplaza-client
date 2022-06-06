import React from "react";
import "./MyPortfolio.css";
import ridwan from "../../../image/ridwan-suhel.png";
import Projects from "./Projects";

const MyPortfolio = () => {
  return (
    <section className="py-10">
      <div className="container px-4 mx-auto">
        <div className="portfolio-top mt-10">
          <h1 className="text-3xl md:text-5xl text-left md:text-center leading-tight ">
            Ridwan Suhel <br className="hidden lg:block" /> Frond-End Web
            Developer
            <br className="hidden lg:block" /> Based In Bangladesh
          </h1>
        </div>

        <div className="portfolio-middle mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="my-info w-full lg:pr-20">
              <div className="about mb-8">
                <p className="text-gray-400 mb-4">Biography</p>

                <h3 className="text-xl">
                  Dedicated to exploring and learning new technologies.{" "}
                  <br className="" /> Hi, I'm Ridwan a front-end developer based
                  in Bangladesh.
                </h3>
              </div>
              <div className="contact mb-8">
                <p className="text-gray-400 mb-4">Contact</p>

                <h3 className=" text-xl">Moulvibazar, Sylhet</h3>
                <h3 className=" text-xl">ridwansuhel96@gmail.com</h3>
                <h3 className=" text-xl">+88 01758 758 396</h3>
              </div>

              <div className="contact ">
                <p className="text-gray-400 mb-4">Education</p>

                <h3 className=" text-xl">
                  Student of Sylhet Govt Alia Madrasah &amp; Fresh Hon's
                  graduate. My subject was Quran and Islamic Studies.
                </h3>
              </div>
            </div>
            <div className="avatar lg:w-full hidden lg:grid">
              <div className="img-wrapper border">
                <img
                  src={ridwan}
                  alt="ridwan"
                  className=" p-8 border-primary border"
                />
              </div>
            </div>
            <div className="skills  w-full">
              <div className="mb-8">
                <p className="text-gray-400 mb-4 lg:text-right">
                  Technical Skills
                </p>
                <h3 className=" text-xl lg:text-right">HTML/HTML5</h3>
                <h3 className=" text-xl lg:text-right">CSS/SCSS</h3>
                <h3 className=" text-xl lg:text-right">Javascript</h3>
                <h3 className=" text-xl lg:text-right">Node/Express</h3>
              </div>
              <div className="mb-8">
                <p className="text-gray-400 mb-4 lg:text-right">
                  Framework Skills
                </p>
                <h3 className=" text-xl lg:text-right">React Js</h3>
                <h3 className=" text-xl lg:text-right">Tailwind</h3>
                <h3 className=" text-xl lg:text-right">Bootstrap</h3>
              </div>
              <div className="">
                <p className="text-gray-400 mb-4 lg:text-right">Other Skills</p>
                <h3 className=" text-xl lg:text-right">Git/Github</h3>
                <h3 className=" text-xl lg:text-right">
                  Firebase Authentication
                </h3>
                <h3 className=" text-xl lg:text-right">Heroku Deploy</h3>
                <h3 className=" text-xl lg:text-right">Figma UI/UX</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-bottom mt-20">
          <div>
            <p className="text-gray-400 mb-4 text-left md:text-center text-xl">
              Projects
            </p>
            <h1 className="text-xl text-left md:text-center ">
              My Recent works That I love to Show.
            </h1>
          </div>
          <div className="projects mt-20">
            <Projects />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
