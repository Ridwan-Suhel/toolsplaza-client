import React from "react";

const Tools = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="title text-neutral ">
          <h2 className="text-4xl">Our Tools</h2>
          <p className="text-lg">Check our best tools in this recent year.</p>
        </div>
        <div className="tools-wrapper">
          <div className="grid grid-cols-3 gap-4">
            {/* single card  */}
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
