import { StarIcon } from "@heroicons/react/solid";
import React from "react";

const Review = ({ review }) => {
  const { rating, reviews } = review;

  const ratingNum = Number(rating);

  let ratingStar;
  if (ratingNum > 0) {
    ratingStar = (
      <>
        <StarIcon className="w-5 h-5 text-yellow-400" />
      </>
    );
  }
  if (ratingNum > 1) {
    ratingStar = (
      <>
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
      </>
    );
  }
  if (ratingNum > 2) {
    ratingStar = (
      <>
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
      </>
    );
  }
  if (ratingNum > 3) {
    ratingStar = (
      <>
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
      </>
    );
  }
  if (ratingNum > 4) {
    ratingStar = (
      <>
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
      </>
    );
  }
  return (
    <div className="card w-full bg-neutral text-neutral-content border-l-4">
      <div className="card-body">
        <p>{reviews}</p>
        <h2 className="card-title">{ratingStar}</h2>
        <h2 className="">({rating} - star)</h2>
      </div>
    </div>
  );
};

export default Review;
