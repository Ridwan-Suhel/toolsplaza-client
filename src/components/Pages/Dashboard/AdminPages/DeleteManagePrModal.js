import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";

const DeleteManagePrModal = ({ deletingTool, refetch, setDeletingTool }) => {
  const { _id, name } = deletingTool;

  const handleDelete = () => {
    fetch(`http://localhost:5000/tools/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.deletedCount) {
          toast.success("Suuccessfully deleted");
          setDeletingTool(null);
          refetch();
        }
      });
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="delete-order-modal-from-pr"
        class="modal-toggle"
      />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <ExclamationCircleIcon className="h-12 w-12 text-red-500 mx-auto my-5" />
          <h3 class="text-lg text-center">
            Are You Sure want to Delete{" "}
            <strong className="font-bold ">{name}</strong>
          </h3>
          <p class="py-4 text-center">
            After Deleting the order It will remove from your Order list.
          </p>
          <div class="modal-action">
            <label for="delete-order-modal-from-pr" class="btn btn-sm px-4">
              Cancel
            </label>
            <label
              for="delete-order-modal-from-pr"
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

export default DeleteManagePrModal;
