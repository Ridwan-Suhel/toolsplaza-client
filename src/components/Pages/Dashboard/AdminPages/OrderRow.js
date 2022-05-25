import React from "react";
import { toast } from "react-toastify";

const OrderRow = ({ index, order, refetch, setDeletingOrder }) => {
  const { _id, name, image, toolsName, email, price, quantity, paid, status } =
    order;

  const productInfo = {
    status: "Shipped",
  };

  const url = `http://localhost:5000/order/${_id}`;
  const handlePending = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount || data.upsertedCount) {
          toast.success("Successfully made an order shipped.");
        }
        refetch();
      });

    // console.log(productInfo);
  };

  // const handleDelete = () => {
  //   console.log("delete");
  // };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img src={image} alt={toolsName} />
          </div>
        </div>
      </td>
      <td>{toolsName}</td>
      <td>{email}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        {paid === true ? (
          <span className="btn btn-xs btn-success ">Paid</span>
        ) : (
          <span className="btn btn-xs btn-info ">Unpaid</span>
        )}
      </td>
      <td>
        {status === "pending" && paid === true ? (
          <span onClick={handlePending} className="btn btn-xs">
            pending
          </span>
        ) : (
          ""
        )}
        {status === "Shipped" && (
          <span onClick={handlePending} className="btn btn-xs btn-success">
            Shipped
          </span>
        )}
      </td>
      <td>
        {!paid && (
          <label
            onClick={() => setDeletingOrder(order)}
            for="delete-order-modal-by-admin"
            className="btn btn-xs btn-error"
          >
            Delete order
          </label>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;

// address:
// city:
// description:
// email:
// image:
// name:
// paid: true,
// price:
// quantity:
// toolsName:
// transactionId:
// unitPrice: 5
// zip:
// _id:
