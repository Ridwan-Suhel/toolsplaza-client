import React from "react";

const Tool = ({ tool }) => {
  const {
    name,
    image,
    _id,
    price,
    minOrderQuantity,
    availableQuantity,
    description,
  } = tool;
  return (
    <div class="card w-full bg-base-100 shadow-xl border">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {name} <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>{description.slice(0, 65).concat("...")}</p>
        <p>Minimun Order: {minOrderQuantity}</p>
        <p className="text-lg">Unit Price: ${price}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">{availableQuantity} available</div>
        </div>
        <div class="card-actions justify-start">
          <button class="btn btn-primary">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;