import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";

const DeleteModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
  const { _id, name, toolsName } = deletingOrder;

  const handleDelete = () => {
    fetch(`https://peaceful-shelf-27425.herokuapp.com/orders/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.deletedCount) {
          toast.success("Suuccessfully deleted");
          setDeletingOrder(null);
          refetch();
        }
      });
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <ExclamationCircleIcon className="h-12 w-12 text-red-500 mx-auto my-5" />
          <h3 className="text-lg text-center">
            Are You Sure want to Delete{" "}
            <strong className="font-bold ">{toolsName}</strong>
          </h3>
          <p className="py-4 text-center">
            After Deleting the order It will remove from your Order list.
          </p>
          <div className="modal-action">
            <label for="delete-confirm-modal" className="btn btn-sm px-4">
              Cancel
            </label>
            <label
              for="delete-confirm-modal"
              onClick={() => handleDelete()}
              className="btn btn-error btn-sm px-4"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
