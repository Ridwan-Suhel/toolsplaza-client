import React from "react";

const Review = ({ review }) => {
  const { rating, reviews } = review;
  return (
    <div className="card w-full bg-neutral text-neutral-content border-l-4">
      <div className="card-body">
        <p>{reviews.slice(0, 120).concat("...")}</p>
        <h2 className="card-title">Rating {rating}</h2>
        <div className="avatar">
          <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
