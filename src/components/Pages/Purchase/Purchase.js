import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Purchase = () => {
  const [user, loading, authError] = useAuthState(auth);
  const [qty, setQty] = useState("");
  const [err, setErr] = useState(false);
  const [minOrdererr, setMinOrdererr] = useState(false);
  // const [errTxt, setErrTxt] = useState("");
  console.log("Quan", qty);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { id } = useParams();
  const url = `http://localhost:5000/tools/${id}`;
  const { isLoading, data: tools } = useQuery("tools", () =>
    fetch(url).then((res) => res.json())
  );

  const unitPrice = parseInt(tools?.price);
  const totalPrice = unitPrice * Number(qty);
  // const orderQty = parseInt(qty);

  // console.log(totalPrice);

  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  const minOrder = parseInt(tools.minOrderQuantity);
  const availableQty = parseInt(tools.availableQuantity);
  // console.log(typeof minOrder, typeof availableQty);

  let incNum = () => {
    if (qty === availableQty) {
      setErr(true);
    }
    if (qty < availableQty) {
      setQty(Number(qty) + 1);
      setErr(false);
    }
  };
  let decNum = () => {
    // min quany
    if (qty > minOrder) {
      setQty(Number(qty) - 1);
      setErr(false);
      setMinOrdererr(false);
    }
  };

  const onSubmit = (data) => {
    const OrderPrice = unitPrice * Number(qty);

    // const orderQty = parseInt(data.quantity);
    // let newPrice = unitPrice * orderQty;

    // console.log(newPrice);
    const orderInfo = {
      address: data.address,
      city: data.city,
      email: data.email,
      name: data.name,
      quantity: qty,
      zip: data.zip,
      price: OrderPrice,
    };
    console.log(orderInfo);
    // refetch();
    reset();
  };
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

                <p>Minimun Order: {tools.minOrderQuantity}</p>
                <p className="text-lg">Unit Price: ${tools.price}</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">
                    {tools.availableQuantity} available
                  </div>
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
                        placeholder="Your Name"
                        value={user.displayName}
                        readOnly
                        type="text"
                        class="input input-bordered w-full"
                        {...register("name", { required: true })}
                      />
                    </div>

                    <div className="form-control mb-5">
                      <input
                        placeholder="Email"
                        value={user.email}
                        readOnly
                        type="email"
                        class="input input-bordered w-full"
                        {...register("email", { required: true })}
                      />
                    </div>

                    <div className="form-control mb-5">
                      <input
                        placeholder="Address"
                        type="text"
                        class="input input-bordered w-full"
                        {...register("address", { required: true })}
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
                          class="input input-bordered w-full"
                          {...register("city", { required: true })}
                        />

                        <p className="text-red-500 mt-2">
                          {errors.city && "City is required"}
                        </p>
                      </div>
                      <div className="form-control mb-5">
                        <input
                          placeholder="Zip Code"
                          type="number"
                          class="input input-bordered w-full"
                          {...register("zip", { required: true })}
                        />
                        <p className="text-red-500 mt-2">
                          {errors.zip && "Zip Code is required"}
                        </p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-3 lg:gap-4">
                      <div className="mb-5 lg:mb-2 lg:col-span-2 lg:flex ">
                        <button
                          type="button"
                          onClick={decNum}
                          className="btn btn-primary lg:rounded-tr-none lg:rounded-br-none"
                        >
                          Decrease
                        </button>
                        <input
                          placeholder={`Minimum Order ${tools.minOrderQuantity}`}
                          type="number"
                          value={qty}
                          class="input input-bordered w-full lg:rounded-none text-center"
                          {...register("quantity", {
                            onChange: (e) => setQty(e.target.value),
                            required: {
                              value: true,
                              message: "Something wrong please type Quantity.",
                            },
                          })}
                        />
                        <button
                          type="button"
                          onClick={incNum}
                          className="btn btn-primary lg:rounded-tl-none lg:rounded-bl-none"
                        >
                          Increase
                        </button>
                      </div>

                      <div className="mb-5 lg:mb-2 lg:col-span-1 ">
                        <p className="border p-3 rounded border-primary">
                          <span>TOTAL PRICE - </span>{" "}
                          <span className="font-bold">
                            {totalPrice > 0 ? totalPrice : " "}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-red-500 mb-2">
                      {errors.quantity &&
                        "Something wrong. please type quantity again."}
                    </p>
                    <p className="text-red-500 mb-2">
                      {err && "Not available more product."}
                    </p>

                    <div className="form-control mb-5 lg:mb-2">
                      <input
                        type="submit"
                        disabled={
                          (qty < minOrder || qty > availableQty) && "disabled"
                        }
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
