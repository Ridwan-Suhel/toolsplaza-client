import React, { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import reviewsBg from "../../../image/bg-2.jpg";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  fetch("reviews.json")
    .then((res) => res.json())
    .then((data) => setReviews(data.slice(0, 4)));

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: `url(${reviewsBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          titleWrapperClasses="title mb-16 text-white"
          shortHeading="What our customer says."
          shortTitle="Take a look what our customer thought about us."
        />
        <div className="reviews-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((review) => (
              <Review review={review} key={review._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
