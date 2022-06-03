import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import reviewsBg from "../../../image/bg-2.jpg";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const callData = async () => {
    await fetch("https://peaceful-shelf-27425.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
    setIsLoading(true);
  };

  useEffect(() => {
    callData();
  }, []);

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
            {isLoading ? (
              reviews.map((review) => (
                <Review review={review} key={review._id} />
              ))
            ) : (
              <div className="mb-16 relative col-span-2 ">
                <button class="btn loading absolute top-0 translate-x-[-50%] left-1/2">
                  loading
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
