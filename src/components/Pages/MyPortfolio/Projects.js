import React from "react";
import "./Projects.css";
import project1 from "../../../image/pr-1.png";
import project2 from "../../../image/pr-2.png";
import project3 from "../../../image/pr-3.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
      {/* single-card  */}
      <a
        href="https://gadgetly-3045d.web.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded single-card w-full bg-base-100 shadow border border-primary">
          <figure className="card-top">
            <img src={project1} alt="Gadgetly" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gadgetly!</h2>
            <p className="mb-2">
              Gadgetly is the wearhouse type simple website. This website made
              with <strong>Node js</strong>, express js,{" "}
              <strong>react js</strong>, Bootstrap, Firebase Authentication.
            </p>
            <p>
              A user can add product, delete product, update product &amp; more
            </p>
          </div>
        </div>
      </a>
      {/* single-card  */}
      <a
        href="https://tutorplus-5456d.web.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded single-card w-full bg-base-100 shadow border border-primary">
          <figure className="card-top">
            <img src={project2} alt="Tutorplus" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">TutorPlus!</h2>
            <p className="mb-2">
              TutorPlus is the Indipendent service provider web app. This
              website made with<strong>react js</strong>, Bootstrap,{" "}
              <strong>Firebase Authentication</strong>, CSS.
            </p>
            <p>
              A user can login log out with Google And also Sign in sign up
              features added.{" "}
            </p>
          </div>
        </div>
      </a>
      {/* single-card  */}
      <a
        href="https://ridwan-suhel.github.io/maEng/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded single-card w-full bg-base-100 shadow border border-primary">
          <figure className="card-top">
            <img src={project3} alt="Tutorplus" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MaEng!</h2>
            <p className="mb-2">
              MaEng is an Electro Mechanical Solution &amp; Service provider
              website. This website made with<strong>Bootstrap</strong>,CSS,
              HTML, <strong>Responsive website</strong>, jQuery.
            </p>
            <p>
              This is multipage website &amp; fully responsive for all device.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Projects;
