import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import DeleteModal from "./DeleteModal";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [deletingOrder, setDeletingOrder] = useState(null);
  const navigate = useNavigate();

  const email = user?.email;

  const url = `http://localhost:5000/orders/${email}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOrders(data);
  //     });
  // }, []);

  const {
    isLoading,
    data: orders,
    refetch,
  } = useQuery(["tools", email], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-5">
      <div className="myOrders">
        <h2 className="text-xl text-primary">
          You have - {orders?.length} {orders?.length > 1 ? "orders" : "order"}
        </h2>

        <div className="order-wrapper mt-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {orders?.map((order, index) => (
                  <OrderRow
                    key={order._id}
                    order={order}
                    index={index}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                  ></OrderRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {deletingOrder && (
        <DeleteModal
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        ></DeleteModal>
      )}
    </div>
  );
};

export default MyOrders;
