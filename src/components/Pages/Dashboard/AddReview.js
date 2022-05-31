import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const reviewInfo = {
      reviews: data.review,
      rating: data.ratingNumber,
    };

    fetch("https://peaceful-shelf-27425.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("You successfully added a review.");
      });

    reset();
  };

  return (
    <section className="py-10">
      <div className="container ">
        <div className="flex min-h-screen items-center justify-center">
          <div className="card lg:w-5/12 bg-base-100 shadow-xl border">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl text-center mb-5">
                  Please add a review
                </h2>

                {/* single input field  */}
                <div className="form-control w-full mt-5">
                  <label className="label mb">Select Rating Number</label>
                  <select
                    {...register("ratingNumber")}
                    className="select select-primary w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option selected>5</option>
                  </select>
                </div>

                {/* single input field  */}
                <div className="form-control w-full">
                  <label className="label mb">
                    <span className="">Review Description</span>
                  </label>
                  <textarea
                    type="text"
                    required
                    className="textarea textarea-primary textarea-bordered h-24 w-full"
                    {...register("review", {
                      required: {
                        value: true,
                        message: "Review description is required",
                      },
                    })}
                  ></textarea>
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors?.review?.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* single input field  */}
                <div className="form-control w-full mt-5">
                  <input
                    type="submit"
                    value="Add Review"
                    className="btn btn-primary w-full text-xl font-light"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
