import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
  const {
    _id,
    address,
    city,
    email,
    image,
    name,
    price,
    quantity,
    toolsName,
    zip,
    unitPrice,
    transactionId,
  } = order;

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
      <td>{name}</td>
      <td>{email}</td>
      <td>{quantity}</td>
      <td>{unitPrice}</td>
      <td>{price}</td>
      <td>
        {price && !order.paid && (
          <Link to={`/dashboard/payment/${_id}`} className="btn btn-xs px-4">
            Pay Now
          </Link>
        )}
        {price && order.paid && (
          <>
            <p>
              <span className="btn btn-success btn-xs px-4">Paid</span>
            </p>
            <p className="bg-gray-900 text-white p-1 rounded mt-2">
              <strong>Transaction Id:</strong> <small>{transactionId}</small>
            </p>
          </>
        )}
      </td>
      <td>
        {!order.paid && (
          <label
            for="delete-confirm-modal"
            onClick={() => setDeletingOrder(order)}
            className="btn btn-error btn-sm px-4"
          >
            Delete
          </label>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
