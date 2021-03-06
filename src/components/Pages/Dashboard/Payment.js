import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe(
    "pk_test_51L0rPMGUlBGybeRPaOihAR4XRTQ1eW3WNpgJ9hT6dOqSdXBR122t5aKdoPvUedhcBJKtMeMQkZv9Gm9E5wI2n2rA00UGMYmRE4"
  );

  const url = `https://peaceful-shelf-27425.herokuapp.com/orders/order/${id}`;
  const { isLoading, data } = useQuery(["data", id], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-5">
      <div className="flex items-center gap-6 justify-center flex-col ">
        {/* single card  */}
        <div className=" border card bg-base-100 shadow-xl bdata max-w-md mt-6  lg:w-[420px]">
          <div className="card-body">
            <h2 className="text-xl">
              Hi <strong>{data?.name}</strong>
            </h2>
            <h2 className="text-lg">
              Please Pay for <strong>{data?.toolsName}</strong>
            </h2>
            <p>
              Your Total Price is{" "}
              <strong className="text-gray-600">{data?.price}</strong> for total{" "}
              <strong>{data?.quantity}</strong> quantity.
            </p>
            <p className="text-xl">
              Your Charge is - <strong>${data?.price}</strong>
            </p>
          </div>
        </div>
        {/* single card  */}
        <div className="border card bg-base-100 shadow-xl bdata max-w-md lg:w-[420px]">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm data={data} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
