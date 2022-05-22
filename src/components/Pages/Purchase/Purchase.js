import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Purchase = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { id } = useParams();
  const url = `http://localhost:5000/tools/${id}`;
  const {
    isLoading,
    error,
    data: tools,
  } = useQuery("repoData", () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  //   const purchaseFormSubmit = () => [];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="product-card-details">
            <div class="card w-full bg-base-100 rounded-none border">
              <figure className="">
                <img className="" src={tools.image} alt={tools.name} />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{tools.name}</h2>

                <p>Minimun Order: 10</p>
                <p className="text-lg">Unit Price: $30</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">34 available</div>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase-info lg:col-span-2">
            <div>
              <div class="border ">
                <div class="card-body">
                  <h2 className="text-2xl">Product name: {tools.name} </h2>
                  <h2 className="text-xl">Description: {tools.description}</h2>
                  <h2 className="text-lg text-primary">
                    Please Fill up the form to place an order.
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mb-5">
                      <input
                        placeholder="Name"
                        class="input input-bordered w-full"
                        {...register("name", { required: true })}
                      />
                      {/* {errors.firstName?.type === "required" &&
                        "First name is required"} */}
                    </div>

                    <div className="form-control mb-5">
                      <input
                        placeholder="Email"
                        type="email"
                        class="input input-bordered w-full"
                        {...register("email", { required: true })}
                      />
                      {/* {errors.lastName && "Last name is required"} */}
                    </div>

                    <div className="form-control mb-5">
                      <input
                        placeholder="Address"
                        type="text"
                        class="input input-bordered w-full"
                        {...register("address", { required: true })}
                      />
                      {/* {errors.lastName && "Last name is required"} */}
                    </div>

                    <div className="form-control mb-5">
                      <input
                        placeholder="Phone"
                        type="number"
                        class="input input-bordered w-full"
                        {...register("phone", { required: true })}
                      />
                      {/* {errors.lastName && "Last name is required"} */}
                    </div>

                    <div className="grid lg:grid-cols-2 lg:gap-4">
                      <div className="form-control mb-5">
                        <input
                          placeholder="City"
                          type="text"
                          class="input input-bordered w-full"
                          {...register("city", { required: true })}
                        />
                        {/* {errors.lastName && "Last name is required"} */}
                      </div>
                      <div className="form-control mb-5">
                        <input
                          placeholder="Zip Code"
                          type="number"
                          class="input input-bordered w-full"
                          {...register("zip", { required: true })}
                        />
                        {/* {errors.lastName && "Last name is required"} */}
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-3 lg:gap-4">
                      <div className="mb-5 lg:col-span-2 lg:flex ">
                        <button className="btn btn-primary lg:rounded-tr-none lg:rounded-br-none">
                          Decrease
                        </button>
                        <input
                          placeholder=""
                          value="15"
                          type="number"
                          class="input input-bordered w-full lg:rounded-none text-center"
                          {...register("quantity", { required: true })}
                        />
                        <button className="btn btn-primary lg:rounded-tl-none lg:rounded-bl-none">
                          Increase
                        </button>
                        {/* {errors.lastName && "Last name is required"} */}
                      </div>
                    </div>

                    <div className="form-control mb-5">
                      <input
                        type="submit"
                        value="Place Order"
                        class="btn-neutral w-full btn"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
