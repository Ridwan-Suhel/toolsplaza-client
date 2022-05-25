import React from "react";

const ProductRow = ({ tool, index, setDeletingTool }) => {
  const {
    _id,
    price,
    image,
    name,
    availableQuantity,
    description,
    minOrderQuantity,
  } = tool;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{description.slice(0, 30).concat("...")}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>{minOrderQuantity}</td>
      <td>
        <label
          onClick={() => setDeletingTool(tool)}
          for="delete-order-modal-from-pr"
          className="btn btn-xs btn-error"
        >
          Delete Tool
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
