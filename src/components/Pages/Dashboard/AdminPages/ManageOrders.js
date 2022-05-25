import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import OrderRow from "./OrderRow";
const ManageOrders = () => {
  const url = `http://localhost:5000/orders`;
  const {
    isLoading,
    data: orders,
    refetch,
  } = useQuery("orders", () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-5">
      <h2 className="text-xl text-primary ">Manage all orders</h2>
      <p>
        we have total <strong>{orders.length}</strong> orders.
      </p>
      <div className="manage-orders-wrapper mt-5">
        <div class="overflow-x-auto">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Tools Name</th>
                <th>User Email</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Order</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {orders.map((order, index) => (
                <OrderRow
                  key={order._id}
                  index={index}
                  order={order}
                  refetch={refetch}
                ></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
