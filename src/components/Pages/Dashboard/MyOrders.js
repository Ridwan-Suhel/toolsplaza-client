import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  const email = user?.email;

  const url = `http://localhost:5000/orders/${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <div className="myOrders">
        <h2 className="text-xl ">
          You have - {orders?.length} {orders?.length > 1 ? "orders" : "order"}
        </h2>

        <div className="order-wrapper mt-5">
          <div class="overflow-x-auto">
            <table class="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Tools Name</th>
                  <th>User</th>
                  <th>Email</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total Price</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {orders.map((order, index) => (
                  <OrderRow
                    key={order._id}
                    order={order}
                    index={index}
                  ></OrderRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;