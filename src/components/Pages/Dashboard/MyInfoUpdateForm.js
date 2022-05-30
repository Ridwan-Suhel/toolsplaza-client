import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const MyInfoUpdateForm = () => {
  const [user, loading, error] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }

  const email = user?.email;

  const onSubmit = (data) => {
    const myInfo = {
      city: data.city,
      country: data.country,
      education: data.education,
      linkedin: data.linkedin,
      phone: data.phone,
      zip: data.zip,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    };

    fetch(`http://localhost:5000/userinfo/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount || result.upsertedCount) {
          toast.success("Your Profile updated successfully.");
        }
      });

    console.log(myInfo);
    reset();
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl border row-span-2 ">
      <div className="p-4">
        <h2 className="text-2xl mb-4">Update Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-5 ">
            <input
              placeholder="Your Phone"
              type="phone"
              className="input input-bordered input-primary w-full"
              {...register("phone", { required: true })}
            />
          </div>

          <div className="form-control mb-5">
            <input
              placeholder="Education"
              type="text"
              className="input input-bordered input-primary w-full"
              {...register("education", { required: true })}
            />
          </div>

          <div className="form-control mb-5">
            <input
              placeholder="Country"
              type="text"
              required
              className="input input-bordered input-primary w-full"
              {...register("country")}
            />
            <p className="text-red-500 mt-2">
              {errors.address && "Address is required"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-4">
            <div className="form-control mb-5">
              <input
                placeholder="City"
                type="text"
                className="input input-bordered input-primary w-full"
                {...register("city")}
              />
            </div>
            <div className="form-control mb-5">
              <input
                placeholder="Zip Code"
                type="number"
                className="input input-bordered input-primary w-full"
                {...register("zip")}
              />
              <p className="text-red-500 mt-2">
                {errors.zip && "Zip Code is required"}
              </p>
            </div>
          </div>

          <div className="form-control mb-5">
            <input
              placeholder="Linkedin Link"
              type="text"
              className="input input-bordered input-primary w-full"
              {...register("linkedin")}
            />
          </div>

          <div className="form-control mb-5 lg:mb-2">
            <input
              type="submit"
              value="Update Profile"
              className="btn-primary w-full btn"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyInfoUpdateForm;
