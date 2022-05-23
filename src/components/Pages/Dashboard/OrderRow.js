import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, index }) => {
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
          <span className="btn btn-success btn-xs px-4">Paid</span>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
