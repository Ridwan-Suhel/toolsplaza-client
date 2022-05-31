import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://peaceful-shelf-27425.herokuapp.com/tools").then((res) =>
      res.json()
    )
  );

  const imageStorageKey = "ce950de04ec24100b4296e5837ff26c5";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const productInfo = {
            name: data.name,
            price: data.price,
            description: data.description,
            minOrderQuantity: data.minOrderQuantity,
            availableQuantity: data.availableQuantity,
            image: img,
          };
          // sending to database
          fetch("https://peaceful-shelf-27425.herokuapp.com/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(productInfo),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add a Product.");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-5">
      {/* <h2 className="text-xl text-primary">Add products</h2> */}
      <div className="flex items-center justify-center mt-5 ">
        <div className="card lg:w-7/12 bg-base-100 shadow-xl border">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl text-center mb-5">Add Tools</h2>
              {/* single input  */}
              <div className="form-control mb-5 ">
                <input
                  placeholder="Tools Name"
                  type="text"
                  className="input input-bordered input-primary w-full"
                  {...register("name", { required: true })}
                />
                <p className="text-red-500 mt-2">
                  {errors.name && "Tools Name required"}
                </p>
              </div>

              {/* single input  */}
              <div className="form-control mb-5">
                <input
                  placeholder="Unit Price"
                  type="number"
                  className="input input-bordered input-primary w-full"
                  {...register("price", { required: true })}
                />
                <p className="text-red-500 mt-2">
                  {errors.price && "Price is required"}
                </p>
              </div>

              {/* grid row */}
              <div className="grid lg:grid-cols-2 lg:gap-4">
                {/* single input  */}
                <div className="form-control mb-5">
                  <input
                    placeholder="Minimum Order Quantity"
                    type="number"
                    className="input input-bordered input-primary w-full"
                    {...register("minOrderQuantity", { required: true })}
                  />
                  <p className="text-red-500 mt-2">
                    {errors.minOrderQuantity &&
                      "Minimum Order Quantity required"}
                  </p>
                </div>
                {/* single input  */}
                <div className="form-control mb-5">
                  <input
                    placeholder="Available Quantity"
                    type="number"
                    className="input input-bordered input-primary w-full"
                    {...register("availableQuantity", { required: true })}
                  />
                  <p className="text-red-500 mt-2">
                    {errors.availableQuantity && "Available Quantity required"}
                  </p>
                </div>
              </div>
              {/* single input field  */}
              <div className="form-control w-full">
                <textarea
                  type="text"
                  required
                  placeholder="Tools Description"
                  className="textarea textarea-primary textarea-bordered h-24 w-full"
                  {...register("description", { required: true })}
                ></textarea>
                <p className="text-red-500 mt-2">
                  {errors.description && "Tools Description is required"}
                </p>
              </div>

              {/* single input image field  */}
              <div className="form-control w-full">
                <input
                  type="file"
                  className="input input-bordered w-full input-primary pt-1.5"
                  {...register("image", { required: true })}
                />
                <p className="text-red-500 mt-2">
                  {errors.image && "Image is required"}
                </p>
              </div>

              <div className="form-control mb-5 lg:mb-2">
                <input
                  type="submit"
                  value="Add Product"
                  className="btn-primary w-full btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
