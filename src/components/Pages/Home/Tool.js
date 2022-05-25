import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const navigate = useNavigate();

  const {
    name,
    image,
    _id,
    price,
    minOrderQuantity,
    availableQuantity,
    description,
  } = tool;

  const handleClick = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <figure>
        <img
          src={image}
          className="w-full object-cover h-[220px]"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name} <div className="badge badge-primary">NEW</div>
        </h2>
        <p>{description.slice(0, 65).concat("...")}</p>
        <p>Minimun Order: {minOrderQuantity}</p>
        <p className="text-lg">Unit Price: ${price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            {availableQuantity} available
          </div>
        </div>
        <div className="card-actions justify-start">
          <button onClick={() => handleClick(_id)} className="btn btn-primary">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
