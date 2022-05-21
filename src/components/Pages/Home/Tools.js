import React, { useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => setTools(data.slice(0, 6)));

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="title text-neutral mb-16">
          <h2 className="text-4xl">Our Tools</h2>
          <p className="text-lg">Check our best tools in this recent year.</p>
        </div>
        <div className="tools-wrapper">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4">
            {/* single card  */}
            {tools.map((tool) => (
              <Tool key={tool._id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
