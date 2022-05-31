import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import ProductRow from "./ProductRow";
import DeleteManagePrModal from "./DeleteManagePrModal";

const ManageProducts = () => {
  const [deletingTool, setDeletingTool] = useState(null);
  // const [tools, setTools] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [searchTxtValue, setSearchTxtValue] = useState("");
  // const url = `http://localhost:5000/tools`;
  const url = `http://localhost:5000/tools?search=${searchTxtValue}`;
  const {
    isLoading,
    data: tools,
    refetch,
  } = useQuery(["tools", searchTxtValue], () =>
    fetch(url).then((res) => res.json())
  );

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setTools(data));
  // }, [url]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleInputSearch = (e) => {
    setSearchTxt(e.target.value);
  };
  const handleSearchBtn = () => {
    setSearchTxtValue(searchTxt);
  };

  return (
    <div className="mt-5">
      <h2 className="text-xl text-primary ">Manage all Products</h2>

      <div className="search-box mt-4">
        <input
          name="search"
          onChange={handleInputSearch}
          type="text"
          placeholder="Search by Tools name"
          class="input input-bordered input-primary w-full max-w-xs mr-3"
        />
        <button onClick={handleSearchBtn} className="btn btn-primary">
          Search
        </button>
      </div>

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
