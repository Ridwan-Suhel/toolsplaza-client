import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import ProductRow from "./ProductRow";
import DeleteManagePrModal from "./DeleteManagePrModal";

const ManageProducts = () => {
  const [deletingTool, setDeletingTool] = useState(null);
  const url = `https://peaceful-shelf-27425.herokuapp.com/tools`;
  const {
    isLoading,
    data: tools,
    refetch,
  } = useQuery("orders", () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-5">
      <h2 className="text-xl text-primary ">Manage all Products</h2>

      <div className="manage-orders-wrapper mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Tools Name</th>
                <th>Description</th>
                <th>Unit Price</th>
                <th>Available</th>
                <th>Min Order</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {tools.map((tool, index) => (
                <ProductRow
                  key={tool._id}
                  index={index}
                  tool={tool}
                  refetch={refetch}
                  setDeletingTool={setDeletingTool}
                ></ProductRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingTool && (
        <DeleteManagePrModal
          deletingTool={deletingTool}
          refetch={refetch}
          setDeletingTool={setDeletingTool}
        ></DeleteManagePrModal>
      )}
    </div>
  );
};

export default ManageProducts;
